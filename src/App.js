import React from 'react';
import {Global, css} from '@emotion/core'
import { Router, navigate, Redirect } from "@reach/router";
import axios from 'axios';

import { Protected } from './pages/Protected'
import { Public } from './pages/Public'
import lucidaGrande from './fonts/lucida-grande.woff';

const globalStyles = css`
  @font-face {
    font-family: 'Lucida Grande';
    src: url('${lucidaGrande}') format("woff");
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: 'Lucida Grande';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-image: linear-gradient(
      to bottom, 
      #fff 0%, 
      #fff 50%, 
      #37b 50%, 
      #37b 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
  }
`


class PrivateRoute extends React.Component {
  state = {
    isAuthenticated: false
  }

  async componentDidMount() {
    try {
      await axios.get('https://glacial-shelf-31721.herokuapp.com/auth/')

      this.setState({ isAuthenticated: true })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { component: Component } = this.props

    if(!this.state.isAuthenticated) {
      navigate('/public')
      
      return <Redirect to='/public' noThrow/>
    } 

    return  <Component {...this.props} />
  } 
}

// App LeadForm
const App = ({className}) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Router>
        <Public path="/public" />
        <PrivateRoute path="/" component={Protected} default/>
      </Router>
    </div>
  )
}

export default App;

