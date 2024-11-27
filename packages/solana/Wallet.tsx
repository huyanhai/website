'use client';
import { AnchorProvider } from '@project-serum/anchor';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';

import { Connection, clusterApiUrl } from '@solana/web3.js';

import React, { useMemo } from 'react';

const WalletCom = () => {
  const wallet = useAnchorWallet();
  const { connected, connect, disconnect, select, wallets, publicKey } =
    useWallet();

  const connectWallet = async () => {
    await select(InstalledWallet.adapter.name);
    await connect();
  };

  const getProvider = () => {
    if (!wallet) return null;
    const connection = new Connection(clusterApiUrl('devnet'));

    return new AnchorProvider(
      connection,
      wallet,
      AnchorProvider.defaultOptions()
    );
  };

  //   const program = new Program(
  //     idl as any,
  //     '67LWCuERY8GKJfahid4fonb3G39HkAerbnSP6xDkd6QF',
  //     getProvider()!
  //   );

  //   const test = async () => {
  //     const data = await program.methods.initialize(
  //       {
  //         accounts: {
  //           new_account: Keypair.generate(),
  //           signer: wallet?.publicKey,
  //           system_program: SystemProgram.programId
  //         }
  //       },
  //       new BN(42)
  //     ).rpc();

  //     console.log(data);
  //   };

  //   test();

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
    </>
  );
};

export default WalletCom;
