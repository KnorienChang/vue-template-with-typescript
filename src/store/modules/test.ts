import { getHotCities } from '@/api/test';

interface State {
  hasToken: boolean;
  hotCities: object[];
}
const state: State = {
  hasToken: !!sessionStorage.getItem('token'),
  hotCities: [],
};
const getters = {
  hasToken: (data: State) => data.hasToken,
  hotCities: (data: State) => data.hotCities,
};
const mutations = {
  GET_HOT_CITIES(data: State, param: any): void {
    data.hotCities = param;
  },
};
const actions = {
  getHotCities({ commit }: any, params: object) {
    return new Promise((resolve, reject) => {
      getHotCities(params).then((res: any) => {
        commit('GET_HOT_CITIES', res);
      }).catch((e: any) => {
        reject(e);
      });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
