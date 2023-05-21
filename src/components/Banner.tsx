import styled from 'styled-components';
import Banner from '../assets/images/bannertop.webp';
export const BannerComponent = () => {
  return (
    <StyledComponent>
      <img src={Banner} className='banner' />
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  height: 48px;
  .banner {
    width: 100%;
    height: 100%;
  }
`;
