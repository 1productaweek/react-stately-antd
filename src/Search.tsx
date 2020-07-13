import React from 'react'
import AntInput, { SearchProps } from 'antd/es/input'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelySearchProps extends SearchProps {
  field: string
  initialValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function StatelyInput ({ field, onChange, initialValue, ...props }: StatelySearchProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntInput.Search
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
