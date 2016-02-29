import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './components/app.vue'

var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/app': {
        component: app
    }
})
router.start(App, '#app')
