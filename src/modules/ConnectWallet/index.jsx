import { useMetaMask } from "metamask-react";

import { Button, Spinner } from "../../components"
import useGetEthereumBalance from "../../utils/useGetBalance"

const getStatus = ({ status, account, chainId, balance, connect }) => {
  switch(status){
    case "initializing":
      return <div className="flex flex-col items-center justify-center">
          Synchronisation with MetaMask ongoing...
          <Spinner />
      </div>
    case "unavailable":
      return 'MetaMask not available :'
    case "notConnected":
      return <Button 
        title="Connect Wallet" 
        type="primary"
        className={"py-[12px] text-[18px]"}
        onClick={connect}
    />
    case "connecting":
      return <div className="flex flex-col items-center justify-center">
          Connecting...
          <Spinner />
      </div>
    case "connected":
      return <Connected account={account} chainId={chainId} balance={balance}/>
  }
}

const Connected = ({ account, chainId, balance }) => {
  return <div className="bg-gray-900 text-white p-4 rounded-md">
    <div className="text-lg font-bold mb-2">Connected account</div>
    <div className="flex items-center justify-center mb-4">
      <div className="mr-2 text-gray-400">#</div>
      <div className="text-green-500 font-bold">{account}</div>
    </div>
    <div className="text-lg font-bold mb-2">On chain ID</div>
    <div className="flex items-center justify-center mb-4">
      <div className="mr-2 text-gray-400">#</div>
      <div className="text-blue-500 font-bold">{chainId}</div>
    </div>
    <div className="text-lg font-bold mb-2">Your current balance is</div>
    <div className="text-2xl font-bold">${balance}</div>
  </div>
}

const ConnectWallet = () => {
  const { status, connect, account, chainId } = useMetaMask();
  const balance = useGetEthereumBalance()

  const statusMessage = getStatus({ status, account, chainId, balance, connect })

  return(
    <div className="w-full flex items-center justify-center pt-[60px] flex-col">
      {statusMessage}
    </div>
  )
}

export default ConnectWallet