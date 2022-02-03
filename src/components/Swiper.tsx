import styled, { css } from 'styled-components';
import { Grid } from 'common';
import { IData, IProductList } from 'types/IData';

type TSwiper = {
  data: IData | null;
  toggleToolkit: (clicked: number) => void;
  clickedIndex: number | null;
};

const Swiper = ({ data, toggleToolkit, clickedIndex }: TSwiper) => {
  return (
    <Grid width='720px' overflow='auto'>
      <Grid width='800px' flex>
        {data?.productList.map((info: IProductList, idx: number) => {
          const { imageUrl, discountRate } = info;

          return (
            <SwipeWrap key={idx} onClick={() => toggleToolkit(idx)}>
              <SwipeImage src={imageUrl} alt='swiper-thumbnail' selected={idx === clickedIndex} />
              {discountRate !== 0 && (
                <DiscountBadge>
                  {discountRate}
                  <span>%</span>
                </DiscountBadge>
              )}
            </SwipeWrap>
          );
        })}
      </Grid>
    </Grid>
  );
};

const SwipeWrap = styled.div`
  margin: 28px 6px;
  width: 106px;
  height: 106px;
  display: flex;
  position: relative;
  cursor: pointer;
`;

const SwipeImage = styled.img<{ selected: boolean }>`
  width: 100%;
  ${(props) =>
    props.selected
      ? css`
          background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
          padding: 2px;
        `
      : 'border: 0.5px solid #aaafb9'};
  border-radius: 16px;
`;

const DiscountBadge = styled.div`
  width: 24px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 5px;
  background: url('//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png') no-repeat center center / contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export default Swiper;
