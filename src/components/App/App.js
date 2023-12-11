import { Component } from 'react';
import { Searchbar, ImageGallery, Button, Loader } from 'components';
// import css from './App.module.css';
import { getImages } from 'components/service/api';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: false,
  };

  // async componentDidMount() {
  //     const { query, page } = this.state;
  //     if (prevState.query !== query || prevState.page !== page) {
  //       getImages(query, page);
  //     }
  //   }
  //   try {
  //     this.setState({ isLoading: true, error: false, images: [] });
  //     const fetchImages = await getImages('cat', 1);
  //     this.setState({ images: fetchImages.hits });
  //   } catch (error) {
  //     this.setState({ error: true });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    if (!query) {
      return;
    }
    this.setState({ isLoading: true, error: false, images: [] });

    try {
      const {
        hits,
        total,
        page: currentPage,
        per_page,
      } = await getImages(query, page);
      console.log('total', total);

      this.setState({ images: hits });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // try {

  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...hits],
  //       isVisible: currentPage < Math.ceil(total / per_page),
  //     }));
  // };

  onSubmitQuery = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
    getImages(query, 1);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmitQuery={this.onSubmitQuery} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        <Button onClick={this.loadMore}>Load more</Button>
      </AppStyled>
    );
  }
}
