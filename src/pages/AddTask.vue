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
      </thead>
      <tbody v-for="task in allTasks" :key="task.id">
        <tr>
          <td>{{ task.id }}</td>
          <td>{{ task.perfomer }}</td>
          <td>{{ task.create_date }}</td>
          <td>{{ task.date_ready }}</td>
          <td>{{ task.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/Header.vue";
@Options({
  components: {
    Header,
  },

  computed: mapGetters(["allTasks"]),
  methods: mapActions(["getAllTasks"]),
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
}
td{
  max-width: 20%;
}
</style>
