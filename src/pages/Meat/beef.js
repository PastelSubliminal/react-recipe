import React from 'react'
import CardList from '../../components/CardList'

export default class Beef extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='牛肉' />
      </div>
    )
  }
}