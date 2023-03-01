import MetaMaskLogoImage from "./metamask-logo.png"

const MetaMaskLogo = () => {
  return(
    <>
      <img src={MetaMaskLogoImage} className="w-[200px] h-[150px] self-center mt-[100px]"/>
      <div className="logo-font mt-[16px]">METAMASK</div>
    </>
  )
}

export default MetaMaskLogo