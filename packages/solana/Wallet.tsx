'use client';
import {
  LAMPORTS_PER_SOL,
  Transaction,
  PublicKey,
  Keypair
} from '@solana/web3.js';
import { AnchorProvider, Program, BN } from '@project-serum/anchor';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';

import { Connection, clusterApiUrl, SystemProgram } from '@solana/web3.js';
import * as bs58 from 'bs58';

import React, { useEffect, useMemo, useState } from 'react';

import idl from './idl.json';

const newAccountKp = Keypair.generate();

const WalletCom = () => {
  const wallet = useAnchorWallet();
  const {
    connected,
    connect,
    disconnect,
    select,
    wallets,
    publicKey,
    sendTransaction
  } = useWallet();

  const [balance, setBalance] = useState(0);
  const connection = new Connection(clusterApiUrl('devnet'));

  const getBalance = async () => {
    const data = await connection.getBalance(publicKey!);
    setBalance(data / LAMPORTS_PER_SOL);
  };

  const connectWallet = async () => {
    try {
      await select(InstalledWallet.adapter.name);
      await connect();
    } catch (error) {
      console.log('链接失败', error);
    }
  };

  const provider = useMemo(() => {
    wallet && getBalance();
    return new AnchorProvider(
      connection,
      wallet!,
      AnchorProvider.defaultOptions()
    );
  }, [wallet]);

  const program = useMemo(() => {
    return new Program(
      idl as any,
      '67LWCuERY8GKJfahid4fonb3G39HkAerbnSP6xDkd6QF',
      provider!
    );
  }, [provider]);

  const getMsg = async () => {
    const [pd] = PublicKey.findProgramAddressSync(
      [Buffer.from('new_account')],
      program?.programId!
    );

    try {
      const account: any = await program.account.newAccount.fetch(pd);
      console.log('account', account.data.toString());
    } catch (error) {
      await program.methods
        .initialize(new BN(120))
        .accounts({
          newAccount: pd,
          signer: wallet?.publicKey,
          systemProgram: SystemProgram.programId
        })
        .rpc();
      const account = await program.account.newAccount.fetch(pd);
      console.log('account', account, pd.toBase58());
    }
  };

  const send = async () => {
    const transaction = new Transaction();
    const action = SystemProgram.transfer({
      fromPubkey: wallet?.publicKey!,
      toPubkey: new PublicKey('8jk53tHXqeoWyBDQXAC7bz5dk5t3p8cvN3LUJTgpPcPx'),
      lamports: 0.1 * LAMPORTS_PER_SOL
    });

    transaction.add(action);
    const data = await sendTransaction(transaction, connection);
    console.log('data is ', data);
  };

  const add = async () => {
    const [pd] = PublicKey.findProgramAddressSync(
      [Buffer.from('new_account')],
      program?.programId!
    );

    console.log('执行add', pd);

    await program.methods
      .add()
      .accounts({
        newAccount: pd,
        signer: wallet?.publicKey,
        systemProgram: SystemProgram.programId
      })
      .rpc();
    const account = await program.account.newAccount.fetch(pd);
    console.log('account', account, pd.toBase58());
  };

  const InstalledWallet = useMemo(() => {
    return wallets.filter((wallet) => wallet.readyState === 'Installed')[0];
  }, [wallets]);

  return (
    <>
      <div style={{ color: 'white' }}>Wallet is {publicKey?.toBase58()}</div>
      <div style={{ color: 'white' }}>余额:{balance}</div>
      <button onClick={connectWallet} style={{ background: 'yellow' }}>
        链接钱包
      </button>
      <button onClick={disconnect} style={{ background: 'red' }}>
        断开连接
      </button>

      <button onClick={getMsg} style={{ background: 'red' }}>
        获取消息
      </button>
      <button onClick={add} style={{ background: 'yellow' }}>
        新增
      </button>
      <button onClick={send} style={{ background: 'blue' }}>
        转账
      </button>
    </>
  );
};

export default WalletCom;
