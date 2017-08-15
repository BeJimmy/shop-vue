<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in uJob"
                :class="{active:indexWatch(index)}"
                @click="toggleSelection(index)"
                >
                {{item.label}}
            </li>
        </ul>
    </div>
    </div>
</template>

<script>

    export default {
        props:['uJob'],
        data(){
            return{
                nowIndex:[0]
            }
        },
        methods:{
            toggleSelection (index){
                if(this.nowIndex.indexOf(index) == -1){
                    this.nowIndex.push(index);
                }else {
                    let wz=this.nowIndex.indexOf(index);
                    this.nowIndex.splice(wz,1);
                }
                this.$emit('on-change', nowObjArray);
            },
            indexWatch(i){
                return this.nowIndex.indexOf(i) != -1
            }
        }
    }
</script>

<style scoped>
    .chooser-component {
        position: relative;
        display: inline-block;
    }
    .chooser-list li{
        display: inline-block;
        border: 1px solid #e3e3e3;
        height: 25px;
        line-height: 25px;
        padding: 0 8px;
        margin-right: 5px;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
    }
    .chooser-list li.active {
        border-color: #4fc08d;
        background: #4fc08d;
        color: #fff;
    }
</style>
