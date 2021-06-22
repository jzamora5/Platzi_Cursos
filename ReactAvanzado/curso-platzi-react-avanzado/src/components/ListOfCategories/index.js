import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

const API_URL_CATEGORIES = 'https://petgram-server-jhoan-8e4aw2sxk-jzamora5.vercel.app/categories'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch(API_URL_CATEGORIES).then(res => res.json()).then(response => {
      setCategories(response)
    })
  }, [])

  return (
    <List>
      {
            categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
