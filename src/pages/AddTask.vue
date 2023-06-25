<template>
  <div class="task__list-container">
    <Header />
    <header>
      <button type="submit" class="button__back" @click="goOnMainPage">Вернуться на главную</button>
      <h1>Добавить задачу</h1>
    </header>

    <table class="task__list">
      <thead>
        <th>Номер задачи</th>
        <th>Исполнитель</th>
        <th>Дата готовности</th>
        <th>Комментарий к задаче</th>
        <th>Действие</th>
      </thead>
      <tbody v-for="task in allTasks" :key="task.id">
        <tr>
          <td class="task_id">{{ task.id }}</td>
          <td>{{ task.perfomer }}</td>
          <td>{{ task.date_ready }}</td>
          <td class="comment">{{ task.comment }}</td>
          <td class="actions">
            <button @click="openModalUpdate(task)">Редактировать задачу</button>
            <button @click="openModalDelete(task)">Удалить задачу</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="add-task__button">
      <button @click="openModalAdd">Добавить задачу</button>
    </div>
    <ModalDeleteTask
      :taskData="idTask"
      v-if="isOpenModalDelete || isOpenModalUpdate"
    />
    <ModalAddTask v-if="isOpenModalAdd" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import ModalAddTask from "@/components/ModalAddTask.vue";
import ModalDeleteTask from "@/components/ModalDeleteTask.vue";
@Options({
  components: {
    Header,
    ModalAddTask,
    ModalDeleteTask,
  },

  computed: mapGetters([
    "allTasks",
    "idTask",
    "isOpenModalAdd",
    "isOpenModalDelete",
    "isOpenModalUpdate",
  ]),

  methods: {
    ...mapActions(["getAllTasks"]),
    ...mapMutations(["openModalAdd", "openModalDelete", "openModalUpdate"]),

    /** Вернуться на главную */
    goOnMainPage() {
      console.log('fucks')
      this.$router.replace();
    },
  },

  async mounted() {
    this.getAllTasks();
  },
})
export default class AddTask extends Vue {}
</script>

<style scoped>
.task__list-container {
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: #fff;
}

.task__list {
  color: #fff;
  width: 100%;
}
thead {
  width: 100%;
}
table {
  text-align: center;
  border: 1px solid #fff;
  border-collapse: collapse;
  position: relative;
}
td {
  border: 1px solid #fff;
}
.comment {
  max-width: 30%;
}

.add-task__button {
  margin-top: 20px;
  margin-right: 0;
}
thead {
  border: 1px solid #fff;
}
.task_id {
  width: 7%;
}
.actions {
  display: flex;
  justify-content: space-around;
}
header {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.button__back {
  position: absolute;
  left: 10px;
}
</style>
