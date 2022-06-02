import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import {createRouter, createWebHistory} from 'vue-router';
import getPosts from "@/components/Posts/getPosts";
import createPost from "@/components/Posts/createPost";
// import navBar from "@/components/Posts/navBar";
import viewPost from "@/components/Posts/viewPost";
import updateComponent from "@/components/Posts/updateComponent";
import deletePost from "@/components/Posts/deletePost";

const routes=[
    {
        path:'/posts',
        component:getPosts
    },
    {
        path: '/posts/:id',
        component: viewPost
    },
    {
        path:'/posts/create',
        component: createPost
    },
    {
        path: '/posts/edit/:id',
        component: updateComponent
    },
    {
        path: '/posts/delete/:id',
        component: deletePost
    }


]
const router= createRouter({
    history:createWebHistory(),
    routes
})







createApp(App).use(router).mount('#app')
