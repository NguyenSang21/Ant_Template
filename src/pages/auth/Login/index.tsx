import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, Link, FormattedMessage, useModel, history } from 'umi';
import Footer from '@/components/Footer';
import styles from './index.less';

/**
 * The function to use to redirect login page.
 */
const replaceGoto = () => {
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };

    if (!redirect) {
      history.replace('/');
      return;
    }
    history.replace(redirect);
  }, 10);
};

const Login: React.FC = () => {
  const intl = useIntl();
  const [submitting, setSubmitting] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);
    try {
      // TODO: Hanle your api to here
      const msg = !!values;
      if (msg && initialState) {
        // TODO: save token to here ...
        try {
          const currentUser = await initialState?.fetchUserInfo?.();
          if (currentUser) {
            setInitialState({
              ...initialState,
              currentUser,
            });
            message.success('Đăng nhập thành công!');
            replaceGoto();
          } else {
            message.error('Không thể lấy thông tin người dùng.');
          }
        } catch (error: any) {
          message.error(error);
        }
      }
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login fail!',
      });
      message.error(defaultLoginFailureMessage);
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <span className={styles.title}>Hệ thống EcoPay</span>
            </Link>
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          </div>
        </div>

        <div className={styles.main}>
          <ProForm
            initialValues={{
              autoLogin: true,
            }}
            submitter={{
              searchConfig: {
                submitText: intl.formatMessage({
                  id: 'pages.login.submit',
                  defaultMessage: 'Submit',
                }),
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              handleSubmit(values as API.LoginParams);
            }}
          >
            <div className={styles.contentLabel}>
              <h2>Đăng nhập</h2>
            </div>
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: 'admin or user',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="Required!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: 'ant.design',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage id="pages.login.password.required" defaultMessage="" />
                    ),
                  },
                ]}
              />
            </>
          </ProForm>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
