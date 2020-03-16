import styled from '@emotion/styled'
import {css} from '@emotion/core'

const inputBase = css`
  padding: 0.75rem;
  border: 0.0625em solid #ddd;
  border-radius: .125em;
  font-size: 1em;
`;

const inputSubmit = ({type}) =>
type === 'submit' &&
css`
  color: #fff;
  background-color: #285;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;


const Input = styled.input`
  ${inputBase}
  ${inputSubmit}
`

export { Input }