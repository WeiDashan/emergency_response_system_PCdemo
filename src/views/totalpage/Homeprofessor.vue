<template>
    <div class="home_top1">
        <div>
            <myhead></myhead>
        </div>
        <div class="home_down">
            <div class="home_down_left">
                <myleft></myleft>
                <div class="home_down_left_move" @click="homeleftmove" @mouseenter="homeleftmovemouse=1" @mouseleave="homeleftmovemouse=0">
                    <!--                    <img :src="homeleftmovemouse==0?homeimage.move:homeimage.movewhite">-->
                    <div class="shouqi">
                        <div class="shouqi_div">
                            <img :src="myimage.youjiantou">
                        </div>
                    </div>
                </div>
            </div>
            <div class="home_down_right">
                <myright></myright>
            </div>
        </div>
    </div>

</template>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    .home_top1{
        height: 100%;
        width: 100%;
        position: absolute;
    }
    .home_down{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: calc(100% - 60px);
        position: relative;
    }
    .home_down_left{
        /*border-top: #ffffff 1px solid;*/
        width: 15%;
        box-sizing: border-box;
        height: 100%;
        min-width: 160px;
        position: relative;
        transition: all .3s;
        z-index: 4;
    }
    .home_down_right{
        width: 100%;
        height: 100%;
        position: relative;
    }
    /*.home_down_left_move{*/
    /*    position: absolute;*/
    /*    width: 20px;*/
    /*    height: 50px;*/
    /*    background-color: pink;*/

    /*    !*border-radius: 30%;*!*/
    /*    right: -20px;*/
    /*    top: 50%;*/
    /*    transform: translateY(-50%);*/
    /*    !*border-radius: ;*!*/
    /*    transition: all .3s;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    !*border-top-right-radius: 4px;*!*/
    /*    !*border-bottom-right-radius: 4px;*!*/
    /*}*/
    .shouqi{
        /*width: 16px;*/
        width: 16px;
        height: 16px;
        /*word-wrap: break-word;*/
        /*color: white;*/
        /*line-height: 26px;*/
        padding: 0;
        margin: 0;
        /*transition: all .3s;*/
        /*background-color: pink;*/
    }
    .home_down_left_move:hover{
        cursor: pointer;
    }
    /*.home_down_left_move:hover div{*/
    /*    font-size: 18px;*/
    /*}*/
    .shouqi_div{
        /*background-color: coral;*/
        display: flex;
        /*text-align: center;*/
        /*align-items: center;*/
        width: 100%;
        height: 100%;
    }
    .shouqi_div img{
        /*background-color: red;*/
        width: 100%;
        height: 100%;
    }
</style>


<script>

    import myhead from "../kuangjia/myhead";
    // import myleft from "../kuangjia/myleft";
    // import myright from "../kuangjia/myright";
    import myleft from "../kuangjia/myprofessorleft";
    import myright from "../kuangjia/myrightprofessor";
    import store from "../../store";
    export default {

        data(){
            return{
                homeleftmovenum: 0,
                homeleftmovemouse: 0,
                homeleftmovestr: "收起",
                myimage:{
                    youjiantou: require("../../image/rightjiantou.png")
                }
            }
        },

        created() {
            store.state.personnum.num = 10;
        },
        methods:{
            homeleftmove(){
                this.homeleftmovenum = (this.homeleftmovenum+1)%2;
                var that = this;
                var homeleft = document.getElementsByClassName("home_down_left");
                if (this.homeleftmovenum==1){
                    homeleft[0].style.width="0";
                    homeleft[0].style.minWidth="0";
                    that.homeleftmovestr = "展开";
                }else {
                    homeleft[0].style.minWidth="160px";
                    homeleft[0].style.width="15%";
                    that.homeleftmovestr = "收起";
                }
            }
        },
        mounted() {

        },
        components: {
            'myhead': myhead,  //myhead 变成 组件 myhead
            'myleft': myleft,
            'myright': myright
        }

    }
</script>