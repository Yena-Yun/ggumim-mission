import styled, { css } from 'styled-components';
import { Grid, Text } from 'common';
import { arrow, tail } from 'assets';
import { IProductList } from 'types/IData';
import { numberWithCommas } from 'utils/numberWithCommas';

type TToolkit = {
  info: IProductList;
};

const Toolkit = ({ info }: TToolkit) => {
  const { productName, imageUrl, outside, priceDiscount, discountRate } = info;

  return (
    <ToolkitWrap>
      <ToolkitTail tip={tail}></ToolkitTail>

      <Grid width='70px' height='70px' margin='0 8px 0 0'>
        <Thumbnail src={imageUrl} alt='toolkit-thumbnail' />
      </Grid>

      <Grid flex column width='105px' justify='space-between'>
        <Text size='14px' weight={300} color='#333c45'>
          {productName}
        </Text>
        {outside ? (
          <Text weight={700}>
            <Prefix outside={true}>예상가</Prefix> {numberWithCommas(priceDiscount)}
          </Text>
        ) : (
          <Text weight={700}>
            <Prefix outside={false}>{discountRate}%</Prefix> {numberWithCommas(priceDiscount)}
          </Text>
        )}
      </Grid>

      <Grid flex position='relative' width='20px' margin='50px 2px 0 0'>
        <RightArrow arrow={arrow}></RightArrow>
      </Grid>
    </ToolkitWrap>
  );
};

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
  z-index: 100;
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

export default Toolkit;
