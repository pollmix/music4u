import React, {Component} from 'react'
import './App.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      query: ''
    }
  }

  search(){
    console.log('this.state ' + this.state.query);
    
  }

  render(){
    return (
      <div className='App'>
        <div className='App-title'>
          Music for You
        </div>
        
        <FormGroup>
          <InputGroup>
            <FormControl 
              type='text'
              placeholder='Search for an Artist'
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {if (event.key === 'Enter') this.search()}}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        
        <div className='profile'>
          <div>Artist Image</div>
          <div>Artist Name</div>
        </div>
        <div className='Gallery'>
          Gallery
        </div>
      </div>
    )
  }
}

export default App