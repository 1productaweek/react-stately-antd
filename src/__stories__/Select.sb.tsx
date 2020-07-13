import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Select from '../Select'

export default {
  title: 'Select',
  component: Select,
}

export const Default = () => (
  <StatelyWrapper>
    <Select
      style={{ width: 200 }}
      field='select'
      options={['James', 'Sam', 'Scott', 'Sandra'].map((value) => ({ label: value, value }))}
    />
  </StatelyWrapper>
)
