import { MetaMaskProvider } from "metamask-react";

import './App.css';
import ConnectWallet from './modules/ConnectWallet';
import MetaMaskLogo from "./assets/MetaMaskLogo"
import { DarkModeButton } from "./components";

function App() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <MetaMaskProvider>
      <div className="App relative dark:bg-slate-800 w-full dark:text-white bg-white h-screen flex flex-col">
        <MetaMaskLogo />
        {
          window.ethereum ? 
          <ConnectWallet /> :
          "Download Metamask extension"
        }
      </div>
      <DarkModeButton />
    </MetaMaskProvider>
  );
}

export default App;
