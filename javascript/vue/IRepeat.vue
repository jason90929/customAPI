<template>
  <ul class="i-repeat">
    <li
      class="i-repeat-li"
      v-for="name in model"
      v-show="$slots[name]"
      :class="liClass">
      <slot :name="name"></slot>
    </li>
    <slot name="liExtend"></slot>
  </ul>
</template>

<script>
export default {
  name: 'IRepeat',
  props: {
    liClass: {
      type: String,
      default () {
        return ''
      }
    },
    model: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~css/extends.styl'
@import '~css/variables.styl'

.i-repeat-li {
  display: flex
  align-items: center
}
</style>

<!-- 
// work with i-repeat
filterHiddenItem (array = []) {
  return array.map(item => item.name).filter(item => !item.hidden)
},

<i-repeat :model="filterHiddenItem(markerEditorButtons, 'name')">
  <button
    v-for="item in markerEditorButtons"
    :slot="item.name"
    class="i-repeat-a"
    :disabled="item.disabled"
    :class="{
      'icon-disabled': item.disabled,
      'i-repeat-a-active': item.isActive,
      'has-border': item.hasBorder
    }"
    @click.prevent="item.method">
    <icon
      class="pano-icon"
      :class="[{ 'pano-icon-active': item.isActive }, item.className]"
      :hasLazyload="false">
    </icon>
    <span class="marker-editor-tooltip">
      {{ item.caption }}
    </span>
  </button>
</i-repeat>

markerEditorButtons () {
  return [{
    name: 'point',
    caption: this.$t('MarkerPoint'),
    className: 'nav-icon-point',
    isActive: this.currentMarker.type === 'point',
    disabled: isEmpty(this.currentPanorama),
    method: () => {
      this.closeAllModes()
      this.handleAddMarker('point')
    }
  }, {
    name: 'tag',
    caption: this.$t('MarkerTag'),
    className: 'nav-icon-tag',
    isActive: this.currentMarker.type === 'tag',
    disabled: isEmpty(this.currentPanorama),
    method: () => {
      this.closeAllModes()
      this.handleAddMarker('tag')
    }
  }]
}
 -->