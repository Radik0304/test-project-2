<template>
  <div class="task__list-container">
    <Header />
    <h1>Добавить задачу</h1>

    <div class="task__list">тут будет список задач</div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import { taskStore } from "../store";
@Options({
  components: {
    Header,
  },

  methods: {
     async getTaskList() {
      await fetch("http://localhost:3001/tasks")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
          console.log(err);
        })
    },
  },

  mounted() {
    this.getTaskList();
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
</style>
