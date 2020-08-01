import React from 'react'
import AntInput, { InputProps } from 'antd/es/input'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelyInputProps extends InputProps {
  field: string|string[]
  initialValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function StatelyInput ({ field, onChange, initialValue, ...props }: StatelyInputProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntInput
      {...props}
      value={!value ? '' : value}
      onChange={(e) => {
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    />
  )
}

StatelyInput.Group = AntInput.Group

export default StatelyInput
