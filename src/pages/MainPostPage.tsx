import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from 'common';
import { Products, Swiper } from 'components';
import { IProductList, IPostProps } from 'types/IData';

const MainPostPage = ({ image, data }: IPostProps) => {
  const [showToolkit, setShowTookit] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const removeToolkit = () => {
    if (showToolkit) {
      setShowTookit(false);
    }
  };

  const toggleToolkit = (clicked: number) => {
    const clickedProduct = data?.productList.filter((item, idx) => idx === clicked);

    if (clickedProduct !== undefined) {
      setShowTookit(!showToolkit);
      setClickedIndex(clicked);
    }
  };

  useEffect(() => {
    setShowTookit((showToolkit) => !showToolkit);
  }, [clickedIndex]);

  return (
    <Grid flex column align='center' margin='20px 0 0' _onClick={removeToolkit}>
      <Background image={image}>
        {data?.productList.map((info: IProductList, idx: number) => {
          return (
            <Products key={idx} info={info} toggleToolkit={toggleToolkit} idx={idx} showToolkit={showToolkit} clickedIndex={clickedIndex} />
          );
        })}
      </Background>

      <Swiper data={data} toggleToolkit={toggleToolkit} clickedIndex={clickedIndex} />
    </Grid>
  );
};

const Background = styled.div<{ image: string | undefined }>`
  background: url(${(props) => props?.image}) no-repeat center / contain;
  position: relative;
  width: 720px;
  height: 900px;
  cursor: pointer;
`;

export default MainPostPage;
