import styled from '@emotion/styled'
import {css} from '@emotion/core'

const selectBase = css`
  padding: .75rem;
  border: .0625em solid #ddd;
  border-radius: .125em;
  background-color: white;
  font-size: 1em;

  option {

  }
`
const Select = styled.select`
  ${selectBase}
`

export { Select }