import type { ResponseError } from 'umi-request';
import { extend } from 'umi-request';
import { getToken, paramsConverter, paramsFormatter, switchStatusCode } from './utils';
import { notification } from 'antd';
import { history } from '@@/core/history';
import type { History } from 'umi';
import lodash from 'lodash';
import { EXCEPTION_STATUS } from './constants';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const replaceGoto = () => {
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };

    localStorage.clear();
    if (!redirect) {
      history.replace('/auth/login');
      return;
    }
    (history as History).replace(redirect);
  }, 10);
};

/**
 * Handle error https
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  let errorText = '';

  if (response && response.status === 401 && history.location.pathname !== '/auth/login') {
    replaceGoto();
  }

  if (response && response.status && lodash.isEmpty(errorText)) {
    errorText = switchStatusCode(response.status);
  }

  if (!response) {
    errorText = 'Mạng không bình thường, không thể kết nối với máy chủ.';
  }

  if (response && response.status && !EXCEPTION_STATUS.includes(response.status)) {
    notification.error({
      message: `Thông báo`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: 'Mạng của bạn không bình thường, không thể kết nối với máy chủ!',
      message: 'Mạng bất thường!',
    });
  }

  throw error;
};

const extendRequest = extend({
  headers: { 'Content-Type': 'application/json' },
  ttl: 0,
  maxCache: 0,
  timeout: 300000,
});

/**
 *
 * @param {Object} initialRequest
 */
const request = (initialRequest: {
  url: string;
  method: HttpMethod;
  body?: any;
  params?: any;
  headers?: object;
}): Promise<any> => {
  const options: any = {};
  options.method = initialRequest.method;
  options.data = initialRequest.body || {};

  const params = {...initialRequest.params,};

  return extendRequest(
    `${SERVER_API}/${initialRequest.url}${paramsFormatter(paramsConverter(params))}`,
    { ...options, headers: { ...initialRequest.headers, Authorization: `Bearer ${getToken()}` } },
  )
    .then((response) => response)
    .catch((error) => {
      errorHandler(error);
    });
};

export default request;
