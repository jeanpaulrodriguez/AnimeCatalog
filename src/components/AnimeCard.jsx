/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function AnimeCard({anime}) {
  return (
    <article className='anime-card'>
        <a 
        href={anime.url}
        target="_blank"
        rel="noreferrer">
            <figure>
                <img
                src={anime.images.jpg.image_url}
                alt='Anime Image'/>
                
            </figure>
            <h3>{anime.title}</h3>
        </a>
    </article>
  )
}

export default AnimeCard