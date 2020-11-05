import request from './axios'


export default function getUser(query, type) {
  let url = 'users'
  let params = {}
  if(!query) {
    params = {
      q: 'react'
    }
  } else {
    params = query
  }

  // 默认使用get方式请求，params对象就是?后面的数据
  return request({url, params})
}