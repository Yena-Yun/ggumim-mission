import styled from 'styled-components';
import { Grid, Text } from 'common';

const Toolkit = () => {
  return (
    <Grid>
      <Grid>
        <Thumbnail src='' alt='toolkit-thumbnail' />
      </Grid>
      <Grid>
        <Text></Text>
        <Text></Text>
      </Grid>
    </Grid>
  );
};

const Thumbnail = styled.img``;

export default Toolkit;
