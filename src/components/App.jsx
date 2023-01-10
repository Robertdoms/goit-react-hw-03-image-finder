import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './App.styled';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
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
