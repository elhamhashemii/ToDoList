import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../views/Todo.vue'
import Notes from '../views/Notes.vue'

const routes = [
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
    {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
