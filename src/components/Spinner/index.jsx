import { TailSpin } from  'react-loader-spinner'

export const Spinner = () => { 
  return (
    <div className="mt-[32px]">
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
  )
}