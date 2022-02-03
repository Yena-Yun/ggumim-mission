import styled, { css } from 'styled-components';
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
  };

  const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <Background image={image}>
        {data?.productList.map((info: ProductList, idx: number) => {
          const { productId, pointX, pointY, productName, imageUrl, outside, priceOriginal, priceDiscount, discountRate } = info;

          return (
            <>
              <MainImgWrap key={idx} pointX={pointX} pointY={pointY} id={productId} onClick={() => positionXY(productId)}>
                <Img src={expandIcon} alt={productName} />

                <ToolkitWrap>
                  <ToolkitTail tip={tail}></ToolkitTail>

                  <Grid width='70px' height='70px' margin='0 8px 0 0'>
                    <Thumbnail src={imageUrl} alt='toolkit-thumbnail' />
                  </Grid>

                  <Grid flex column width='105px' justify='space-between'>
                    <ToolkitTitle>{productName}</ToolkitTitle>
                    {outside ? (
                      <ToolkitDesc>
                        <Prefix outside={true}>예상가</Prefix> {numberWithCommas(priceDiscount)}
                      </ToolkitDesc>
                    ) : (
                      <ToolkitDesc>
                        <Prefix outside={false}>{discountRate}%</Prefix> {numberWithCommas(priceDiscount)}
                      </ToolkitDesc>
                    )}
                  </Grid>

                  <Grid flex position='relative' width='20px' margin='50px 2px 0 0'>
                    <RightArrow arrow={arrow}></RightArrow>
                  </Grid>
                </ToolkitWrap>
              </MainImgWrap>
            </>
          );
        })}
      </Background>

      <SwipeContainer>
        <SwipeList>
          {data?.productList.map((info: ProductList, idx: number) => {
            const { imageUrl, discountRate } = info;

            return (
              <SwipeWrap key={idx}>
                <SwipeImage src={imageUrl} alt='swiper-thumbnail' />
                {discountRate !== 0 && (
                  <DiscountBadge>
                    {discountRate}
                    <span>%</span>
                  </DiscountBadge>
                )}
              </SwipeWrap>
            );
          })}
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
  height: 86px;
  padding: 8px 0 8px 8px;
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
  left: 30px;
  background: url(${(props) => props?.tip}) no-repeat center / contain;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const ToolkitTitle = styled.p`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.04em;
  color: #333c45;
`;

const ToolkitDesc = styled.p`
  font-weight: 700;
  margin-top: 4px;
`;

const Prefix = styled.span<{ outside: boolean }>`
  line-height: 1.2em;
  color: #ff585d;
  font-size: 16px;

  ${(props) =>
    props.outside &&
    css`
      color: #898f94;
      font-size: 11px;
    `}
`;

const RightArrow = styled.div<{ arrow: string }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
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
