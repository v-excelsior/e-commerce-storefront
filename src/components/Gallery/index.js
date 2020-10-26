import React, { useState, useEffect } from 'react'
import './style.scss'

import Card from 'components/Card'

import { db } from 'services'

const Gallery = () => {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState([])
  // const [filteredCards, setFilteredCards] = useState([])
  // const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchCards = async () => await db.getCards()

    fetchCards().then(res => {
      setCards(res.cards)
      setCategories(res.categories)
    })

    console.log('categories', categories)
  }, [])

  // useEffect(() => {
  //
  // }, [filter])

  return (
    <div className="cards-list">

      {
        cards.map((card, i) => (<Card { ...card } key={ i } />))
      }
    </div>
  )
}

export default Gallery
