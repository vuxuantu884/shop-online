import { Col, Row, Space, Input, Button, Divider } from 'antd';
import styled from 'styled-components';
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

export const FooterComponent = () => {
  return (
    <StyledComponent>
      <div className='container-footer'>
        <Row gutter={[60, 0]}>
          <Col span={6}>
            <p className='sum'>
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình”
              là sứ mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước
            </p>
            <p className='title mb-2'>ĐĂNG KÝ NHẬN THÔNG TIN</p>
            <Space.Compact style={{ width: '100%', marginBottom: '30px' }} size='large'>
              <Input placeholder='Nhập email bạn đã đăng ký' />
              <Button type='primary'>Đăng ký</Button>
            </Space.Compact>
            <Row gutter={[20, 0]}>
              <Col>
                <FacebookOutlined style={{ fontSize: '32px' }} />
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
            <p>VỀ YODY</p>
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
        </Row>
        <Divider style={{ background: 'white' }} />
        <div className='copyright'>© YODY - Bản quyền thuộc về Công ty cổ phần thời trang YODY</div>
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
    }
    @media screen and (min-width: ${p => p.theme.breakpoints['2xl'] + 'px'}) {
      max-width: ${p => p.theme.breakpoints['2xl'] + 'px'};
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
