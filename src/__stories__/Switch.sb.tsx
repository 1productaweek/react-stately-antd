import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Switch from '../Switch'

export default {
  title: 'Switch',
  component: Switch,
}

export const Default = () => (
  <StatelyWrapper>
    <Switch field='search' />
  </StatelyWrapper>
)
