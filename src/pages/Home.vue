<template>
  <div class="home">
    <Header />
    <div class="container">
      <button class="button__add-task" @click="goToTaskPage">Добавить задачу</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';

@Options({
  // используемые внешние компоненты
  components: {
    Header,
  },

  // используемые функции
  methods: {
    // Перейти на страницу с задачами
    goToTaskPage(){
      this.$router.push('/add-task')
    }

  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.home{
  position: relative;
  background-color: #000;
  width: 100%;
  height: 100%;
}
.button__add-task{
  width: 50%;
  height: 20vh;

}
.container{
  position: absolute;
  top: 20vh;
  left: 36%;
  width: 50%;
}
</style>
