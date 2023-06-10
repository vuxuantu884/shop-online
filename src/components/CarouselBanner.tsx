import React from 'react';
import { Carousel } from 'antd';
import Sale from '../assets/images/sale.png';
import { styled } from 'styled-components';
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  background: '#364d79',
};
export const CarouselBanner = () => {
  return (
    <StyledCarousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={Sale} className='f-w-h' />
        </h3>
      </div>
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
  .f-w-h {
    width: 100%;
    height: 100%;
  }
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.breakpoints.xl + 'px'}) {
    max-width: 1210px;
    padding: unset !important;
    width: 100% !important;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints['2xl'] + 'px'}) {
    max-width: ${p => p.theme.breakpoints['2xl'] + 'px'};
    padding: unset !important;
    width: 100% !important;
  }
`;
