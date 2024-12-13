import { SystemProgram } from '@solana/web3.js';
import useInfo from './useInfo';
import { useWallet } from '@solana/wallet-adapter-react';
import { textToBuffer } from '../utils/buffer';

export default () => {
  const { publicKey } = useWallet();
  const { program, addressPd, getAccountByPd, generatePd } = useInfo();

  const getAccount = () => {
    return getAccountByPd(addressPd!);
  };

  // 用户注册
  const initInfo = async (name: string, age: number) => {
    return program.methods
      .register(name, age)
      .accounts({
        userInfo: addressPd!,
        signer: publicKey,
        systemProgram: SystemProgram.programId
      })
      .rpc();
  };

  // 更新年龄数据
  const updateAge = async (age: number) => {
    return program.methods
      .updateAge(age)
      .accounts({
        userInfo: addressPd!,
        signer: publicKey,
        systemProgram: SystemProgram.programId
      })
      .rpc();
  };

  // 更新分数
  const updateScore = async (score: number, time: number) => {
    const pd = generatePd([textToBuffer('score')]);
    return program.methods
      .updateScore(score, time)
      .accounts({
        scoreInfo: pd,
        signer: publicKey,
        systemProgram: SystemProgram.programId
      })
      .rpc();
  };

  return {
    initInfo,
    getAccount,
    updateAge,
    updateScore
  };
};
