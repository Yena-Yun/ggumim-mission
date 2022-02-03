import styled from 'styled-components';
import { Grid, Text } from 'common';
import expandIcon from 'assets/expand-icon.png';
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

interface IData {
  id: number;
  imageUrl: string;
  productList: ProductList[];
}

interface PostProps {
  image: string | undefined;
  data: IData | null;
}

const MainPostPage = ({ image, data }: PostProps) => {
  const positionXY = (id: string) => {
    const elem = document.getElementById(`${id}`);
    console.log(elem);
    console.log(elem?.getBoundingClientRect().x);
    console.log(elem?.getBoundingClientRect().y);
  };

  // const { productId, pointX, pointY, productName, imageUrl, outside, priceOriginal, priceDiscount, discountRate } = data;

  return (
    <Wrapper>
      <Background image={image}>
        {data?.productList.map((el: ProductList, idx: number) => (
          <>
            <MainImgWrap key={idx} pointX={el.pointX} pointY={el.pointY} id={el.productId} onClick={() => positionXY(el.productId)}>
              <Img src={expandIcon} alt={el.productName} />

              <ToolkitWrap>
                <Grid width='70px' height='70px'>
                  <Thumbnail src={el.imageUrl} alt='toolkit-thumbnail' />
                </Grid>
                <Grid width='100%' flex column>
                  <ToolkitTail tip={tail}></ToolkitTail>
                  <Text size='14px' color='#4a4a4a'>
                    {el.productName}
                  </Text>
                  <Grid flex position='relative'>
                    {el.outside ? (
                      <ToolkitDesc>예상가 {el.priceDiscount}</ToolkitDesc>
                    ) : (
                      <ToolkitDesc>
                        {el.discountRate}% {el.priceDiscount}
                      </ToolkitDesc>
                    )}
                    <RightArrow arrow={arrow}></RightArrow>
                  </Grid>
                  {/* <Grid width='20px' height='20px'>
                  {arrow}
                  </Grid> */}
                </Grid>
              </ToolkitWrap>
            </MainImgWrap>
          </>
        ))}
      </Background>

      <SwipeContainer>
        <SwipeList>
          {data?.productList.map((el: ProductList, idx: number) => (
            <SwipeWrap key={idx}>
              <SwipeImage src={el.imageUrl} alt='swiper-thumbnail' />
              {el.discountRate !== 0 && (
                <DiscountBadge>
                  {el.discountRate}
                  <span>%</span>
                </DiscountBadge>
              )}
            </SwipeWrap>
          ))}
        </SwipeList>
      </SwipeContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Background = styled.div<{ image: string | undefined }>`
  background: url(${(props) => props?.image}) no-repeat center / contain;
  position: relative;
  width: 720px;
  height: 900px;
`;

const MainImgWrap = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => `${props.pointX * 1.43}`}px;
  left: ${(props) => `${props.pointY * 1.5}`}px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const ToolkitWrap = styled.div`
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

const ToolkitTail = styled.div<{ tip: string }>`
  width: 12px;
  height: 8px;
  position: absolute;
  top: -8px;
  left: 34px;
  background: url(${(props) => props?.tip}) no-repeat center / contain;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ToolkitDesc = styled.p``;

const RightArrow = styled.div<{ arrow: string }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  right: -5px;
  background: url(${(props) => props?.arrow}) no-repeat center / contain;
`;

const SwipeContainer = styled.div`
  width: 720px;
  overflow: auto;
`;

const SwipeList = styled.div`
  width: 800px;
  display: flex;
  overflow: auto;
`;

const SwipeWrap = styled.div`
  margin: 28px 6px;
  width: 106px;
  height: 106px;
  display: flex;
  position: relative;
`;

const SwipeImage = styled.img`
  width: 100%;
  border: 0.5px solid #aaafb9;
  border-radius: 16px;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background: url('//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png') no-repeat center center / contain;
  width: 24px;
  height: 28px;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export default MainPostPage;
