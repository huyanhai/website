import { clusterApiUrl, Connection } from '@solana/web3.js';

export default () => {
  const connection = new Connection(clusterApiUrl('devnet'));

  return { connection };
};
