import React from 'react'
import AntSelect, { SelectProps, SelectValue } from 'antd/es/select'
import { useStatelyField } from '@1productaweek/react-stately'

const { Option } = AntSelect

export interface StatelySelectProps<VT = SelectValue> extends SelectProps<VT> {
  field: string|string[]
  initialValue?: SelectValue
}

function StatelySelect <VT extends SelectValue> ({ field, onChange, initialValue, ...props }: StatelySelectProps<VT>) {
  const [value, setValue] = useStatelyField<VT>(field, { initialValue })
  return (
    <AntSelect
      {...props}
      value={value}
      onChange={(value, option) => {
        setValue(value)
        if (onChange) onChange(value, option)
      }}
    />
  )
}

StatelySelect.Option = Option

export default StatelySelect
