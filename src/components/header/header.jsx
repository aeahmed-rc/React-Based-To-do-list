import React from 'react'

export class BigHeader extends React.Component {
  render(){
    return  <h1>{this.props.headerText}</h1>;
  }
}

export class MediumHeader extends React.Component {
  render(){
    return  <h2>{this.props.headerText}</h2>;
  }
}

export class SmallHeader extends React.Component {
  render(){
    return  <h3>{this.props.headerText}</h3>;
  }
}

export default {
  BigHeader,
  MediumHeader,
  SmallHeader
}
