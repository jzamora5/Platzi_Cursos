import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

const API_URL_CATEGORIES = 'https://petgram-server-jhoan-8e4aw2sxk-jzamora5.vercel.app/categories'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch(API_URL_CATEGORIES).then(res => res.json()).then(response => {
      setCategories(response)
    })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
