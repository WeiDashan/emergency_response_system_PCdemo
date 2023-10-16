<template>
    <div class="shenpiHOME">
        <div class="shenpiHOME_TOP">
            <shenpiTOP></shenpiTOP>
        </div>
        <div class="shenpiHOME_MID" v-show="active==0">
            <shenpiMID></shenpiMID>
        </div>
        <div class="shenpiHOME_MID" v-show="active==1">
            <shenpiMID2></shenpiMID2>
        </div>
        <div class="shenpiHOME_MID" v-show="active==2">
            <shenpiMID3></shenpiMID3>
        </div>
        <div  class="shenpiHOME_BOTTOM">
            <shenpiBOTTOM></shenpiBOTTOM>
        </div>
    </div>
</template>

<script>
    import store from "../../store";
    import shenpiBOTTOM from "./shenpiBOTTOM";
    import shenpiMID from "./shenpiMID";
    import shenpiTOP from "./shenpiTOP";
    import shenpiMID2 from "./shenpiMID2";
    import shenpiMID3 from "./shenpiMID3";

    export default {
        name: "shenpiHome.vue",
        data(){
            return{
                active:0
            };
        },
        components:{
            "shenpiBOTTOM": shenpiBOTTOM,
            "shenpiMID": shenpiMID,
            "shenpiTOP": shenpiTOP,
            "shenpiMID2": shenpiMID2,
            "shenpiMID3": shenpiMID3,
        },
        created() {
            store.state.shenpistep.stepnnum=0;
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.active = store.state.shenpistep.stepnnum;
            },300)

        }

    }
</script>

<style scoped>
    .shenpiHOME{
        position: absolute;
        background-color: #FAFAFA;
        height: 100%;
        width: 100%;
    }
    .shenpiHOME_TOP{
        height: 15%;
    }
    .shenpiHOME_MID{
        height: 70%;
    }
    .shenpiHOME_BOTTOM{
        height: 15%;
    }
</style>