import React from 'react'
import AntInputNumber, { InputNumberProps } from 'antd/es/input-number'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelyInputNumberProps extends InputNumberProps {
  field: string
  initialValue?: number
}

function StatelyInputNumber ({ field, onChange, initialValue, ...props }: StatelyInputNumberProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntInputNumber
      {...props}
      value={value}
      onChange={(value) => {
        setValue(value)
        if (onChange) onChange(value)
      }}
    />
  )
}

export default StatelyInputNumber
