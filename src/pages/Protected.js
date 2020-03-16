import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import axios from 'axios'

import { Form } from "../components/Form"
import { Heading } from "../components/Heading"
import {Subheading} from "../components/Subheading"
import logo from '../images/logo.svg';

const protectedBase = css`
  text-align: center;

  img {
    height: 5em;
  }s
`

function ProtectedRaw(props) {
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    async function todayLucky() {
      axios.get('https://glacial-shelf-31721.herokuapp.com/')
      .then(response => setMessage(response.data.message))
    }

    todayLucky()
  }, [])

  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
      <Form>
        <Heading>Sorte de hoje:</Heading>
        <Subheading>{message}</Subheading>
      </Form>
    </div>
  )
}

const Protected = styled(ProtectedRaw)`
  ${protectedBase}
`

export { Protected };