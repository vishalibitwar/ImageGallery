import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const [page, setPage] = useState(1);


  const searchText = (text) => {
    setImages([]);
    setIsLoading(true);
    setTerm(text);
    setPage(1);
    setScrollTop(4);
  }

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=9&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setImages(prev => [...prev, ...data.hits]);
        setPage(page + 1);
      })
      .catch((err) => console.log(err));

    const onScroll = e => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1)
        setScrollTop(e.target.documentElement.scrollTop);
    };

    document.body.addEventListener('touchmove', onScroll);
    document.body.removeEventListener( 'touchmove', onscroll );

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);


  }, [term,scrollTop]);







  return (
    <div className='container w-11/12  mb-6 mx-auto sm:max-w-screen-xl'>
      <ImageSearch searchText={searchText} />


      { !isLoading && images.length < 1 && <h1 className="text-gray-700  text-xl text-center mt-6">
        Nothing Found
      </h1>}
      {isLoading ? (
        <h1 className='text-xl text-center text-gray-600 mt-32'>Loading...</h1>
      ) : (
          <div className='grid justify-center grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3  sm:gap-3'>
            {images.map((image, index) => (
              <ImageCard key={index} image={image} />
            ))}
          </div>
        )}

      <ScrollToTop />
    </div>
  );
};

export default App;
