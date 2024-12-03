'use client';
import { BN } from '@project-serum/anchor';

import React, { useEffect, useState } from 'react';
import useWallet from './hooks/useWallet';
import useBalance from './hooks/useBalance';
import useApi from './hooks/useApi';

type InfoType = { name: string; age: 0 };

const WalletCom = () => {
  const [info, setInfo] = useState<InfoType>({} as InfoType);
  const { publicKey, connected, disconnect, connectWallet } = useWallet();
  const { balance, transaction } = useBalance();
  const { initInfo, getAccount, updateAge } = useApi();

  const register = async () => {
    await initInfo('hyh5', new BN(30));
  };

  const update = async () => {
    await updateAge(new BN(30));
    getInfo();
  };

  const getInfo = async () => {
    const data: any = await getAccount();
    if (data) {
      setInfo({
        name: data.name,
        age: data.age
      });
    }
  };

  useEffect(() => {
    if (publicKey) {
      getInfo();
    }
  }, [publicKey]);

  return (
    <>
      <div style={{ color: 'white' }}>Wallet is {publicKey?.toBase58()}</div>
      {info.name && (
        <div style={{ color: 'white' }}>
          名字是:{info.name},年龄是:{info.age}
        </div>
      )}
      <div style={{ color: 'white' }}>余额:{balance}</div>

      {connected ? (
        <button onClick={disconnect} style={{ background: 'red' }}>
          断开连接
        </button>
      ) : (
        <button onClick={connectWallet} style={{ background: 'yellow' }}>
          链接钱包
        </button>
      )}

      {!info.name ? (
        <button onClick={register} style={{ background: 'red' }}>
          注册用户信息
        </button>
      ) : (
        <button onClick={update} style={{ background: 'yellow' }}>
          更新年龄
        </button>
      )}

      {/* <button onClick={add} style={{ background: 'yellow' }}>
        新增
      </button> */}
      {/* <button onClick={() => transaction()} style={{ background: 'blue' }}>
        转账
      </button> */}
    </>
  );
};

export default WalletCom;
