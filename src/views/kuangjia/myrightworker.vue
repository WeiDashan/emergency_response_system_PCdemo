<template>
    <div>
        <div v-show="num==2">
            <worker2></worker2>
        </div>
        <div v-show="num==3">
            <worker3></worker3>
        </div>
        <div v-show="num==4">
            <worker4></worker4>
        </div>
        <div v-show="num==5">
            <worker5></worker5>
        </div>
        <div v-show="num==6">
            <worker6></worker6>
        </div>
        <div v-show="num==7">
            <worker7></worker7>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index';
    import worker2 from "../concretepage/worker/worker2";
    import worker3 from "../concretepage/worker/worker3";
    import worker4 from "../concretepage/worker/worker4";
    import worker5 from "../concretepage/worker/worker5";
    import worker6 from "../concretepage/worker/worker6";
    import worker7 from "../concretepage/worker/worker7";
    export default {
        name: "myright",
        data(){
            return{
                num: 2
            }
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.num = store.state.personnum.num;
            },300)

        },
        components: {
            'worker2': worker2,
            'worker3': worker3,
            'worker4': worker4,
            'worker5': worker5,
            'worker6': worker6,
            'worker7': worker7
        }
    }
</script>

<style scoped>
    div{
        background-color: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>