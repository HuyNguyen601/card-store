import React from 'react'
import {getUser, logout} from '../services/auth'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
class Add extends React.Component {
  state = {
    name: ''
  }

  handleChange = type => e => this.setState({[type]: e.target.value})

  render() {
    return (<div>
      <h1>
        Welcome {getUser().name}!
      </h1>
      <form>
        <Input type='file'/>
        <TextField id="standard-name" label="Title" value={this.state.name} onChange={this.handleChange('name')} margin="normal"/>
        <TextField label="Price" id="simple-price" InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}/>
      </form>
    </div>)
  }
}

export default Add
