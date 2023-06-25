<template>
  <div class="modal__background">
    <div class="modal">
      <header>
        <h1>Добавление задачи</h1>
        <button class="close" @click="closeModalAdd"></button>
      </header>
      <form class="form">
        <p>Исполнитель</p>
        <input
          type="text"
          name="perfomer"
          id="perfomer"
          v-model="this.new_perfomer"
        />

        <p>Дата готовности</p>
        <input
          type="date"
          name="dateReady"
          id="dateReady"
          v-model="this.new_date_ready"
        />

        <p>Комментарий</p>
        <input
          class="input__comment"
          type="text"
          name="comment"
          id="comment"
          v-model="this.new_comment"
        />
      </form>
      <footer>
        <button type="submit" @click="createNewTask">Создать задачу</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters, mapActions } from "vuex";
@Options({
  // создаем переменные для отправки запроса
  data() {
    return {
      new_comment: "",
      new_date_ready: "",
      new_perfomer: "",
    };
  },

  computed: mapGetters(["isCloseModalAdd", "isOpenModalAdd"]),
  methods: {
    ...mapMutations(["closeModalAdd"]),
     ...mapActions(["getAllTasks"]),

    /** Cоздаем новую задачу */
    async createNewTask() {
      const data = {
        comment: this.new_comment,
        date_ready: this.new_date_ready,
        perfomer: this.new_perfomer,
      };
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        this.closeModalAdd();
        this.getAllTasks();
      } else {
        console.log("Ошибка получения данных с сервера");
        throw Error;
      }
    }
  },
})
export default class ModalAddTask extends Vue {}
</script>

<style scoped>
.modal {
  position: relative;
  color: #fff;
  border: 1px solid #fff;
  width: 50%;
  height: 53vh;
  text-align: center;
  margin: 30vh auto;
  background: #000;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal__background {
  position: absolute;
  background: #00000090;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-image: url("../assets/close_icon.svg");
}
h1 {
  margin-bottom: 0;
}
footer {
  margin-top: 5%;
}
input{
  width: 33%;
}
.dp__input{
  width: 33%;
}
</style>
