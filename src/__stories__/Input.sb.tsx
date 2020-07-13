import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Input from '../Input'

export default {
  title: 'Input',
  component: Input,
}

export const Default = () => (
  <div style={{ padding: '1em' }}>
    <StatelyWrapper>
      <Input field='date' />
    </StatelyWrapper>
  </div>
)
