import React from 'react'
import Slider, { SliderRangeProps, SliderSingleProps } from 'antd/es/slider'
import { useStatelyField } from '@1productaweek/react-stately'

export type StatelySliderProps = (SliderRangeProps & { initialValue?: [number, number], field: string|string[] }) |
  (SliderSingleProps & { initialValue?: number, field: string|string[] })

function StatelySlider ({ field, onChange, initialValue, ...props }: StatelySliderProps) {
  const [value, setValue] = useStatelyField(field, { initialValue })
  return (
    <Slider
      {...props}
      value={value}
      onChange={(value: number | [number, number]) => {
        setValue(value)
        if (onChange) onChange(value as any)
      }}
    />
  )
}

export default StatelySlider
