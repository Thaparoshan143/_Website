import React from 'react'

type PropType = {
  selected: boolean
  title: string,
  index: number,
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, title, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide inline-block p-2 rounded-xl transition-all duration-200 '.concat(
        selected ? ' scale-100 bg-theme-b text-theme-w' : ' scale-75 bg-theme-w text-theme-b'
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number w-full uppercase rounded-xl bg-transparent cursor-pointer border-0 p-0 font-semibold flex justify-center items-center"
      >
        {title}
      </button>
    </div>
  )
}
