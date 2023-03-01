import { useEffect, useState } from 'react';

function useGetEthereumBalance() {
  const [balance, setBalance] = useState(null);

  const convertFromWei = (value, decimals) => {
    const base = 10 ** decimals;
    const balance = parseFloat(value) / base;
    return balance.toFixed(2);
  };

  useEffect(() => {
    const getBalance = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const balanceWei = await window.ethereum.request({ method: 'eth_getBalance', params: [address[0]] });
        console.log("ss",address[0],balanceWei)
        const balanceEth = convertFromWei(balanceWei, 18)
        setBalance(balanceEth);
      }
    };
    getBalance();
  }, []);

  return `${balance} ETH`
}

export default useGetEthereumBalance;