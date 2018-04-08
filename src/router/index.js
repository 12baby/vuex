import Vue from 'vue';
import Router from 'vue-router';
import shop from '../components/shop';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'shop',
            component: shop
        }
    ]
});
