import React from 'react'

const Socials = ({position}) => {
  const data = [
    {
      "url": "https://www.facebook.com/hazelnuzz.de",
      "icon": "/socials/facebook.svg"
    },
    {
      "url": "https://www.instagram.com/hazelnuzz_/",
      "icon": "/socials/instagram.svg"
    },
    {
      "url": "https://soundcloud.com/hazelnuzz-official",
      "icon": "/socials/soundcloud.svg"
    },
    {
      "url": "https://www.youtube.com/channel/UC_dmK20XGPHYqMdlMm8zqXw?view_as=subscriber",
      "icon": "/socials/youtube.svg"
    },
    {
      "url": "https://www.beatstars.com/hazelnuzz/feed",
      "icon": "/socials/beatstars.svg"
    }
    
  ]
  // 
  const socialItems = data.map(item => (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="social">
      <img src={item.icon} alt="" className="social--icon"/>
    </a>
  ))
    
  return (
    <div className={`socials ${position ? 'aside' : ''}`}>
      {socialItems}
    </div>
  )
}

export default Socials
