import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/index'
console.log('components',components);

const app=createApp(App)

//глобально регистрируем компоненты с помощью встроенной ф-ии app.component('my-component',{/* ... */})
components.forEach(component=>{
  app.component(component.name,component)
})

app.mount('#app')
