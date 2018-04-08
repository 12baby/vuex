<template>
    <div class="wrap">
        <shopcom></shopcom>
        <shopsum></shopsum>
    </div>
</template>
<script>
import shopcom from './shopcomput/shopcom';
import shopsum from './shopsum/shopsum';
export default {
    components: {
        shopcom,
        shopsum
    }
};
</script>
