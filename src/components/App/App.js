import { Component } from 'react';
import { Searchbar, ImageGallery, Loader, Button, Modal } from 'components';
import css from './App.module.css';
import { getImages, perPage } from 'components/service/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    isVisible: false,
    images: [],
    // isEmpty: false,
    error: false,
  };

  componentDidMount() {
    // getImages('cat', 1);
    // this.setState(prevState => ({
    //   images: [...prevState.images, ...getImages('cat')],
    // }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      getImages(query, page);
    }
  }

  getPhotos = async (query, page) => {
    // if (!query.trim()) {
    //   return;
    // }
    this.setState({ isLoading: true });
    // error: false, image: []

    try {
      const {
        hits: photos,
        total,
        page: currentPage,
        per_page,
      } = await getImages(query, page);
      console.log('total', total);

      // if (photos.length === 0) {
      //   this.setState({ isEmpty: true });
      // }

      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        isVisible: currentPage < Math.ceil(total / per_page), // totalHits учесть не более 500
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  querySubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.value,
      images: [],
      page: 1,
      // isEmpty: false,
      error: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isVisible, isLoading, isEmpty, images, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.querySubmit} />
        {error && <p>❌ Something went wrong - {error}</p>}
        {/* {isEmpty && <p>Sorry. There are no images ... 😭</p>} */}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery />}
        {isVisible && (
          <Button onClick={this.loadMore} disabled={isLoading}>
            Load more
          </Button>
        )}
        {/* <Modal>Open</Modal> */}
        {/* <MyModal
          modalIsOpen={showModal}
          closeModal={this.closeModal}
          src={img}
        /> */}
      </div>
    );
  }
}

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
