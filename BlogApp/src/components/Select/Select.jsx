import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className={`${className}`}></label>}
        <select {...props}>

        </select>
    </div>
  )
}

export default Select