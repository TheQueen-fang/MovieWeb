import React from 'react'

const Movie = (props) => {
    console.log("props",props);
  return (
    <div className='movie'>
          <img className='img' src={props.img} alt="" />
      <p>{ props.title}</p>
      <p>{ props.year}</p>
    </div>
  )
}

export default Movie
