'use client';
import { AnchorProvider, Program, BN } from '@project-serum/anchor';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';

import {
  Connection,
  Keypair,
  clusterApiUrl,
  SystemProgram
} from '@solana/web3.js';

import React, { useMemo } from 'react';

import idl from './idl.json';

const WalletCom = () => {
  const wallet = useAnchorWallet();
  const { connected, connect, disconnect, select, wallets, publicKey } =
    useWallet();

  const connection = new Connection(clusterApiUrl('devnet'));

  const connectWallet = async () => {
    try {
      await select(InstalledWallet.adapter.name);
      await connect();
    } catch (error) {
      console.log('链接失败', error);
    }
  };

  const getProvider = () => {
    if (!wallet) return null;

    return new AnchorProvider(
      connection,
      wallet,
      AnchorProvider.defaultOptions()
    );
  };

  const provider = getProvider()!;

  const getMsg = () => {
    if (provider) {
      const newAccountKp = new Keypair();
      const program = new Program(
        idl as any,
        '67LWCuERY8GKJfahid4fonb3G39HkAerbnSP6xDkd6QF',
        provider
      );

      const test = async () => {
        const txHash = await program.methods
          .initialize(new BN(42))
          .accounts({
            newAccount: newAccountKp.publicKey,
            signer: publicKey,
            systemProgram: SystemProgram.programId
          })
          .signers([newAccountKp])
          .rpc();

        await connection.sendEncodedTransaction(txHash);

        // Fetch the created account
        const newAccount = await program.account.newAccount.fetch(
          newAccountKp.publicKey
        );

        console.log(newAccount);
      };
      test();
    }
  };

  const InstalledWallet = useMemo(() => {
    return wallets.filter((wallet) => wallet.readyState === 'Installed')[0];
  }, [wallets]);

  return (
    <>
      <div style={{ color: 'white' }}>Wallet is {publicKey?.toBase58()}</div>
      <button onClick={connectWallet} style={{ background: 'yellow' }}>
        链接钱包
      </button>
      <button onClick={disconnect} style={{ background: 'red' }}>
        断开连接
      </button>

      <button onClick={getMsg} style={{ background: 'red' }}>
        获取消息
      </button>
    </>
  );
};

export default WalletCom;
