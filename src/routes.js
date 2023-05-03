// import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';
// import fetchApi from '@/pages/fetchApi.vue';
import HeaderBar from '@/components/HeaderBar.vue';
// import CrudHome from '@/components/CrudHome.vue';
import Items from '@/components/Items.vue';
// import Crud from '@/pages/crud.vue';
import Acbd from '@/pages/acbd.vue';

export const routes = [
  // { path: '/', component: Index },
  { path: '/:path(.*)', component: NotFound },
  { path: '/crud', component: Acbd },
  { path: '/crud/post', component: HeaderBar },
  { path: '/crud/items', component: Items },
];

export default routes;
