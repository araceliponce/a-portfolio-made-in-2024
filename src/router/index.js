// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


// https://www.youtube.com/watch?v=pG5pwDGc3D4


const routes = [
  {
    path: '/',
    name: 'proyectos',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/acerca-de',
    name: 'acerca-de',
    component: () => import('../views/About.vue'),
    props: true // Pass route params as props to the component
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router