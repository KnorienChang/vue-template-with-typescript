<template>
  <div class="test">
    dis test page
    <br />
    {{hotCities}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetch } from '@/utils/axios';

@Component
export default class Test extends Vue {
  private mounted(): void {
    console.log(Date.now(), 'test');
    this.$store.dispatch('getHotCities', {type: 'hot'});
  }

  get hotCities() {
    console.log(this.$store.getters);
    return this.$store.getters.hotCities || [];
  }
}
</script>
