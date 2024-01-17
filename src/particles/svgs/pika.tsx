import { css } from 'styled-system/css'

export default function Pika() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path
        className={css({ strokeWidth: '0px' })}
        d='M11.295,11.631C7.767,15.334,0,16,0,16c0,0,8.317.476,11.799,4.303,3.169,3.483,4.201,11.697,4.201,11.697,0,0,.936-8.255,4.471-11.647,3.361-3.225,11.529-4.353,11.529-4.353,0,0-8.345-1.216-11.731-4.319-3.736-3.424-4.269-11.681-4.269-11.681,0,0-1.336,8.093-4.705,11.631Z'
      />
    </svg>
  )
}
