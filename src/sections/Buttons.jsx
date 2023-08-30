import React from 'react'

export const Buttons = ({label, iconURL, backgroundColor, textColor , borderColor, fullWidth}) => {
return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none
    ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` :' bg-coral-red  text-white border-coral-red'}' ${fullWidth && 'w-full' } `
    }>
    {label}
    {iconURL && <img 
    src={iconURL}
    alt='arrow right icon'
    />}
    </button>
    )
}
