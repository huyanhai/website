import { Buffer } from 'buffer';
import { useMemo } from 'react';
import idl from '../idl.json';
import { PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor';
import {
  useAnchorWallet,
  useConnection,
  useWallet
} from '@solana/wallet-adapter-react';
import { APP_ID } from '../constants';

export default () => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const provider = useMemo(() => {
    return new AnchorProvider(
      connection,
      wallet!,
      AnchorProvider.defaultOptions()
    );
  }, [wallet]);

  const program = useMemo(() => {
    return new Program(idl as any, APP_ID, provider!);
  }, [provider]);

  const generatePd = (seeds: Array<Buffer | Uint8Array>) => {
    return PublicKey.findProgramAddressSync(seeds, program?.programId!)[0];
  };

  // 地址pd
  const addressPd = useMemo(() => {
    if (publicKey) {
      return generatePd([publicKey?.toBuffer()!]);
    }
  }, [publicKey]);

  const getAccountByPd = (pd: PublicKey) => {
    return program.account.userInfo.fetch(pd);
  };

  return {
    program,
    addressPd,
    getAccountByPd,
    generatePd
  };
};
