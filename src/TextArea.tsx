import React from 'react'
import AntInput, { TextAreaProps } from 'antd/es/input'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelyTextAreaProps extends TextAreaProps {
  field: string|string[]
  initialValue?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function StatelyTextArea ({ field, onChange, initialValue, ...props }: StatelyTextAreaProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntInput.TextArea
      {...props}
      value={!value ? '' : value}
      onChange={(e) => {
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    />
  )
}

export default StatelyTextArea
