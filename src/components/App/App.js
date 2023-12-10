import { Component } from 'react';
import { Searchbar, ImageGallery, Loader, Button, Modal } from 'components';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    images: [],
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        {/* <Loader /> */}
        <ImageGallery />
        <Button>Load more</Button>
        {/* <Modal>Open</Modal> */}
      </div>
    );
  }
}
