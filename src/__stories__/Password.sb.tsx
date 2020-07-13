import React from 'react'
import StatelyWrapper from './StatelyWrapper'
import Password from '../Password'

export default {
  title: 'Password',
  component: Password,
}

export const Default = () => (
  <div style={{ padding: '1em' }}>
    <StatelyWrapper>
      <Password field='date' />
    </StatelyWrapper>
  </div>
)
