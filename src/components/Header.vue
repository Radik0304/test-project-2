<template>
  <div class="header__container">
    <a href="https://vk.com/schecter28" target="_blank">Мой вк</a>
    <a href="https://samara.hh.ru/resume/151006ccff09d21a7d0039ed1f677364583453" target="_blank">Мое резюме</a>
    <a href="https://vk.com/martaprell" target="_blank">Мое хобби</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__container{
  background-color: #000;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
a{
  color: #fff;
  text-decoration: none;
}
</style>
