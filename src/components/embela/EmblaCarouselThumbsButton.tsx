import React from 'react'

type PropType = {
  selected: boolean
  title: string,
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, title, onClick } = props

  return (
    <div
      className={'rounded-xl transition-all mx-2 p-1 px-2 duration-300 min-w-[10rem]  '.concat(
        selected ? ' bg-theme-b text-theme-w translate-y-[-10px] ' : '  hover:bg-theme-w-alt bg-theme-w text-theme-b'
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number w-full text-center uppercase rounded-xl cursor-pointer font-bold"
      >
        {title}
      </button>
    </div>
  )
}
