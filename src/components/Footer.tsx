import { Col, Row, Space, Input, Button, Divider } from 'antd';
import styled from 'styled-components';
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const FooterComponent = () => {
  return (
    <StyledComponent>
      <div className='container-footer'>
        <Row gutter={[60, 0]}>
          <Col span={6}>
            <p className='sum'>
              🔥🔥🔥 SUZUSHII - TỰ HÀO LÀ ĐƠN VỊ CUNG ỨNG CHÍNH HÃNG VỚI DÒNG SẢN PHẨM ÁO ĐIỀU HOÀ
              CHUẨN THEO CÔNG NGHỆ NHẬT BẢN ❄️❄️❄️❄️❄️
            </p>
            <p className='title mb-2'>ĐĂNG KÝ NHẬN THÔNG TIN</p>
            <Space.Compact style={{ width: '100%', marginBottom: '30px' }} size='large'>
              <Input placeholder='Nhập email bạn đã đăng ký' />
              <Button type='primary'>Đăng ký</Button>
            </Space.Compact>
            <Row gutter={[20, 0]}>
              <Col>
                <Link to='https://www.facebook.com/aodieuhoasuzushii' target='_blank'>
                  <FacebookOutlined style={{ fontSize: '32px' }} />
                </Link>
              </Col>
              <Col>
                <YoutubeOutlined style={{ fontSize: '32px' }} />
              </Col>
              <Col>
                <InstagramOutlined style={{ fontSize: '32px' }} />
              </Col>
              <Col>
                <LinkedinOutlined style={{ fontSize: '32px' }} />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <p>ÁO ĐIỀU HOÀ SUZUSHII CHÍNH HÃNG </p>
            <p>Giới thiệu</p>
            <p>Liên hệ</p>
            <p>Tuyển dụng</p>
            <p>TIn tức</p>
            <p>Hệ thống của hàng</p>
            <p>Ưu đãi Outlet</p>
          </Col>
          <Col span={6}>
            <p>HỖ TRỢ KHÁCH HÀNG </p>
            <p>Hướng dẫn chọn size</p>
            <p>Chính sách khách hàng thân thiết</p>
            <p>Chính sách bảo hành, đổi/trả</p>
            <p>Chính sách bảo mật</p>
            <p>Thanh toán, giao nhận</p>
            <p>Chính sách Đồng phục</p>
          </Col>
          <Col span={6}>
            <p>ÁO ĐIỀU HÒA SUZUSHII JAPAN EXPORT </p>
            <p>Mã số thuế: 0801361801</p>
            <p>Địa chỉ: xã Hiệp Lực – huyện Ninh Giang – tỉnh Hải Dương</p>
            <p>Liên hệ đặt hàng: 0981.29.1992 - 0857.686.222</p>
            <p>Email: suzushii.jpexport@gmail.com</p>
          </Col>
        </Row>
        <Divider style={{ background: 'white' }} />
        <div className='copyright'>© SUZUSHII - Bản quyền thuộc về SUZUSHII</div>
      </div>
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  background: #2a2a86 top center;

  padding: 25px 0 0;
  color: #fff;
  .container-footer {
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
  }
  p {
    font-size: 14px !important;
    margin-bottom: 6px;
  }
  .sum {
    margin-bottom: 30px;
  }
  .mb-2 {
    margin-bottom: 8px;
  }
  .copyright {
    text-align: center;
    padding-bottom: 24px;
  }
`;
