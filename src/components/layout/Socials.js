import React from 'react'

import facebook from '../../assets/socials/facebook.svg'; 
import instagram from '../../assets/socials/instagram.svg'; 
import soundcloud from '../../assets/socials/soundcloud.svg'; 
import youtube from '../../assets/socials/youtube.svg'; 
import beatstars from '../../assets/socials/beatstars.svg'; 

const Socials = ({position}) => {
  const data = [
    {
      "url": "https://www.facebook.com/hazelnuzz.de",
      "icon": facebook
    },
    {
      "url": "https://www.instagram.com/hazelnuzz_/",
      "icon": instagram
    },
    {
      "url": "https://soundcloud.com/hazelnuzz-official",
      "icon": soundcloud
    },
    {
      "url": "https://www.youtube.com/channel/UC_dmK20XGPHYqMdlMm8zqXw?view_as=subscriber",
      "icon": youtube
    },
    {
      "url": "https://www.beatstars.com/hazelnuzz/feed",
      "icon": beatstars
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
