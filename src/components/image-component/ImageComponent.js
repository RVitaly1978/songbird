import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addNotification } from '../../store/action-creators';
import { fadeInAnimation } from '../../styles/animation';
import { getRandomInRange } from '../../helpers';

import Spinner from '../spinner/Spinner';

import birdsCardBg from '../../../public/birds-card-bg.svg';

const ImageContainer = styled.div`
  position: relative;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 21.5rem;
  height: 15rem;

  line-height: 0;

  overflow: hidden;

  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  background: ${props => {
    return props.hasCorrect
      ? ''
      : `url(${birdsCardBg})`;
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${fadeInAnimation} 0.3s linear;

  & img {
    display: ${props => {
      return (props.isError)
        ? 'none'
        : 'block';
    }};
    z-index: 1;

    width: 100%;
    height: auto;

    object-fit: fill;
    object-position: center;

    border-radius: inherit;

    opacity: ${props => {
      return (props.isVisible && props.hasCorrect)
        ? '1'
        : '0';
    }};

    transition: opacity 0.3s linear;
  }
`;

const ImageError = styled.div`
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: ${props => props.theme.all.padding};

  line-height: 1.6;
  text-align: center;

  border-radius: inherit;

  animation: ${fadeInAnimation} 0.3s linear;
`;

const ImageText = styled.div`
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  color: ${props => props.theme.secondary.color};
  text-shadow: 0 0 10px ${props => props.theme.secondary.color};

  font-size: 10rem;
  line-height: 1;
  text-align: center;

  border-radius: inherit;

  animation: ${fadeInAnimation} 0.3s linear;
`;

ImageContainer.displayName = 'ImageContainerStyled';
ImageError.displayName = 'ImageErrorStyled';
ImageText.displayName = 'ImageTextStyled';

const mapDispatchToProps = (dispatch) => ({
  addNotification: (notification) => dispatch(addNotification(notification))
});

const ImageComponent = ({ hasCorrect, image, addNotification }) => {
  const [imageData, setImageData] = useState({
    loading: false,
    error: null,
  });

  const handleImgError = () => {
    setImageData({
      loading: false,
      error: 'Sorry, we couldn\'t upload the image',
    });

    addNotification({
      id: `${image}-${getRandomInRange(1000)}-${new Date()}`,
      type: 'error',
      notification: 'Sorry, we couldn\'t upload the image',
    });
  };

  const handleImgLoad = () => {
    setImageData({
      loading: false,
      error: null,
    });
  };

  useEffect(() => {
    let canceled = false;

    if (hasCorrect && image && !canceled) {
      setImageData({
        loading: true,
        error: null,
      });
    }

    return () => {
      canceled = true;

      setImageData({
        loading: false,
        error: null,
      });
    };
  }, [hasCorrect, image]);

  return (
    <ImageContainer
      hasCorrect={hasCorrect}
      isVisible={!imageData.loading && !imageData.error}
      isError={imageData.error}
    >
      {!hasCorrect && <ImageText>?</ImageText>}
      {hasCorrect && <img
        src={image}
        onError={handleImgError}
        onLoad={handleImgLoad}
        alt='bird'
      />}
      {imageData.loading && <Spinner />}
      {imageData.error && <ImageError>{imageData.error}</ImageError>}
    </ImageContainer>
  );
};

export default connect(null, mapDispatchToProps)(ImageComponent);
