import styled from 'styled-components';
import { Grid } from 'common';
import expandIcon from 'assets/expandIcon.png';

type RoomProps = {
  src: string;
  alt: string;
  fetchData: JSX.Element;
};

const RoomImage = ({ src, alt, fetchData }: RoomProps) => {
  return (
    <Grid width='800px'>
      <MainImage src={src} alt={alt} />
      <div>{/* <ExpandBtn src={expandIcon} alt='expand-button' /> */}</div>
    </Grid>
  );
};

const MainImage = styled.img`
  width: 100%;
  position: relative;
`;

const ExpandBtn = styled.img<{ pointX: number }>`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default RoomImage;
