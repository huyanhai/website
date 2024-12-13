'use client';
import { BN } from '@project-serum/anchor';

import React, { useEffect, useState } from 'react';
import useWallet from './hooks/useWallet';
import useBalance from './hooks/useBalance';
import useApi from './hooks/useApi';
import useInfo from './hooks/useInfo';

type InfoType = { name: string; age: 0 };

const WalletCom = () => {
  const [info, setInfo] = useState<InfoType>({} as InfoType);
  const { publicKey, connected, disconnect, connectWallet } = useWallet();
  const { balance, transaction } = useBalance();
  const { initInfo, getAccount, updateAge, updateScore } = useApi();
  const { addressPd } = useInfo();

  const [age, setAge] = useState(0);

  const register = async () => {
    await initInfo('hyh5', new BN(30));
  };

  const update = async () => {
    await updateAge(new BN(age));
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

  const updateScoreHandler = () => {
    updateScore(new BN(12), new BN(20));
  };

  useEffect(() => {
    if (publicKey) {
      getInfo();
    }
  }, [publicKey]);

  return (
    <>
      <div style={{ color: 'white' }}>addressPd:{addressPd?.toBase58()}</div>
      <div style={{ color: 'white' }}>Wallet is {publicKey?.toBase58()}</div>
      <div style={{ color: 'white' }}>
        <button onClick={updateScoreHandler}>Update Score</button>
      </div>
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
        <>
          <input
            value={age}
            onInput={(e) => setAge(e.target.value)}
            type="number"
          />
          <button onClick={update} style={{ background: 'yellow' }}>
            更新年龄
          </button>
        </>
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
