import React, { Component } from 'react';
import { Paper , TextField } from '@mui/material';

export default class SearchBar extends Component {

state = {
    searchTerm : '',
}

    handleChange = (event)=> {
        this.setState({ searchTerm:event.target.value });
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);

        event.preventDefault();
    }

  render() {
    return (
     <Paper elevation={8} style={{ padding:'25px' }}>
        <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label='Search...' onChange={this.handleChange}></TextField>
        </form>
        
     </Paper>
    )
  }
}
