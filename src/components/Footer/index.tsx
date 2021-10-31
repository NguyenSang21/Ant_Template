import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const defaultMessage = 'Finviet';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{ background: 'none', color: 'white' }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[]}
    />
  );
};
