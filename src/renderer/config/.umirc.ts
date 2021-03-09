import { defineConfig } from 'umi';
export default defineConfig({
 layout: {},
   history: 'hash',
 outputPath: `../../dist/renderer`,
 publicPath: './',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/list2', component: '@/pages/index' },
      ],
    }, 
  ],
});