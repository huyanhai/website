'use client';
import {
  ConnectionProvider,
  useWallet,
  WalletProvider
} from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

import React from 'react';
import Wallet from './Wallet';
import { clusterApiUrl } from '@solana/web3.js';

const App = () => {
  const { connected, connect, select } = useWallet();
  // const {} = useWalletMultiButton({
  //   onSelectWallet() {
  //     console.log('select');
  //   }
  // });
  return (
    <div>
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
          <Wallet />
          {/* <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider> */}
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default App;
