import React, { useState, useEffect } from 'react'
import './style.scss'

import { db } from 'services'
import { sortObjByProp } from 'helpers'
import d from 'i18n'

import { Select } from 'components/UI'
import { Card, Sort } from 'components'

const sortByName = sortObjByProp('name')
const sortByPrice = sortObjByProp('price')

const Gallery = () => {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    const fetchCards = async () => await db.getCards()

    fetchCards().then(res => {
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
    if (sort.startsWith('name')) {
      sort.endsWith('asc')
        ? setFilteredCards([...cards].sort(sortByName))
        : setFilteredCards([...cards].sort(sortByName).reverse())
    }

    if (sort.startsWith('price')) {
      sort.endsWith('asc')
        ? setFilteredCards([...cards].sort(sortByPrice))
        : setFilteredCards([...cards].sort(sortByPrice).reverse())
    }
  }, [sort, cards])

  return (
    <div className='gallery'>
      <div className='controls'>
        <Select
          options={ categories.map(v => ({ value: v, label: v })) }
          onChange={ e => setFilter(e.target.value) }
          withAll
        />

        <Sort
          label={ d.name }
          onDesc={ () => setSort('name_asc') }
          onAsc={ () => setSort('name_desc') }
        />

        <Sort
          label={ d.price }
          onDesc={ () => setSort('price_asc') }
          onAsc={ () => setSort('price_desc') }
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
