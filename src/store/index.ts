import { Task } from './../ifc/ifc_task';
import { createStore as taskStore } from 'vuex'

export default taskStore({
  state: {
    tasks: []// список задач
  },

  getters: {
    task_list(state){
      return state.tasks
    }
  },

  mutations: {
  },
  actions: {
    // Получаем список задач с сервера
    async getTaskList() {
      await fetch("http://localhost:3001/tasks")
        .then(res => {
          if(res.ok){
            res.json()
          }else{
            console.log('Ошибка получения данных с сервера')
          }
        })
        .then(data => this.state.tasks = data)
        .catch((err) => {
          console.log(err);
        })
    },
  },
  modules: {
  }
})
