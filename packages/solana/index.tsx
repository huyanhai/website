'use client';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import '@solana/wallet-adapter-react-ui/styles.css';

import React from 'react';
import Wallet from './Wallet';
import { APP_URL } from './constants/env';

const App = () => {
  return (
    <div>
      <ConnectionProvider endpoint={APP_URL}>
        <WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
          <Wallet />
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default App;
