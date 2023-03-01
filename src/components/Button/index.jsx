export const Button = ({ title, className, type = 'primary', onClick }) => {

  const typeStyles = {
    primary: 'bg-blue-700',
    danger: 'bg-red-700',
    success: 'bg-green-600'
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm capitalize block rounded-[4px] px-[16px] mb-[6px] py-[4px] text-white ${typeStyles[type]} ${className}`}
    >
      {title}
    </button>
  )
}