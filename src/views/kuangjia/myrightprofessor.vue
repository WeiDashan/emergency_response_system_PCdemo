<template>
    <div>
        <div>
            <professor10></professor10>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index';
    import professor10 from "../concretepage/professor/professor10";
    export default {
        name: "myrightprofessor",
        data(){
            return{
                num: 10
            }
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.num = store.state.personnum.num;
            },300)

        },
        components: {
            'professor10': professor10
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