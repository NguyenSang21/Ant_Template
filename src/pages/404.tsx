import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Xin lỗi, trang bạn đang tìm không tồn tại."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Trở về
      </Button>
    }
  />
);

export default NoFoundPage;
