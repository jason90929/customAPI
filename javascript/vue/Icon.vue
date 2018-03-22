<template>
  <span
    ref="icon"
    class="icon"
    :class="{ 'photo-lazyload': hasLazyload }"
    :style="{ backgroundImage }"
    :data-src="dataSrc">
    <slot></slot>
  </span>
</template>

<script>
import { loadImage } from '~js/utils'

export default {
  name: 'Icon',
  props: {
    hasLazyload: {
      type: Boolean,
      default () {
        return false
      }
    },
    image: {
      type: String,
      default () {
        return ''
      }
    }
  },

  data () {
    return {
      backgroundImage: undefined,
      dataSrc: undefined
    }
  },

  mounted () {
    this.loadImage()
  },

  methods: {
    loadImage () {
      if (!this.image) {
        this.backgroundImage = undefined
        this.dataSrc = undefined
        return
      }
      this.dataSrc = this.image
      loadImage(this.image, () => {
        // don't use base64 file here or IE will not work
        this.backgroundImage = `url('${this.image}')`
        this.dataSrc = undefined
      }, () => {}, () => {
        this.backgroundImage = undefined
        this.dataSrc = undefined
      })
    }
  },

  watch: {
    image: {
      handler () {
        this.loadImage()
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.photo-lazyload {
  position: relative

  &::before {
    position: absolute
    width: 100%
    height: 100%
    top: 0
    right: 0
    bottom: 0
    left: 0
    content: ''
    background-color: #efefef
    z-index: 1
    opacity: 0
    pointer-events: none
    transition: opacity .25s ease-out
  }

  &[data-src] {
    &::before {
      opacity: 1
    }
  }
}

.icon {
  background-repeat: no-repeat
  background-position: center center
  display: inline-flex
}
</style>
