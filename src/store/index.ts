import { createStore as taskStore } from 'vuex'

export default taskStore({
  state: {
    tasks: [], // список задач
    is_open_modal_add: false, // флаг открытия модалки добавления
    is_open_modal_delete: false, // флаг открытия модалки удаления 
  },

  getters: {
    allTasks(state) {
      return state.tasks
    },
    isOpenModalAdd(state){
      return state.is_open_modal_add
    },
    isOpenModalDelete(state){
      return state.is_open_modal_delete
    },
  },

  mutations: {
    /** Мутируем задачи */
    updateTasks(state, data){ 
      state.tasks = data
    },
    /** Открыть модалку добавления задачи */
    openModalAdd(state){
      state.is_open_modal_add = true;
    },
    /** Закрыть модалку добавления задачи */
    closeModalAdd(state){
      state.is_open_modal_add = false;
    },
    /** Открыть модалку подтверждения удаления */
    openModalDelete(state){
      state.is_open_modal_delete = true;
    },
    /** Закрыть модалку подтверждения удаления */
    closeModalDelete(state){
      state.is_open_modal_delete = false;
    }
  },

  actions: {
    /** Получаем список задач */
    async getAllTasks(context) {
      const res = await fetch('http://localhost:3001/tasks')
      const tasks = await res.json()
      if(res.ok){
        context.commit('updateTasks', tasks)
      } else {
        console.log('Ошибка получения данных с сервера')
        throw Error
      }
    },
  },

})
