import React from 'react'
import Radio, { RadioGroupProps as RadioGroupPropsAnt, RadioChangeEvent } from 'antd/es/radio'
import { CheckboxOptionType } from 'antd/es/checkbox'
import { useStatelyField } from '@1productaweek/react-stately'

interface RadioGroupProps extends RadioGroupPropsAnt {
  field: string|string[]
  initialValue?: string
  onChange?: (e: RadioChangeEvent) => void
  button?: boolean
  options: Array<CheckboxOptionType | string>
  children?: React.ReactNode
}

export default function RadioGroup ({ field, onChange, initialValue, ...props }: RadioGroupProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })

  return (
    <Radio.Group
      buttonStyle='solid'
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    />
  )
}
