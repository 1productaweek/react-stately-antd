import React from 'react'
import AntInput, { PasswordProps } from 'antd/es/input'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelyPasswordProps extends PasswordProps {
  field: string
  initialValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function StatelyInput ({ field, onChange, initialValue, ...props }: StatelyPasswordProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntInput.Password
      {...props}
      value={!value ? '' : value}
      onChange={(e) => {
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    />
  )
}

export default StatelyInput
