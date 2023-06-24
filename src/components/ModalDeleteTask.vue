<template>
  <div>
    <h1>Удаление задачи</h1>
        <p>Уверены, что хотите удалить задачу?</p>
        <div>
            <button>Да</button>
            <button>Отмена</button>
        </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
export default class ModalDeleteTask extends Vue {}
</script>

<style scoped>

</style>
