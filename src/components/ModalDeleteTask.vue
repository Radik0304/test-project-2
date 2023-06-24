<template>
  <div class="modal__background">
    <div class="modal">
      <header>
        <h1>Удаление задачи</h1>
        <button class="close" @click="closeModalDelete"></button>
      </header>
      <div>Вы уверены, что хотите удалить задачу?</div>
      <footer>
        <button @click="createNewTask">Удалить</button>
        <button @click="closeModalDelete">Отменить</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters, mapActions } from "vuex";
@Options({
  computed: mapGetters(["isCloseModalDelete"]),

  methods: {
    ...mapMutations(["closeModalDelete"]),
    ...mapActions(["getAllTasks"]),
  },

  /** Удалить задачу */
  async createNewTask() {
    const res = await fetch("http://localhost:3001/tasks", {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      this.closeModalAdd();
      this.getAllTasks();
      alert("задача создана!");
    } else {
      console.log("Ошибка получения данных с сервера");
      throw Error;
    }
  },
})
export default class ModalDeleteTask extends Vue {}
</script>

<style scoped>
.modal {
  position: relative;
  color: #fff;
  border: 1px solid #fff;
  width: 50%;
  height: 20vh;
  text-align: center;
  margin: 30vh auto;
  background: #000;
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
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
</style>
