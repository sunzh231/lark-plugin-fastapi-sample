<template>
  <div>
    1231312312
    <button @click="addRow">test</button>
  </div>
</template>

<script setup>
import { bitable } from '@lark-base-open/js-sdk';
// import axios from 'axios';
// const data = ref(null);

const addRow = async () => {
  const table = await bitable.base.getActiveTable();

  const field = await table.getField('文本');

  const res = await table.addRecord({
    fields: {
      [field.id]: 'new text field value'
    }
  });
}
// const testApi = async () => {
//   const res = await axios.post('https://recstar-api.birdycloud.com/api/public/quote/list', {page: 1, limit: 10})
//   console.log(res)
//   data.value = res.data
// }

// testApi()
</script>


<style scoped></style>