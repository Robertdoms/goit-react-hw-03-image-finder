import React, { Component } from 'react';

import Container from './App.styled';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';

import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    searchQuery: ' ',
    isLoading: false,
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <Gallery searchQuery={this.state.searchQuery} />
      </Container>
    );
  }
}

export default App;
