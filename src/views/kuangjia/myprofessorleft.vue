<template>
    <div class="myleft1">
        <div class="myleft_onerow selected" @click="clickitem(10)">
            <div class="myleft_onerowplus">
                <div class="myleft_onerow_left">
                    <img :src="myimage.guanli">
                </div>
                <div class="myleft_onerow_right">接报管理</div>
            </div>
        </div>
<!--        <div style="border-top: #ffffff 1px solid;margin: 10px 0"></div>-->
    </div>
</template>

<script>

    import store from "../../store";

    export default {
        name: "myprofessorleft",
        data(){
            return{
                myimage:{
                    guanli: require("../../image/guanli.png")
                }
            }
        },
        methods:{
            clickitem(e){
                var items = document.getElementsByClassName("myleft_onerow");
                if (!(items[e-10].className==="myleft_onerow selected")){
                    var item = document.getElementsByClassName("selected");
                    item[0].className = "myleft_onerow";
                    items[e-10].className = "myleft_onerow selected";
                    store.state.personnum.num = e;
                    console.log(store.state.personnum.num);
                }
            }
        }
    }
</script>

<style scoped>
    .myleft1{
        background-color: #303a4a;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .myleft_onerow{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #303a4a;
        color: white;
        display: flex;
        flex-direction: row;
        transition: all .3s;
        padding: 4px 0;
        margin-bottom: 4px;
        font-size: 14px;
    }
    .myleft_onerow:hover{
        background-color: #1c242e;
        font-size: 15px;
        /*font-weight: bolder;*/
        cursor: pointer;
    }
    .myleft_onerowplus{
        width: 160px;
        height: 40px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /*background-color: pink;*/
    }
    .myleft_onerow_left{
        width: 22px;
        height: 22px;
        /*background-color: purple;*/
        /*overflow: hidden;*/
        display: flex;
    }
    .myleft_onerow_left img{
        width: 100%;
        height: 100%;
    }
    .myleft_onerow_right{
        height: 30px;
        line-height: 30px;
        width: 100px;
        min-width: 100px;
        text-align: center;
        overflow: hidden;
        /*background-color: coral;*/
    }
    .selected{
        background-color: #1c242e;
        color: #5b9cf8;
    }
</style>