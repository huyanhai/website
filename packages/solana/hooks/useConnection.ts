import { Connection } from '@solana/web3.js';
import { APP_URL } from '../constants/env';

export default () => {
  const connection = new Connection(APP_URL);

  return { connection };
};
