import lodash from 'lodash';
import { httpCodeMessage } from './constants';

/**
 * Get token
 * @returns 
 */
export const getToken = (): string => {
  const token = localStorage.getItem('token') || '';
  return <string>token;
};

/**
 * Get refresh token
 * @returns 
 */
export const getRefreshToken = (): string => {
  const token = localStorage.getItem('refresh_token') || '';
  return <string>token;
};

/**
 * This fucntion use to convert a params string
 * @param params
 */
 export const paramsConverter = (params?: object): object => {
  const newObj: any = {};
  if (!params) return newObj;
  Object.entries(params).forEach(([key, value]) => {
    if (key === 'current') {
      newObj.page = value;
    } else if (key === 'pageSize') {
      newObj.per_page = value;
    } else if (value || lodash.isBoolean(value) || lodash.isNumber(value)) {
      newObj[key] = value;
    }
  });
  if (newObj.keyword) {
    newObj.keyword = String(newObj.keyword).trim();
  }
  return newObj;
};

/**
 * formatter v2
 * @param params
 */
 export const paramsFormatter = (params: object): string => {
  if (params) {
    let str = '';
    let idx = 0;
    const obj = Object.entries(params);
    const objLenght = obj.length;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of obj) {
      if (idx === 0) str += `?${key}=${value}&`;
      else if (idx === objLenght - 1) str += `${key}=${value}`;
      else str += `${key}=${value}&`;
      idx += 1;
    }
    return str;
  }
  return '';
};

export const switchStatusCode = (status: number) => {
  switch (status) {
    case 201:
      return httpCodeMessage['201'];
    case 202:
      return httpCodeMessage['202'];
    case 204:
      return httpCodeMessage['204'];
    case 400:
      return httpCodeMessage['400'];
    case 401:
      return httpCodeMessage['401'];
    case 403:
      return httpCodeMessage['403'];
    case 404:
      return httpCodeMessage['404'];
    case 405:
      return httpCodeMessage['405'];
    case 406:
      return httpCodeMessage['406'];
    case 500:
      return httpCodeMessage['500'];
    case 503:
      return httpCodeMessage['503'];
    case 504:
      return httpCodeMessage['504'];
    default:
      return 'Lỗi dịch vụ! Vui lòng hiên hệ admin để giải quyết.';
  }
};
