import styled from 'styled-components';
import expandIcon from 'assets/expand-icon.png';

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

  return (
    <Wrapper>
      <Background image={image}>
        {data?.productList.map((el: ProductList) => (
          <ImgWrapper key={el.productId} pointX={el.pointX} pointY={el.pointY} id={el.productId} onClick={() => positionXY(el.productId)}>
            <Img src={expandIcon} alt={el.productName} />
          </ImgWrapper>
        ))}
      </Background>

      <SwipeContainer>
        <SwipeList>
          {data?.productList.map((el: ProductList) => (
            <SwipeWrap>
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

const ImgWrapper = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => `${props.pointX * 1.43}`}px;
  left: ${(props) => `${props.pointY * 1.5}`}px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
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
