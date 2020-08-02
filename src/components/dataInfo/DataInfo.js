import React from 'react';
import styled from 'styled-components';

import { device } from '../../style/media';
import ImageComponent from '../imageComponent/index';
import TitleComponent from '../titleComponent/index';
import AudioComponent from '../audioComponent/index';

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding: 1rem;

  border-radius: inherit;
`;

const CardBody = styled.div`
  display: flex;

  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  margin-left: 2rem;

  @media ${device.tablet} {
    margin: 2rem 0 0 0
  }
`;

const CardDescription = styled.p`
  width: 100%;
  margin-top: 2rem;

  line-height: 1.6;
  text-align: justify;
`;

DataContainer.displayName = 'DataContainerStyled';
CardBody.displayName = 'CardBodyStyled';
InfoContainer.displayName = 'InfoContainerStyled';
CardDescription.displayName = 'CardDescriptionStyled';

const DataInfo = () => {
  return (
    <DataContainer>
      <CardBody>
        <ImageComponent />
        <InfoContainer>
          <TitleComponent />
          <AudioComponent />
        </InfoContainer>
      </CardBody>
      <CardDescription>
        {'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.'}
      </CardDescription>
    </DataContainer>
  );
};

export default DataInfo;
