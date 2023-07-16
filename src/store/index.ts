import { createStore as taskStore } from 'vuex'

export default taskStore({
  state: {
    tasks: [], // список задач
    id_task: 0, //id выбранной заявки
    perfomer: '', // исполнитель выбранной заявки
    date_ready: '', // дата готовности выбранной заявки
    comment: '', // комментарий к выбранной заявке
    is_open_modal_add: false, // флаг открытия модалки добавления
    is_open_modal_delete: false, // флаг открытия модалки удаления
    is_open_modal_update: false, // флаг открытия модалки редактирования
  },

  getters: {
    // СОСТОЯНИЯ
    allTasks(state) {
      return state.tasks
    },
    idTask(state){
      return state.id_task
    },
    perfomer(state){
      return state.perfomer
    },
    dateReady(state){
      return state.date_ready
    },
    comment(state){
      return state.comment
    },

    // ФЛАГИ
    isOpenModalAdd(state){
      return state.is_open_modal_add
    },
    isOpenModalDelete(state){
      return state.is_open_modal_delete
    },
    isOpenModalUpdate(state){
      return state.is_open_modal_update
    }
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
    openModalDelete(state, data){
      state.id_task = data.id;
      console.log(state.id_task)
      state.is_open_modal_delete = true;
    },
    /** Закрыть модалку подтверждения удаления */
    closeModalDelete(state){
      state.is_open_modal_delete = false;
    },
    //** Открыть модалку редактирования */
    openModalUpdate(state, data){
      state.id_task = data.id;
      state.comment = data.comment;
      state.date_ready = data.date_ready;
      state.perfomer = data.perfomer
      state.is_open_modal_update = true;
    },
    /** Закрыть модалку редактирования */
    closeModalUpdate(state){
      state.is_open_modal_update = false;
    },
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
