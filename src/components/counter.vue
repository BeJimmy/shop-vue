<template>
    <div class="counter-component">
        <div class="counter-btn" @click="minus"> - </div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="fixNumber">
        </div>
        <div class="counter-btn" @click="add">+</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                number:1,
                theMax:50,
                theMin:1
            }
        },
        methods:{
            minus(){
                if(this.number<=this.theMin){
                    return
                }
                this.number--;
            },
            add(){
                if(this.number>=this.theMax){
                    return
                }
                this.number++;
            },
            fixNumber(){

                if (this.number==''){
                    this.number=''
                }else if (this.number>this.theMax){
                    this.number=this.theMax
                }else if (this.number<this.theMin){
                    this.number=this.theMin
                }
            }

        },
//        computed:{
//            sendMes:function(){
//                console.log(this.number);
//                return  this.number
//            }
//        }
        watch:{
            number:function () {
                this.$emit('on-change', this.number)
            }
        }

    }
</script>

<style scoped>
    .counter-component {
        position: relative;
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
    }
    .counter-show {
        float: left;
    }
    .counter-show input {
        border: none;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        height: 23px;
        line-height: 23px;
        width: 30px;
        outline: none;
        text-indent: 6px;
    }
    .counter-btn {
        border: 1px solid #e3e3e3;
        float: left;
        height: 25px;
        line-height: 25px;
        width: 25px;
        text-align: center;
        cursor: pointer;
    }
    .counter-btn:hover {
        border-color: #4fc08d;
        background: #4fc08d;
        color: #fff;
    }

</style>
