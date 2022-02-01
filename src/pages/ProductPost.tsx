import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RoomImage, Swiper } from 'components';
import { Grid } from 'common';
// import getData from 'hooks/getData';
import axios from 'axios';
import expandIcon from 'assets/expandIcon.png';

interface ProductList {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

interface IData {
  id: number;
  imageUrl: string;
  productList: ProductList[];
}

const ProductPost = () => {
  const [fetchData, setFetchData] = useState<IData>();
  const [expandBtn, setExpandBtn] = useState<JSX.Element>();
  const [pointX, setPointX] = useState<number>(0);

  useEffect(() => {
    axios.get('https://cdn.ggumim.co.kr/test/image_product_link.json').then((response) => {
      console.log(response.data);

      setFetchData(response.data);

      setExpandBtn(
        response.data.productList.map((item: ProductList, idx: number) => {
          console.log(item);
          console.log(expandIcon);
          console.log(item.pointX);

          setPointX(item.pointX);

          return <ExpandBtn src={expandIcon} alt='expand-button' />;
        })
      );
    });
  }, []);

  return (
    <Grid flex>
      <Grid width='800px' position='relative'>
        <MainImage src={fetchData?.imageUrl} alt='room-picture' />
        <BtnWrap pointX={pointX}>{expandBtn}</BtnWrap>
      </Grid>

      <Grid width='780px' padding='0 10px'>
        <Grid flex>
          <Grid width='106px'>
            <SwipeImage src='' alt='' />
          </Grid>
          <Grid>
            <SwipeImage src='' alt='' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MainImage = styled.img`
  width: 100%;
  position: relative;
`;

const BtnWrap = styled.div<{ pointX: number }>`
  position: absolute;
  top: ${(props) => props.pointX};
  left: 0;
`;

const ExpandBtn = styled.img`
  width: 32px;
  height: 32px;
`;

const SwipeImage = styled.img`
  width: 100%;
  border: 0.5px solid #aaafb9;
  border-radius: 16px;
`;

export default ProductPost;
