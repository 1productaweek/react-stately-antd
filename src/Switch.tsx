import React from 'react'
import AntSwitch, { SwitchProps } from 'antd/es/switch'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelySwitchProps extends SwitchProps {
  field: string|string[]
  initialValue?: number
}

function StatelyInputNumber ({ field, onChange, initialValue, ...props }: StatelySwitchProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntSwitch
      {...props}
      checked={value}
      onChange={(checked, e) => {
        setValue(checked)
        if (onChange) onChange(checked, e)
      }}
    />
  )
}

export default StatelyInputNumber
