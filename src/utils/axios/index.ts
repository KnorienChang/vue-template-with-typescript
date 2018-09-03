import axios from 'axios';
import axiosConfig from './config';

// 取消重复请求
const pending: Array<{
  url: string,
  cancel: () => void,
}> = [];

const cancelToken = axios.CancelToken;

const removePending = (config: any) => {
  for (let p in pending) {
    if (pending.hasOwnProperty(p)) {
      const item: any = p;
      const list: any = pending[p];
      // 当前请求在数组中存在时执行函数体
      if (list.url === config.url + '&request_type=' + config.method) {
        // 执行取消操作
        list.cancel();
        // 从数组中移除记录
        pending.splice(item, 1);
      }
    }
  }
};

export function fetch(options: any) {
  return new Promise((resolve, reject) => {
    const instance = axios.create(axiosConfig);

    // 添加请求拦截器
    instance.interceptors.request.use(
      (config) => {
        removePending(config);
        config.cancelToken = new cancelToken((c) => {
          pending.push({ url: config.url + '&request_type=' + config.method, cancel: c });
        });
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // 返回状态判断(添加响应拦截器)
    instance.interceptors.response.use(
      (res) => {
        removePending(res.config);
        return res;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    instance(options).then((res) => {
      console.log(res, 'axios');
      resolve(res.data);
    }).catch((error) => {
      console.log(error);
    });
  });
}
