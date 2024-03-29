import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    
    scrollBehavior(){
        return {x:0, y:0}
    },

    routes
});