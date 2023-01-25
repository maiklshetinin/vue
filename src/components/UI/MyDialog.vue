<template>
  <div class="dialog" v-if="show">
    <div class="dialog__content">
<slot></slot>
    </div>
  </div>
</template>

<script>
import { slotFlagsText } from '@vue/shared';

export default {
    name: "my-dialog",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    components: { slotFlagsText }
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom:0;
  right: 0;
  left: 0;
  background: ;
}

</style>