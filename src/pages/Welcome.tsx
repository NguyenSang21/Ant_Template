import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <div>Hello World! Welcome to Payment Portal.</div>
      </Card>
    </PageContainer>
  );
};
