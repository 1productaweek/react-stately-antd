import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import DatePicker from '../DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
}

export const Default = () => (
  <div style={{ padding: '1em' }}>
    <StatelyWrapper>
      <DatePicker field='date' />
    </StatelyWrapper>
  </div>
)
