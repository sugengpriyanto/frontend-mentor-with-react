import React, { Component } from 'react'
import Cards from './components/Cards'
import { data } from './shared/data'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div>
        <Cards data={this.state.data} />
      </div>
    )
  }
}

export default App

