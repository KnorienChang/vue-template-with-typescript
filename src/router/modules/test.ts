const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../../views/Test.vue'),
  },
];

export default routes;
