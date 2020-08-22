import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addNotification } from '../../store/action-creators';
import { fadeInAnimation } from '../../styles/animation';

import Spinner from '../spinner/Spinner';

import birdsQuestion from '../../../public/birds-question.svg';

const ImageContainer = styled.div`
  position: relative;

  flex-shrink: 0;

  width: 21.5rem;
  height: 14rem;

  line-height: 0;

  overflow: hidden;

  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  animation: ${fadeInAnimation} 0.3s linear;

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
  padding: 0 ${props => props.theme.all.padding};

  line-height: 1.6;
  text-align: center;

  border-radius: inherit;

  animation: ${fadeInAnimation} 0.3s linear;
`;

const ImageText = styled.div`
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

  background-image: url(${birdsQuestion});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
    addNotification({
      id: `${image}-${new Date()}`,
      type: 'error',
      notification: 'Sorry, we couldn\'t upload the image',
    });
  };

  useEffect(() => {
    let cancelled = false;

    fetch(image)
      .then((res) => res.blob())
      .then((data) => !cancelled && setImageData({
        loading: false,
        src: URL.createObjectURL(data),
        error: null,
      }))
      .catch(() => {
        if (!cancelled) {
          setImageData({
            loading: false,
            src: null,
            error: 'Sorry, we couldn\'t upload the image',
          });
          addNotification({
            id: `${image}-${new Date()}`,
            type: 'error',
            notification: 'Sorry, we couldn\'t upload the image',
          });
        }
      });

    return () => {
      cancelled = true;

      setImageData({
        loading: true,
        src: null,
        error: null,
      });
    };
  }, [image, addNotification]);

  let element;
  if (imageData.loading) {
    element = <Spinner />;
  } else if (imageData.src) {
    element = hasCorrect
    ? <img src={imageData.src} alt='bird' onError={handleImgError} />
    : <ImageText>?</ImageText>;
  } else {
    element = <ImageError>{imageData.error}</ImageError>;
  }

  return (
    <ImageContainer>
      {element}
    </ImageContainer>
  );
};

export default connect(null, mapDispatchToProps)(ImageComponent);
