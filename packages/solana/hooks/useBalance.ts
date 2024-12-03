import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import useConnection from './useConnection';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionSignature
} from '@solana/web3.js';

export default () => {
  const [balance, setBalance] = useState(0);
  const { connected, publicKey, wallet, sendTransaction } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    if (!connected) {
      setBalance(0);
      return;
    }

    if (wallet && publicKey) {
      connection.getBalance(publicKey!).then((data) => {
        setBalance(data / LAMPORTS_PER_SOL);
      });
    }
  }, [connection, wallet, publicKey, connected]);

  //   fromPubkey: wallet?.publicKey!,
  //       toPubkey: new PublicKey('8jk53tHXqeoWyBDQXAC7bz5dk5t3p8cvN3LUJTgpPcPx'),
  //       lamports: 0.1 * LAMPORTS_PER_SOL

  const transaction = (
    fromPubkey: PublicKey,
    toPubkey: PublicKey,
    lamports: number | bigint
  ): Promise<TransactionSignature> => {
    const transaction = new Transaction();
    const action = SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports
    });

    transaction.add(action);
    return sendTransaction(transaction, connection);
  };

  return { balance, transaction };
};
