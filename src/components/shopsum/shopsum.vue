<template>
    <div class="shopsum">
        <p>
            合计：<b>{{sum}}</b>
        </p>
        <p>
            总价：<b>{{price * sum}}</b>
        </p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            price (state) {
                return typeof state.obj.price === 'undefined' ? 0 : state.obj.price;
            },
            sum (state) {
                return state.count;
            }
        })
    }
};
</script>
<style>
.shopsum {
    height: 40px;
    background: #eee;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
}
</style>
