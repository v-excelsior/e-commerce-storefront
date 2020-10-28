import React, { useState, useEffect } from 'react'
import './style.scss'

import { db } from 'services'

import { Select } from 'components/UI'
import { Card, Sort } from 'components'

const Gallery = () => {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    const fetchCards = async () => await db.getCards()

    fetchCards().then(res => {
      console.log(res.cards)
      setCards(res.cards)
      setCategories(res.categories)
    })
  }, [])

  useEffect(() => {
    filter === 'all'
      ? setFilteredCards(cards)
      : setFilteredCards(cards.filter(card => card.category === filter))
  }, [cards, filter])

  useEffect(() => {
    sort === 'asc'
      ? setFilteredCards(cards.sort())
      : setFilteredCards(cards.sort().reverse)
  }, [sort])

  return (
    <div className='gallery'>

      <div>
        <Select
          options={ categories.map(v => ({ value: v, label: v })) }
          onChange={ e => setFilter(e.target.value) }
          withAll
        />

        <Sort
          label='x'
          onDesc={ () => setSort('asc') }
          onAsc={ () => setSort('desc') }
        />
      </div>


      <div className='cards-list'>
        { filteredCards.map((card, i) => (
          <Card { ...card } key={ i } />)
        ) }
      </div>
    </div>
  )
}

export default Gallery
