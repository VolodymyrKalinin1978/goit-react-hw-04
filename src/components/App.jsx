import { useState, useEffect } from 'react';

import { fetchImages } from '../Api/fetchImages';

import 'modern-normalize';

import { SkeletonTheme } from 'react-loading-skeleton';

import toast, { Toaster } from 'react-hot-toast';

import { ErrorMesage } from './ErrorMesage/ErrorMesage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageModal } from './ImageModal/ImageModal';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { SearchBar } from './SearchBar/SearchBar';
import { Container } from './App.styled';
import { SkeletonImg } from './SkeletonImg/SkeletonImg';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageCounter, setPageCounter] = useState(40);
  const [totalPages, setTotalPages] = useState(0);
  const [queryImages, setQueryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    const selected = queryImages.find(item => item.id === id);
    setSelectedImage(selected);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const bigImages = () => {
    if (selectedImage) {
      return selectedImage.urls.regular;
    }
    return null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    if (newQuery.trim() === '') {
      toast.error('Enter a value for search. Please');
      return;
    }

    setSearchQuery(`${Date.now()}/${newQuery}`);
    setPageCounter(40);
    setPage(1);
    setQueryImages([]);

    e.target.reset();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setPageCounter(pageCounter + 40);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);

        const fetchedData = await fetchImages(searchQuery.split('/')[1], page);

        setQueryImages(prevQueryImages => [...prevQueryImages, ...fetchedData.results]);
        setTotalPages(fetchedData.total);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery, page]);

  return (
    <Container>
      <SkeletonTheme baseColor="#c1bbbb" highlightColor="#615c5c">
        <header>
          <SearchBar onSearch={handleSubmit} />
        </header>

        {queryImages.length > 0 && <ImageGallery items={queryImages} openModal={openModal} />}

        {error && <ErrorMesage />}
        {isLoading && <SkeletonImg cards={40} />}
        {queryImages.length > 0 && pageCounter <= totalPages && totalPages >= 40 && (
          <LoadMoreBtn onLoadMore={handleLoadMore} />
        )}

        <ImageModal
          modalIsOpen={modalIsOpen}
          bigImages={bigImages}
          selectedImage={selectedImage}
          closeModal={closeModal}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </SkeletonTheme>
    </Container>
  );
};
