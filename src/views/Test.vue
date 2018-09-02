<template>
  <div class="test">
    dis test page
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Test extends Vue {
  private mounted(): void {
    console.log(Date.now(), 'test');
  }
}
</script>
