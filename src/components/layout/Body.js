import React from 'react'
import Section from './Section.js'
import "../../styles/body.scss"





const Body = () => {
  return (
    <div className="body">
      <div className={`section section--light`}>
        <div className="left">
          <img src="../../services/film-strip.svg" alt="" className="image"/>
          
        </div>
        <div className="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste quod, beatae optio harum praesentium delectus a repellendus similique molestias eveniet, fugiat quam consequatur eaque dolore alias impedit reprehenderit quibusdam?
        </div>
      </div>
      <div className={`section section--white`}>
        <div className="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eveniet quaerat in explicabo consectetur corrupti et amet excepturi tenetur! Dolor deserunt ex voluptatum? Voluptatibus sapiente eos incidunt quod facilis error!
        </div>
        <div className="right">
          <img src="../../services/photo-camera.svg" alt=""className="image"/>
          
        </div>
      </div>
      <div className={`section section--light`}>
        <div className="left">
        <img src="../../services/headphones.svg" alt=""className="image"/>
          
        </div>
        <div className="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro quas aliquid at provident earum enim nemo sit, obcaecati aperiam tenetur possimus blanditiis, aliquam nesciunt veniam doloremque odit eum sunt.
        </div>
      </div>
      <div className={`section section--white`}>
        <div className="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, esse perferendis laboriosam modi laborum necessitatibus rerum quidem facilis nostrum quasi temporibus nemo dolor tempora assumenda explicabo sint commodi natus recusandae.
        </div>
        <div className="right">
        <img src="../../services/desktop.svg" alt=""className="image"/>
          
        </div>
      </div>
    </div>
  )
}

export default Body
