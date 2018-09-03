import { fetch } from '@/utils/axios';

export const getHotCities = (params: object) => {
  return fetch({
    url: '/v1/cities',
    params,
  });
};

