(function(factory) {
  if (typeof exports === 'object')
    module.exports = factory();
  else
    window.VueDetails = factory();
})(function() {
  return {
    name: 'v-details',
    render: function(h) {
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
      open: function(val) {
        this.updateVal(val);
      }
    },
    props: {
      open: Boolean
    },
    methods: {
      toggle: function(e) {
        this.$emit('change', e.target.open);
      },
      updateVal: function(open) {
        if (open)
          this.$el.setAttribute('open', '');
        else
          this.$el.removeAttribute('open');
      }
    },
    mounted: function() {
      this.updateVal(this.open);
    }
  } 
});
