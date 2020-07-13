import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Search from '../Search'

export default {
  title: 'Search',
  component: Search,
}

export const Default = () => (
  <StatelyWrapper>
    <Search field='search' />
  </StatelyWrapper>
)
