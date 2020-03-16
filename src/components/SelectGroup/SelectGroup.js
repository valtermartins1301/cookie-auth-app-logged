import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {Label} from '../Label'
import {Select} from '../Select'

const selectGroupBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const selectGroupRaw = ({className, label, name, options}) => {
  return (
    <p className={className}>
      <Label htmlFor={name} label={label}/>
      <Select id={name} name={name}>
        {options.map(({value, text}, index) => {
          return (
            <option key={index} value={value}>
              {text}
            </option>
          )
        })}
      </Select>
    </p>
  )
}

const SelectGroup = styled(selectGroupRaw)`
  ${selectGroupBase}
`

export { SelectGroup }