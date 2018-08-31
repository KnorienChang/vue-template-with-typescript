interface State {
  hasToken: boolean;
}
const state: State = {
  hasToken: !!sessionStorage.getItem('token'),
};
const getters = {
  hasToken: (data: State) => data.hasToken,
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
