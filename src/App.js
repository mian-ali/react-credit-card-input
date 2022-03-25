import React, { Component } from 'react'
import CreditCardInput from 'react-credit-card-input';
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='App'>

<h1>React Credit Card Input</h1>
        <div className="CreditCardInput">
<CreditCardInput 
  customTextLabels={{
    invalidCardNumber: 'invalidCardNumber',
    expiryError: {
      invalidExpiryDate: 'invalidExpiryDate',
      monthOutOfRange: 'monthOutOfRange',
      yearOutOfRange: 'yearOutOfRange',
      dateOutOfRange: 'dateOutOfRange'
    },
    invalidCvc: 'invalidCvc',
    invalidZipCode: 'invalidZipCode',
    cardNumberPlaceholder: 'Enter Card Number',
    expiryPlaceholder: 'MM/YY',
    cvcPlaceholder: 'CVC',
    zipPlaceholder: 'C.P.'
  }}
/>
  </div>    </div>
    )
  }
}
