import styled from 'styled-components';
import { Grid, Text } from 'common';
import arrow from '../assets/arrow.png';
import tail from '../assets/toolkit-tail.png';

interface ProductList {
  discountRate: number;
  imageUrl: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: any;
  productName: string;
}

const Toolkit = (toolkitInfo: ProductList) => {
  const { discountRate, imageUrl, outside, priceOriginal, priceDiscount, productName } = toolkitInfo;

  return (
    <Wrapper>
      <Grid width='70px' height='70px'>
        <Thumbnail src='' alt='toolkit-thumbnail' />
      </Grid>
      <Grid width='100%' flex column>
        <ToolkitTail>{tail}</ToolkitTail>
        <Text size='14px' color='#4a4a4a'></Text>
        <Text>예상가</Text>
        <Grid width='20px' height='20px'>
          {arrow}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 212px;
  height: 70px;
  padding: 8px;
  margin: 16px 0 0;
  border-radius: 7px;
  background: #fff;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 28px;
  left: -20px;
`;

const ToolkitTail = styled.div`
  width: 12px;
  height: 8px;
  position: absolute;
  top: -8px;
  left: 34px;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

export default Toolkit;
