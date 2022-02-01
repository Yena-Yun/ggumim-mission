import styled from 'styled-components';

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

interface DataProps {
  data: IData;
}

const Swiper = ({ data }: DataProps) => {
  return (
    <>
      {data.productList.map((el: ProductList, idx: number) => (
        <SwipeWrap>
          <SwipeImage src={data?.productList[idx].imageUrl} alt='' />
        </SwipeWrap>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  width: 780px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;

const SwiperList = styled.div`
  width: 780px;
`;

const SwipeWrap = styled.div`
  margin: 28px 6px;
  width: 106px;
  height: 106px;
`;

const SwipeImage = styled.img`
  width: 100%;
  border: 0.5px solid #aaafb9;
  border-radius: 16px;
`;

export default Swiper;
