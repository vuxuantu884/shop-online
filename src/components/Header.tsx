import { Input, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import BackgroundHeader from '../assets/images/background-header.png';
import Logo from '../assets/images/logo.png';

const { Search } = Input;

const dataMenu = ['Nữ', 'Nam', 'Trẻ em', 'Bộ sưu tập', 'Đồng phục', 'Blog'];

export const HeaderComponent = () => {
  return (
    <StyledComponent className='background-header py-1'>
      <Row className={`container-header`} align='middle' justify='space-between'>
        <Col span={10}>
          <Row gutter={[24, 0]}>
            <Col>
              <img src={Logo} className='logo' />
            </Col>
            <Col style={{ flex: 1 }}>
              <Search
                placeholder='Tìm kiếm sản phẩm'
                allowClear
                style={{ width: '100%' }}
                size='large'
              />
            </Col>
          </Row>
        </Col>
        <Col span={14}>
          <Row justify='end' gutter={[12, 0]} align='middle'>
            <Col>
              <Row align='middle' style={{ cursor: 'pointer' }}>
                <PhoneOutlined
                  style={{ fontSize: '24px', marginRight: '8px', transform: 'rotate(90deg)' }}
                />
                <b>0981.29.1992</b>
              </Row>
            </Col>
            <Col>
              <Button className='btn-free'>Free</Button>
            </Col>
            <Col style={{ margin: '0 8px', fontSize: '14px' }}>-</Col>
            <Col>
              <Row align='middle' style={{ cursor: 'pointer' }}>
                <b style={{ marginRight: '8px' }}>Đặt hàng gọi</b>

                <PhoneOutlined
                  style={{ fontSize: '24px', marginRight: '8px', transform: 'rotate(90deg)' }}
                />
                <b>0857.686.222</b>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={`container-header menu-header`} justify='space-between' align='middle'>
        <Col span={16}>
          <Row gutter={[24, 0]} align='middle'>
            <Col style={{ color: '#CD151C ' }}>Sale up to 50%</Col>
            {dataMenu.map(data => {
              return <Col key={data}>{data}</Col>;
            })}
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[24, 0]} justify='end'>
            <Col style={{ flex: 1, textAlign: 'end' }}>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} /> Giỏ hàng
            </Col>
            <Col>
              <UserOutlined style={{ fontSize: '24px' }} /> <span>Đăng ky</span> /{' '}
              <span>Đăng nhập</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  background-image: url(${BackgroundHeader});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 4px 0;
  .container-header {
    margin: 0 auto;
    padding: 4px 0;
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
  }
  .menu-header div {
    font-weight: 600;
    font-size: 14px !important;
    text-transform: uppercase;
    color: #11006f;
  }
  .logo {
    /* width: 80px;
    height: 38px; */
  }
  .mr-8 {
    margin-right: 32px;
  }
  .ant-btn {
    background-color: ${p => p.theme.colors.main};
  }
  b {
    font-size: 14px;
  }
  .btn-free {
    border-radius: 20px;
    /* width: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: initial;
    font-weight: 600;
  }
  .btn-free:hover {
    cursor: initial;
    color: initial;
    border-color: transparent;
  }
`;
