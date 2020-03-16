import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import { navigate } from "@reach/router"

import { Form } from "../components/Form"
import { Heading } from "../components/Heading"
import {Subheading} from "../components/Subheading"
import {Input} from '../components/Input';
import logo from '../images/logo.svg';

const publicBase = css`
  text-align: center;

  img {
    height: 5em;
  }s
`

function PublicRaw(props) {

  const handleSubmit = () => {
    return navigate('https://cookie-auth-app-login.netlify.com');      
  }

  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
      <Heading>Você não está logado... =/</Heading>
      <Subheading>Clique abaixo para se autenticar</Subheading>
      <Form onSubmit={handleSubmit}>
        <Input type="submit" value="Autenticar"/>
      </Form>
    </div>
  )
}

const Public = styled(PublicRaw)`
  ${publicBase}
`

export { Public };