import React from 'react'
import Radio, { RadioGroupProps as RadioGroupPropsAnt, RadioChangeEvent } from 'antd/es/radio'
import { CheckboxOptionType } from 'antd/es/checkbox'
import { useStatelyField } from '@1productaweek/react-stately'
import map from 'lodash/map'
import isString from 'lodash/isString'
// import isNumber from 'lodash/isNumber'

interface ButtonGroupProps extends RadioGroupPropsAnt {
  field: string|string[]
  initialValue?: string
  onChange?: (e: RadioChangeEvent) => void
  button?: boolean
  options: Array<CheckboxOptionType | string>
  children?: React.ReactNode
}

export default function ButtonGroup ({ field, children, options, button, onChange, initialValue, ...props }: ButtonGroupProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })

  const optionBtns = button ? map(options, (option) => {
    const { value, label }: any = isString(option)
      ? { value: option, label: `${option}` }
      : option
    return (
      <Radio.Button value={value} key={value}>
        {label}
      </Radio.Button>
    )
  }) : undefined

  return (
    <Radio.Group
      buttonStyle='solid'
      {...props}
      value={value}
      options={button ? undefined : options}
      onChange={(e) => {
        console.log(e)
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    >
      {children || (button ? optionBtns : null)}
    </Radio.Group>
  )
}
