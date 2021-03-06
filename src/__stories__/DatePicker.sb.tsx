import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import DatePicker from '../DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
}

export const Default = () => (
  <StatelyWrapper>
    <DatePicker field='date' />
  </StatelyWrapper>
)
