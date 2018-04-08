<template>
    <div class="comput">
        <p>
            <button @click="middleLss">-</button>
        </p>
        <p>
            <input type="text" disabled v-model="coun">
        </p>
        <p>
            <button @click="middleAdd">+</button>
        </p>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState({
            coun (state) {
                return state.count;
            }
        })
    },
    methods: {
        ...mapActions(['jia_S']), // 调运加方法
        ...mapActions(['jia_J']), // 调运减方法
        middleAdd () {
            this.jia_S(this);
        },
        middleLss () {
            this.jia_J(this);
        }
    }
};
</script>
<style>
.comput {
    display: flex;
    align-items: center;
    justify-content: center;
}
.comput input {
    width: 120px;
    font-weight: bolder;
    text-align: center;
}
</style>

