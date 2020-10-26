import React, { useState, useEffect } from 'react'
import './style.scss'

import Card from 'components/Card'

import { db } from 'services'

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
        console.log()
        return card.category === filter
      }))
    }
  }, [cards, filter])

  return (
    //TODO: eslint jsx only ordinary '
    <div className="cards-list">
      <select onChange={ e => setFilter(e.target.value) }>
        <option value='all'>ALL</option>
        {
          categories.map((category, i) => (
            <option value={ category } key={ i }>
              { category.toUpperCase() }
            </option>
          ))
        }
      </select>
      {
        filteredCards.map((card, i) => (<Card { ...card } key={ i } />))
      }
    </div>
  )
}

export default Gallery
