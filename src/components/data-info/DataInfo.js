import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

import ImageComponent from '../image-component';
import AudioComponent from '../audio-component';

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding: ${props => props.theme.all.paddingMobile};

  border-radius: inherit;

  user-select: none;
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

  @media ${device.mobileL} {
    margin: ${props => props.theme.all.marginMobile} 0 0 0
  }
`;

const Title = styled.p`
  margin-top: ${props => props.theme.all.marginMobile};
  padding-bottom: ${props => props.theme.all.paddingMobile};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.1rem;

  @media ${device.mobileL} {
    text-align: center;
  }
`;

const Species = styled.p`
  margin-top: ${props => props.theme.all.marginMobile};
  padding-bottom: ${props => props.theme.all.paddingMobile};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.1rem;

  @media ${device.mobileL} {
    text-align: center;
  }
`;

const CardDescription = styled.p`
  width: 100%;

  line-height: 1.6;
  text-align: justify;

  div + & {
    margin-top: ${props => props.theme.all.margin};
  }
`;

DataContainer.displayName = 'DataContainerStyled';
CardBody.displayName = 'CardBodyStyled';
InfoContainer.displayName = 'InfoContainerStyled';
Title.displayName = 'TitleStyled';
Species.displayName = 'SpeciesStyled';
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
        <CardDescription>
          {'Послушайте плеер.'}
          <br/>
          {'Выберите вариант из списка'}
        </CardDescription>
      </DataContainer>
    );
  }

  const activeAnswerData = data
    .filter((dataItem) => dataItem.id === activeLevel)[0].data
    .filter((activeItem) => activeItem.id === activeAnswer)[0];
  const { name, species, description, audio, image } = activeAnswerData;

  return (
    <DataContainer>
      <CardBody>
        <ImageComponent hasCorrect={true} image={image} />
        <InfoContainer>
          <Title>{name}</Title>
          <Species>{species}</Species>
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
