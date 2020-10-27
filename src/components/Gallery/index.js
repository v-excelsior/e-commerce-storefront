import React, { useState, useEffect } from 'react'
import './style.scss'

import { db } from 'services'

import Select from 'components/UI/Select'

const Gallery = () => {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchCards = async () => await db.getCards()

    fetchCards().then(res => {
      setCards(res.cards)
      setCategories(res.categories)
    })
  }, [])

  useEffect(() => {
    if (filter === 'all') {
      setFilteredCards(cards)
    } else {
      setFilteredCards(cards.filter(card => {
        return card.category === filter
      }))
    }
  }, [cards, filter])

  return (
    //TODO: eslint jsx only ordinary '
    <div className='gallery'>

      <Select
        options={ categories.map(v => ({ value: v, label: v })) }
        onChange={ e => setFilter(e.target.value) }
        withAll
      />

      {/*<div className='cards-list'>*/ }
      {/*  { filteredCards.map((card, i) => (*/ }
      {/*    <Card { ...card } key={ i } />)*/ }
      {/*  ) }*/ }
      {/*</div>*/ }
    </div>

  )
}

export default Gallery
