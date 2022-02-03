import styled from 'styled-components';
import { Toolkit } from 'components';
import { Grid } from 'common';
import { IProductList } from 'types/IData';
import { expandIcon, closeIcon } from 'assets';

type TProducts = {
  info: IProductList;
  toggleToolkit: (clicked: number) => void;
  idx: number;
  showToolkit: boolean;
  clickedIndex: number | null;
};

const Products = ({ info, toggleToolkit, idx, showToolkit, clickedIndex }: TProducts) => {
  const { pointX, pointY, productName } = info;

  return (
    <ProductsWrap key={idx} pointX={pointX} pointY={pointY}>
      <Grid width='40px' height='40px' flex justify='center' align='center' _onClick={() => toggleToolkit(idx)}>
        <Grid width='32px' height='32px' cursor='pointer'>
          {idx === clickedIndex && showToolkit ? (
            <ButtonImg src={closeIcon} alt={productName} />
          ) : (
            <ButtonImg src={expandIcon} alt={productName} />
          )}
        </Grid>
      </Grid>

      {idx === clickedIndex && showToolkit && <Toolkit info={info} />}
    </ProductsWrap>
  );
};

const ProductsWrap = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => `${props.pointX * 1.43}`}px;
  left: ${(props) => `${props.pointY * 1.5}`}px;
`;

const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Products;
