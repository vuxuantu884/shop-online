import { Col, Row } from 'antd';
import { styled } from 'styled-components';
import ImageQuat from '../assets/images/quat.jpg';
import IConStart from '../assets/images/icon_start.svg';
import HotIcon from '../assets/images/hotico.svg';
export const HomePageComponent = () => {
  return (
    <StyledComponent srcHot={HotIcon}>
      <div className='title'>Gợi Ý Cho Nhà Bạn</div>
      <Row gutter={[24, 24]}>
        <Col span={4.8}>
          <div className='img'>
            <img src={ImageQuat} />
            <div className='wrap-product-sold-info'>
              <div className='product-review'>
                <img width='10' height='10' src={IConStart} alt='' />{' '}
                <span className='number-star-29857237'>4.8</span>
              </div>
            </div>
            <span className='hot-tag'></span>
          </div>
          <h3 className='product-name'>
            <span>Quần Short Nam Ống Rộng Thoáng Mát</span>
          </h3>
          <span className='price '>199.000đ</span>
        </Col>
        <Col span={4.8}>
          <div className='img'>
            <img src={ImageQuat} />
            <div className='wrap-product-sold-info'>
              <div className='product-review'>
                <img width='10' height='10' src={IConStart} alt='' />{' '}
                <span className='number-star-29857237'>4.8</span>
              </div>
            </div>
            <span className='hot-tag'></span>
          </div>
          <h3 className='product-name'>
            <span>Quần Short Nam Ống Rộng Thoáng Mát</span>
          </h3>
          <span className='price '>199.000đ</span>
        </Col>
        <Col span={4.8}>
          <div className='img'>
            <img src={ImageQuat} />
            <div className='wrap-product-sold-info'>
              <div className='product-review'>
                <img width='10' height='10' src={IConStart} alt='' />{' '}
                <span className='number-star-29857237'>4.8</span>
              </div>
            </div>
            <span className='hot-tag'></span>
          </div>
          <h3 className='product-name'>
            <span>Quần Short Nam Ống Rộng Thoáng Mát</span>
          </h3>
          <span className='price '>199.000đ</span>
        </Col>
        <Col span={4.8}>
          <div className='img'>
            <img src={ImageQuat} />
            <div className='wrap-product-sold-info'>
              <div className='product-review'>
                <img width='10' height='10' src={IConStart} alt='' />{' '}
                <span className='number-star-29857237'>4.8</span>
              </div>
            </div>
            <span className='hot-tag'></span>
          </div>
          <h3 className='product-name'>
            <span>Quần Short Nam Ống Rộng Thoáng Mát</span>
          </h3>
          <span className='price '>199.000đ</span>
        </Col>
        <Col span={4.8}>
          <div className='img'>
            <img src={ImageQuat} />
            <div className='wrap-product-sold-info'>
              <div className='product-review'>
                <img width='10' height='10' src={IConStart} alt='' />{' '}
                <span className='number-star-29857237'>4.8</span>
              </div>
            </div>
            <span className='hot-tag'></span>
          </div>
          <h3 className='product-name'>
            <span>Quần Short Nam Ống Rộng Thoáng Mát</span>
          </h3>
          <span className='price '>199.000đ</span>
        </Col>
      </Row>
    </StyledComponent>
  );
};
const StyledComponent = styled.div<{ srcHot: string }>`
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
  .title {
    color: #11006f;
    margin-bottom: 24px;
    text-decoration: none;
    background: transparent;
    height: 26px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
  }
  .img {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    img {
      width: 100%;
    }
    img:hover {
      transform: scale(1.1);
    }
    .wrap-product-sold-info {
      position: absolute;
      top: 0px;
      left: 0px;
      width: auto;
      z-index: 2;
      padding: 0 7px 0 7px;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 4px;
      background: rgba(0, 0, 0, 0.6);
      height: 24px;
      font-size: 12px;
      font-family: 'SVN-Gilroy';
      color: #fff;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    .product-review {
      display: flex;
      align-items: center;
      span {
        margin-left: 2px;
      }
    }

    .hot-tag {
      position: absolute;
      top: 0;
      right: 0px;
      background: url(${p => p.srcHot}) left center no-repeat;
      width: 35px;
      height: 35px;
      display: block;
      z-index: 9;
      background-size: 35px;
    }
  }
  .product-name {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: initial;
    margin-top: 10px;
  }
  h3 {
    height: 36px;
    padding: 0;
    text-overflow: ellipsis;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 5px;
    line-height: 18px;
    height: 18px;
    cursor: pointer;
  }
  h3:hover {
    color: #fcaf17;
  }
  .price {
    color: #000000;
    line-height: 1.3;
    display: block;
    font-size: 16px;
    font-family: 'SVN-Gilroy Bold';
    margin-bottom: 7px;
    padding-right: 0px;
    overflow: hidden;
    position: relative;
    width: 100%;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    font-weight: 600;
  }
`;
