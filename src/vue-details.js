export default {
  name: 'v-details',
  render(h) {
    return h('details', {
      on: {
        toggle: this.toggle
      }
    }, this.$slots.default);
  },
  model: {
    prop: 'open',
    event: 'change'
  },
  watch: {
    open(val) {
      this.updateVal(val);
    }
  },
  props: {
    open: Boolean
  },
  methods: {
    toggle(e) {
      this.$emit('change', e.target.open);
    },
    updateVal(open) {
      if (open)
        this.$el.setAttribute('open', '');
      else
        this.$el.removeAttribute('open');
    }
  },
  mounted() {
    this.updateVal(this.open);
  }
}
