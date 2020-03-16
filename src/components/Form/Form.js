import React, { Component } from "react";
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const mapFormValues = (elements) => {
  let response = {}

  for (let index = 0; index < elements.length; index++) {
    const {name, value} = elements[index]

    if(name) response[name] = value
  }

  return response
}

class FormRaw extends Component {
  state = {
    beforeSubmit: this.props.beforeSubmit || (() => Promise.resolve()),
    onSubmit: this.props.onSubmit || (() => Promise.resolve()),
    afterSubmit: this.props.afterSubmit || (() => Promise.resolve())
  }

  handleSubmit = async (event) => {
    event.persist();
    event.preventDefault();
    const { beforeSubmit, afterSubmit, onSubmit } = this.state;

    const mappedValues = mapFormValues(event.target.elements);
    await beforeSubmit(event, mappedValues);

    await onSubmit(mappedValues);

    await afterSubmit();
  }

  render() {
    return (
      <form 
        data-netlify="true" 
        className={this.props.className} 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
}

const baseForm = css`
  align-self: center;
  border-radius: 5px;
  box-shadow: 0 10px 25px 0 rgba(136,136,153,.25);
  border: 1px solid rgba(136,136,153,.2);
  padding: 1.75em;
  margin: 1.2em;
  background: #fff;
  section {
    text-align: left;
  }
`;

const Form = styled(FormRaw)`
  ${baseForm}
`

export { Form }