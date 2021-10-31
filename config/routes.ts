export default [
  {
    path: '/auth',
    layout: false,
    routes: [
      {
        path: '/auth',
        routes: [{ name: 'login', path: '/auth/Login', component: './auth/Login' }],
      },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
