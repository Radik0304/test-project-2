import { createStore as taskStore } from 'vuex'

export default taskStore({
  state: {
    tasks: [],
  },

  getters: {
    allTasks(state) {
      return state.tasks
    }
  },

  mutations: {
    updateTasks(state, data){
      state.tasks = data
    }
  },

  actions: {
    async getAllTasks(context) {
      const res = await fetch('http://localhost:3001/tasks')
      const tasks = await res.json()
      context.commit('updateTasks', tasks)
    }
  },

})
