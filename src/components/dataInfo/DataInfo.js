import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

import ImageComponent from '../imageComponent/index';
import TitleComponent from '../titleComponent/index';
import AudioComponent from '../audioComponent/index';

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding: ${props => props.theme.all.paddingMobile};

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
  margin-left: ${props => props.theme.all.margin};

  @media ${device.tablet} {
    margin: ${props => props.theme.all.margin} 0 0 0
  }
`;

const CardDescription = styled.p`
  width: 100%;
  margin-top: ${props => props.theme.all.margin};

  line-height: 1.6;
  text-align: justify;
`;

DataContainer.displayName = 'DataContainerStyled';
CardBody.displayName = 'CardBodyStyled';
InfoContainer.displayName = 'InfoContainerStyled';
CardDescription.displayName = 'CardDescriptionStyled';

const mapStateToProps = ({ data, activeLevel, activeAnswer }) => {
  return {
    data,
    activeLevel,
    activeAnswer,
  };
};

const DataInfo = ({ data, activeLevel, activeAnswer }) => {
  if (!activeAnswer) {
    return (
      <DataContainer>
        Послушайте плеер.
        Выберите птицу из списка
      </DataContainer>
    );
  }

  const activeAnswerData = data[activeLevel][activeAnswer - 1];
  const { name, species, description, audio, image } = activeAnswerData;

  return (
    <DataContainer>
      <CardBody>
        <ImageComponent hasCorrect={true} image={image} />
        <InfoContainer>
          <TitleComponent hasCorrect={true} content={name} />
          <TitleComponent hasCorrect={true} content={species} />
          <AudioComponent audio={audio} isControls={true} />
        </InfoContainer>
      </CardBody>
      <CardDescription>
        {description}
      </CardDescription>
    </DataContainer>
  );
};

export default connect(mapStateToProps)(DataInfo);
