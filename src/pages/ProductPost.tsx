import styled from 'styled-components';
import expandIcon from 'assets/expandIcon.png';

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

interface ImageProps {
  image: string | undefined;
}

const ProductPost = ({ image, data }: PostProps) => {
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

      <ScrollWrapper>{/* <ImageList data={data} /> */}</ScrollWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div<ImageProps>`
  background-image: url(${(props) => props?.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: 800px;
  height: 998.39px;
`;

const ImgWrapper = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => `${props.pointX * 1.6}`}px;
  left: ${(props) => `${props.pointY * 1.65}`}px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const ScrollWrapper = styled.div`
  width: 800px;
  overflow-x: scroll;
`;

export default ProductPost;
