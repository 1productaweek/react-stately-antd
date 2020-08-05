import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import RadioGroup from '../RadioGroup'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
}

const options = [{
  label: 'Hello',
  value: 'hello',
}, {
  label: 'World',
  value: 'world',
}]

export const Default = () => (
  <StatelyWrapper>
    <RadioGroup field='input' options={options} />
  </StatelyWrapper>
)

export const Button = () => (
  <StatelyWrapper>
    <RadioGroup button size='small' field='input' options={options} />
  </StatelyWrapper>
)
