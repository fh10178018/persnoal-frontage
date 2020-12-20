import React from 'react';
import styled from 'styled-components';
import background1 from '../../img/background1.png'

const GalleryWrapper = styled.div`
  margin: 50vh 50px 0 50px;
  transform: translateY(-50%);
`
const MyContent = styled.div`
  background:url(${background1}) white;
  border: 4px solid #dba437;
  border-radius: 5vw;
  background-size: 5%;
  width:100%;
  height:auto;
  position:relative;
  box-shadow: 1px 1px 20px #828282;
  padding: 3vw;
  max-height: 90vh;
  overflow-y:auto;
`
const Gallery: React.FC = ({
  children,
}) => {
  return (
    <GalleryWrapper>
      <MyContent>
        {children}
      </MyContent>
    </GalleryWrapper>
  );
};

export default Gallery