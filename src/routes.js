import Quotes from './components/Quotes.vue'
import Tasks from './components/Tasks.vue'
import Design from './components/Design.vue'

export const routes = [
  {path: '/quote_of_the_day', component: Quotes},
  {path: '/tasks', component: Tasks},
  {path: '/design_ideas', component: Design}
]
