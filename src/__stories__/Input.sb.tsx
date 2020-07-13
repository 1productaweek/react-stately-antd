import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Input from '../Input'

export default {
  title: 'Input',
  component: Input,
}

export const Default = () => (
  <StatelyWrapper>
    <Input field='input' />
  </StatelyWrapper>
)
