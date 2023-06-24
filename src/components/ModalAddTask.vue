<template>
  <div class="modal__background">
    <div class="modal">
      <header>
        <h1>Добавление задачи</h1>
        <button class="close" @click="closeModalAdd"></button>
      </header>
      <div class="form">
        <p>Исполнитель</p>
        <input type="text" name="perfomer" id="perfomer" />

        <p>Дата готовности</p>
        <input type="text" name="dateReady" id="dateReady" />

        <p>Комментарий</p>
        <input type="text" name="comment" id="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters } from "vuex";
@Options({
    computed: mapGetters(["isCloseModalAdd"]),
    methods: {
        ...mapMutations(["closeModalAdd"])
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
  text-align: center;
  margin: 30vh auto;
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
.close{
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background-image: url('../assets/close_icon.svg');
}
</style>
