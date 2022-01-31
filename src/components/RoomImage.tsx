import styled from 'styled-components';
import { Grid } from 'common';

const RoomImage = () => {
  return (
    <Grid width='800px'>
      <MainImage src='' alt='main-room' />
    </Grid>
  );
};

const MainImage = styled.img`
  width: 100%;
`;

export default RoomImage;
