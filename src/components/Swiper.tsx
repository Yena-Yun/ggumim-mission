import React from 'react';
import styled from 'styled-components';

const Swiper = () => {
  return (
    <Wrapper>
      <SwiperList>
        <SwipeWrap>
          <SwipeImage src='' alt='' />
        </SwipeWrap>
        <SwipeWrap>
          <SwipeImage src='' alt='' />
        </SwipeWrap>
      </SwiperList>
    </Wrapper>
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
