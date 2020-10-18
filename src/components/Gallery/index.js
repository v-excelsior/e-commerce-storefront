import React, { useState, useEffect } from 'react'
import './style.scss'

import Card from '../Card'

import { db } from '../../services'

const Gallery = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => await db.getCards()

    fetchCards().then(setCards)
  }, [])

  return (
    <div className="cards-list">
      {
        cards.map( (card, i) => ( <Card { ...card } key={ i }/> ))
      }
    </div>
  )
}

export default Gallery
