import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import TextArea from '../TextArea'

export default {
  title: 'TextArea',
  component: TextArea,
}

export const Default = () => (
  <StatelyWrapper>
    <TextArea field='input' />
  </StatelyWrapper>
)
