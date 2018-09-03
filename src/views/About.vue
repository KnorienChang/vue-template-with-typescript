<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private msg: string = 'This is an about page';

  private mounted(): void {
    console.log(Date.now(), 'about');
  }
}
</script>
