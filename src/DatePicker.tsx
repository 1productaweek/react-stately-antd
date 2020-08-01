import React from 'react'
import AntDatePicker from 'antd/es/date-picker'
import { PickerDateProps } from 'antd/es/date-picker/generatePicker'
import moment from 'moment'
import { useStatelyField } from '@1productaweek/react-stately'

export interface StatelyDatePickerProps extends PickerDateProps<any> {
  field: string|string[]
  initialValue?: number
  onChange?: (value: moment.Moment | null) => void
}

function StatelyDatePicker ({ field, onChange, initialValue, ...props }: StatelyDatePickerProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <AntDatePicker
      {...props}
      value={moment(value)}
      onChange={(value) => {
        setValue(value?.toDate())
        if (onChange) onChange(value)
      }}
    />
  )
}

export default StatelyDatePicker
