import Vue from 'vue'
export default Vue.extend({
  props: {
    markdown: { type: Object, default: undefined }
  },

  watch: {
    markdown(value) {
      this.$options.staticRenderFns = value.staticRenderFns
    }
  },

  render(createElement) {
    console.log(this.markdown)
    return this.markdown && this.markdown.render
      ? this.markdown.render()
      : createElement('div')
  }
})
