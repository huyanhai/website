import { useWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';

export default () => {
  const { connected, connect, disconnect, select, wallets, publicKey } =
    useWallet();

  const installedWallet = useMemo(() => {
    return wallets.filter((wallet) => wallet.readyState === 'Installed')[0];
  }, [wallets]);

  const connectWallet = async () => {
    try {
      await select(installedWallet.adapter.name);
      await connect();
    } catch (error) {
      console.log('链接失败', error);
    }
  };

  return { connected, publicKey, connectWallet, disconnect };
};
