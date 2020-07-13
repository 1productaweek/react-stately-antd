import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Password from '../Password'

export default {
  title: 'Password',
  component: Password,
}

export const Default = () => (
  <StatelyWrapper>
    <Password field='password' />
  </StatelyWrapper>
)
