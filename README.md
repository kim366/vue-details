[![npm version](https://badge.fury.io/js/vue-details.svg)](https://www.npmjs.com/package/vue-details)

# Vue Details for Vue 2

Proper support for `<details>` tag in Vue.js including `v-model` attribute.

## Get Started

### Using Node.js

Install package
```
npm install vue-details
```

Initialize globally
```js
import Vue from 'vue';
import VueDetails from 'vue-details';

Vue.component('v-details', VueDetails);
```

or locally as shown in the example below.

### Using CDN

Load script

```html
<script src="https://cdn.jsdelivr.net/npm/vue-details"></script>
```

or

```html
<script src="https://unpkg.com/vue-details/dist/vue-details.min.js"></script>
```

Register component

```js
Vue.component('v-details', VueDetails);
```

## An Example

### Try it Online
- [Codepen](https://codepen.io/kim366/pen/OZGLVY)

### Code in a `.vue` File

```vue
<template>
  <v-details v-model="open">
    <summary>
      Content is {{ open ? 'shown' : 'hidden' }}
    </summary>
    <p>
      Expandable content
    </p>
  </v-details>
</template>

<script>
import VueDetails from 'vue-details';

export default {
  data() {
    return {
      open: true
    }
  },
  components: { 'v-details': VueDetails }
}
</script>
```
