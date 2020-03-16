import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const labelBase = css`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a4a4a;
  margin-bottom: .5rem;
  font-family: 'Work Sans',sans-serif;
  letter-spacing: -.25px;
`;

const labelRaw = ({className, label='', htmlFor}) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      <span>{label.toUpperCase()}</span>
    </label>
  )
}

const Label = styled(labelRaw)`
  ${labelBase}
`

export { Label }

