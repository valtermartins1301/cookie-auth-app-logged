import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import { Input } from '../Input'
import { Label } from '../Label'

const inputBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const inputRaw = ({className, label, type='', name, placeholder}) => {
  return (
     <p className={className}>
      <Label htmlFor={name} label={label}/>
      <Input 
        id={name} 
        name={name} 
        type={type}
        itemRef={name}
        placeholder={placeholder}
      />
    </p>
  )
}

const InputGroup = styled(inputRaw)`
  ${inputBase}
`

export { InputGroup }