<template>
  <div class="modal__background">
    <div class="modal">
      <header>
        <h1 v-if="isOpenModalDelete">Удаление задачи</h1>
        <h1 v-else>Редактирование задачи</h1>
        <button class="close" v-if="isOpenModalDelete" @click="closeModalDelete"></button>
        <button class="close"  v-else @click="closeModalUpdate"></button>
      </header>
      <div v-if="isOpenModalDelete">Вы уверены, что хотите удалить задачу?</div>
      <div v-else class="form">
        <p>Исполнитель</p>
        <input
          type="text"
          name="perfomer"
          id="perfomer"
          :value="perfomer"
          @input="updatePerfomer"

        />

        <p>Дата готовности</p>
        <input
          type="date"
          name="dateReady"
          id="dateReady"
          :value="dateReady"
          @input="updateDate"
        />

        <p>Комментарий</p>
        <input
          type="text"
          name="comment"
          id="comment"
          :value="comment"
          @input="updateComment"
        />
      </div>
      <footer v-if="isOpenModalDelete">
        <button @click="deleteTask(idTask)">Удалить</button>
        <button @click="closeModalDelete">Отменить</button>
      </footer>

      <footer v-else>
         <button  @click="updateTask(idTask)">Применить изменения</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters, mapActions } from "vuex";
@Options({
  props: ['taskData'],

  // создаем переменные для отправки запроса
  data() {
    return {
      updated_comment: "",
      updated_date_ready: "",
      updated_perfomer: "",

      // флаги изменения информации в инпутах
      is_update_comment: false,
      is_update_date: false,
      is_update_perfomer: false
    };
  },

  // Забираем данные из VUEX
  computed: mapGetters(
    ["isCloseModalDelete",
      "isCloseModalUpdate", 
      "isOpenModalDelete",
      "perfomer",
      "dateReady",
      "comment",
      "idTask"
    ]
    ),

  methods: {
    // Забираем мутации и экшены
    ...mapMutations(["closeModalDelete", "closeModalUpdate"]),
    ...mapActions(["getAllTasks"]),

    //Обновляем содержимое инпутов
    updateComment(e){
      this.is_update_comment = true;
      this.updated_comment = e.target.value;
    },

    updateDate(e){
      this.is_update_date = true;
      console.log('ddddd')
      this.updated_date_ready = e.target.value;
    },

    updatePerfomer(e){
      this.is_update_perfomer = true;
      this.updated_perfomer = e.target.value;
    },
    
    /** Удалить задачу */
    async deleteTask(id) {
      const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        this.closeModalDelete();
        this.getAllTasks();
      } else {
        console.log("Ошибка получения данных с сервера");
        throw Error;
      }
    },

    /** Отредактировать задачу */
    async updateTask(id) {
      let updatedDataOfTask = {
        comment: this.is_update_comment? this.updated_comment : this.comment,
        date_ready: this.is_update_date? this.updated_date_ready : this.dateReady,
        perfomer: this.is_update_perfomer? this.updated_perfomer : this.perfomer,
      }

      const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDataOfTask),
      });
      if (res.ok) {
        this.closeModalUpdate();
        this.getAllTasks();
      } else {
        console.log("Ошибка получения данных с сервера");
        throw Error;
      }
    },
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
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
