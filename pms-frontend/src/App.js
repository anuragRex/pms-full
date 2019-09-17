import React, { Component } from 'react';
import Social from './components/Social';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Apollo Client Setup

const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql'
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Welcome to PMS</h1>
          <Social />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
