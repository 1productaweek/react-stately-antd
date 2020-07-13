import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import InputNumber from '../InputNumber'

export default {
  title: 'InputNumber',
  component: InputNumber,
}

export const Default = () => (
  <StatelyWrapper>
    <InputNumber field='number' />
  </StatelyWrapper>
)
