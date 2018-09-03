<template>
  <div class="test">
    dis test page
    <br />
    <!--{{hotCities}}-->
    <ul>
      <template v-for="item in hotCities">
        <li :key="item.id">
          地址：<label>{{item.name}}</label>
        </li>
      </template>
    </ul>
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
    return this.$store.getters.hotCities;
  }
}
</script>

<style lang="scss">
  ul, li {
    list-style: none;
  }
</style>
