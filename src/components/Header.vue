<template>
  <div class="header__container">
    <a href="#">Мой вк</a>
    <a href="#">Мое резюме</a>
    <a href="#">Мое хобби</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Header extends Vue {
  msg!: string
}
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
}
</style>
