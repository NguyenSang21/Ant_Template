// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

// THIS EXAMPLE

/** Create user This can only be done by the logged in user. POST /user */
export async function createUser(body: API.User, options?: { [key: string]: any }) {
  return request<any>('/user', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
