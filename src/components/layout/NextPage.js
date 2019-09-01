import React from 'react'

const NextPage = ({open,setOpen}) => {
  const onClick = () => {
    let newOpen = !open
    setOpen(newOpen)
  }
  return (
    <div className={`next-page ${open ? 'open' : ''}`} onClick={onClick}>
      <span>
        
      </span>
    </div>
  )
}

export default NextPage
