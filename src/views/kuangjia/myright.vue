<template>
    <div>
        <div>
            <person></person>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index';
    import Person from "../concretepage/p1/Person";

    export default {
        name: "myright",
        data(){
            return{
                num: 1
            }
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.num = store.state.personnum.num;
            },300)

        },
        components: {
            'person': Person
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