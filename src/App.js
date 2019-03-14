import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Query
            query={gql`
              query getRates {
                rates(currency: "USD") {
                  currency
                  rate
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return data.rates.map(({ currency, rate }) => (
                <div key={currency}>
                  <p>
                    {currency}: {rate}
                  </p>
                </div>
              ));
            }}
          </Query>
        </header>
      </div>
    );
  }
}

export default App;
