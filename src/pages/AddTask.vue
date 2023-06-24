<template>
  <div class="task__list-container">
    <Header />
    <h1>Добавить задачу</h1>

    <table class="task__list">
      <thead>
        <th>Номер задачи</th>
        <th>Исполнитель</th>
        <th>Дата создания</th>
        <th>Дата готовности</th>
        <th>Комментарий к задаче</th>
        <th>Действие</th>
      </thead>
      <tbody v-for="task in allTasks" :key="task.id">
        <tr>
          <td>{{ task.id }}</td>
          <td>{{ task.perfomer }}</td>
          <td>{{ task.create_date }}</td>
          <td>{{ task.date_ready }}</td>
          <td class="comment">{{ task.comment }}</td>
          <td><button @click="openModalDelete">Удалить задачу</button></td>
        </tr>
      </tbody>
    </table>
    <div class="add-task__button">
      <button @click="openModalAdd">Добавить задачу</button>
    </div>
    <ModalAddTask v-if="isOpenModalAdd"/>
    <ModalDeleteTask v-if="isOpenModalDelete" />
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
    ModalDeleteTask
  },

  computed: mapGetters(["allTasks", "isOpenModalAdd", "isOpenModalDelete"]),

  methods: {
    ...mapActions(["getAllTasks"]),
    ...mapMutations(["openModalAdd", "openModalDelete"]),
  },

  async mounted() {
    this.getAllTasks();
  },
})
export default class Home extends Vue {}
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
table{
  text-align: center;
  border: 1px solid #fff;
  border-collapse: collapse;
  position: relative;
}
td{
  border: 1px solid #fff;
}
.comment{
  max-width: 30%;
}

.add-task__button{
  margin-top: 20px;
  margin-right: 0;
}
</style>
