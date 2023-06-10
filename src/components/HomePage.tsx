import { Button, Col, Row } from 'antd';
import { styled } from 'styled-components';
// import ImageQuat from '../assets/images/quat.jpg';
import ImageProductQuat from '../assets/images/products/quat.jpg';
import ImageProductDoiQuat from '../assets/images/products/doi_quat.jpg';
import ImageProductBoPin from '../assets/images/products/bo_pin.jpg';
import ImageProductSetDieuHoaRanRi from '../assets/images/products/set_dieu_hoa_ran_ri.jpg';
import ImageProductSetDieuHoaDen from '../assets/images/products/set_dieu_hoa_den.jpg';
import ImageProductSetDieuHoaXam from '../assets/images/products/set_dieu_hoa_xam.jpg';
import ImageProductSetDieuHoaGhi from '../assets/images/products/set_dieu_may_ghi.jpg';
import ImageProductAoRoiXam from '../assets/images/products/ao_roi_xam.jpg';
import ImageProductAoRoiDen from '../assets/images/products/ao_roi_den.jpg';
import ImageProductAoRoiRanRi from '../assets/images/products/ao_roi_ran_ri.jpg';
import ImageProductAoRoGhi from '../assets/images/products/ao_roi_ghi.jpg';
import IConStart from '../assets/images/icon_start.svg';
import HotIcon from '../assets/images/hotico.svg';
import { IProduct } from '@/interfaces';
import { formatNumber } from '../utils';
import { Link, useNavigate } from 'react-router-dom';

const products: IProduct[] = [
  {
    name: 'Bộ phụ kiện: Pin 28.000mAh+Quạt 15v+dây cáp+Sạc',
    img: ImageProductQuat,
    price: 1150000,
  },
  {
    name: 'Đôi quạt chổi than 15v siêu mát',
    img: ImageProductDoiQuat,
    price: 320000,
  },
  {
    name: 'Bộ Pin 28.000mAh + Sạc 100-240v Suzushii chính hãng',
    img: ImageProductBoPin,
    price: 750000,
  },
  {
    name: 'Set áo điều hoà Suzushii màu rằn ri - Tặng kèm đá khô làm mát',
    img: ImageProductSetDieuHoaRanRi,
    price: 1500000,
  },
  {
    name: 'Set áo điều hoà Suzushii màu đen - Tặng kèm đá khô làm mát',
    img: ImageProductSetDieuHoaDen,
    price: 1500000,
  },
  {
    name: 'Set áo điều hoà Suzushii màu xám - Tặng kèm đá khô làm mát',
    img: ImageProductSetDieuHoaXam,
    price: 1500000,
  },
  {
    name: 'Set áo điều hoà Suzushii màu ghi - Tặng kèm đá khô làm mát',
    img: ImageProductSetDieuHoaGhi,
    price: 1500000,
  },
  {
    name: 'Áo rời màu xám ( Không gồm phụ kiện )',
    img: ImageProductAoRoiXam,
    price: 3500000,
  },
  {
    name: 'Áo rời màu đen ( Không gồm phụ kiện ) ',
    img: ImageProductAoRoiDen,
    price: 3500000,
  },
  {
    name: 'Áo rời màu rằn ri ( Không gồm phụ kiện )',
    img: ImageProductAoRoiRanRi,
    price: 3500000,
  },
  {
    name: 'Áo rời màu ghi ( Không gồm phụ kiện )',
    img: ImageProductAoRoGhi,
    price: 3500000,
  },
];
export const HomePageComponent = () => {
  const navigate = useNavigate();

  return (
    <StyledComponent srcHot={HotIcon}>
      <div className='title'>Gợi Ý Cho Nhà Bạn</div>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col span={4.8}>
              <div className='img'>
                <img src={product.img} />
                <div className='wrap-product-sold-info'>
                  <div className='product-review'>
                    <img width='10' height='10' src={IConStart} alt='' />{' '}
                    <span className='number-star-29857237'>4.8</span>
                  </div>
                </div>
                <span className='hot-tag'></span>
              </div>
              <h3 className='product-name'>
                <span>{product.name}</span>
              </h3>
              <div className='footer'>
                <span className='price '>{formatNumber(product.price)}đ</span>
                <button className='payment'>
                  <Link to='https://www.facebook.com/aodieuhoasuzushii' target='_blank'>
                    Mua ngay
                  </Link>
                </button>
              </div>
            </Col>
          );
        })}
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
  .footer {
    display: flex;
    justify-content: space-between;
    .payment a {
      color: inherit;
    }
    .payment {
      height: 40px;
      background: #fcaf17;
      border: none;
      color: #fff;
      padding: 10px;
      width: auto;
      border-radius: 4px;
      display: block;
      font-family: 'SVN-Gilroy';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      width: 126px;
      cursor: pointer;
    }
    .payment:hover {
      color: #fcaf17;
      background: #feecc7;
    }
  }
`;
