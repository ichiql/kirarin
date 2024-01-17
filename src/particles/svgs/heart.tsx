import { css } from 'styled-system/css'

export default function Heart() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path
        className={css({ strokeWidth: '0px' })}
        d='M31.308,15.628c1.915-4.624-.28-9.925-4.904-11.84-3.743-1.55-7.928-.406-10.403,2.538-2.475-2.944-6.661-4.088-10.404-2.538C.973,5.703-1.223,11.004.692,15.628s15.308,13.276,15.308,13.276c0,0,13.393-8.653,15.308-13.276Z'
      />
    </svg>
  )
}
