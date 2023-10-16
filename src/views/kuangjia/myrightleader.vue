<template>
    <div>
        <div v-show="num==8">
            <leader8></leader8>
        </div>
<!--        <div v-show="num==9">-->
<!--            <leader9></leader9>-->
<!--        </div>-->
        <div v-show="num==9">
            <shenpiHome></shenpiHome>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index';
    import leader8 from "../concretepage/leader/leader8";
    import leader9 from "../concretepage/leader/leader9";
    import shenpiHome from "../shenpi/shenpiHome";
    export default {
        name: "myright",
        data(){
            return{
                num: 8
            }
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.num = store.state.personnum.num;
            },300)
        },
        components: {
            'leader8': leader8,
            // 'leader9': leader9,
            'shenpiHome': shenpiHome,
        }
    }
</script>

<style scoped>
    div{
        background-color: white;
        width: 100%;
        height: 100%;
    }
</style>