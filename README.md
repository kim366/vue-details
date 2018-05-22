# Vue Details

Proper support for `<details>` tag in Vue.js including `v-model` attribute.

## Get Started

Install with
```
npm install vue-details
```

Initialize globally using
```js
import Vue from 'vue';
import VueDetails from 'vue-details';

Vue.component('v-details', VueDetails);
```

or locally as shown in the example below.

## An Example

### Try it Online
- [JS Fiddle](https://jsfiddle.net/rest_easy/w06e7mng/1/)
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
