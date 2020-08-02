import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { urlToImage } from '../../constants';
import { fadeInAnimation } from '../../style/animation';
import Spinner from '../spinner/Spinner';

const ImageContainer = styled.div`
  position: relative;

  flex-shrink: 0;

  width: 20rem;
  height: 15rem;

  line-height: 0;

  overflow: hidden;

  border: 1px solid #444;
  border-radius: 0.5rem;

  & img {
    width: 100%;
    height: auto;

    object-fit: fill;
    object-position: center;

    border-radius: inherit;

    animation: ${fadeInAnimation} 0.3s linear;
  }
`;

const ImageError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 2rem;

  line-height: 1.6;
  text-align: center;

  border-radius: inherit;

  animation: ${fadeInAnimation} 0.3s linear;
`;

ImageContainer.displayName = 'ImageContainerStyled';
ImageError.displayName = 'ImageErrorStyled';

const ImageComponent = ({ image = '' }) => {
  const [imageData, setImageData] = useState({
    loading: true,
    src: null,
    error: null,
  });

  const handleImgError = () => {
    setImageData({
      loading: false,
      src: null,
      error: 'Sorry, we couldn\'t upload the image',
    });
  };

  useEffect(() => {
    let cancelled = false;

    fetch(urlToImage + image)
      .then((res) => res.blob())
      .then((data) => !cancelled && setImageData({
        loading: false,
        src: URL.createObjectURL(data),
        error: null,
      }))
      .catch(() => !cancelled && setImageData({
        loading: false,
        src: null,
        error: 'Sorry, we couldn\'t upload the image',
      }));

    return () => {
      cancelled = true;

      setImageData({
        loading: true,
        src: null,
        error: null,
      });
    };
  }, [image]);

  let element;
  if (imageData.loading) {
    element = <Spinner />;
  } else if (imageData.src) {
    element = <img src={imageData.src} alt='bird' onError={handleImgError} />;
  } else {
    element = <ImageError>{imageData.error}</ImageError>;
  }

  return (
    <ImageContainer>
      {element}
    </ImageContainer>
  );
};

export default ImageComponent;
