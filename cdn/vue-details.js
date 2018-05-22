var VueDetails = {
  template: `
    <details @toggle="toggle">
      <slot />
    </details>
  `,
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
      this.open = e.target.open;
      this.$emit('change', this.open);
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
};
