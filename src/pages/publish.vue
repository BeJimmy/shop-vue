<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>广告发布</h2>
            <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    行业：
                </div>
                <div class="sales-board-line-right">
                    <v-chooser :uJob="tradeList" @on-change="onParamChange('buyType',$event)"></v-chooser>
                    <!--<vm-chooser :uJob="tradeList"></vm-chooser>-->
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品版本：
                </div>
                <div class="sales-board-line-right">
                    <v-selection :uLevel='versionList' @on-change="onParamChange('buyLv',$event)"></v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    半年
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    500 元
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="button" @click="showPayDialog">
                        立即购买
                    </div>
                </div>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

            <table class="sales-board-table">
                <tbody>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>安全安保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>办公文教</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>彩票</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>车辆物流</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>成人用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>出版传媒</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>电脑硬件</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>电子电工</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>房地产建筑装修</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>分类平台</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>服装鞋帽</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>箱包饰品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>化工原料制品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>机械设备</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>家庭日用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>家用电器</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>教育培训</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>节能环保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>金融服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>礼品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>旅游住宿</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>美容化妆</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>母婴护理</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>农林牧渔</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>软件</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>商务服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>生活服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>食品保健品</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>手机数码</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>通讯服务设备</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>网络服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>医疗服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>游戏</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>运动休闲娱乐</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>招商加盟</label>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <my-dialog :isShow='isShowPayDialog' @closedialog="hidePayDialog">
            <table class="buy-dialog-table">
                <tr>
                    <th>购买数量</th>
                    <th>产品类型</th>
                    <!--<th>有效时间</th>-->
                    <th>产品版本</th>
                    <th>总价</th>
                </tr>
                <tr>
                    <td>{{buyNum}}</td>
                    <td>{{buyType.label}}</td>
                    <td>{{buyLv.label}}</td>
                    <!--<td>-->
                        <!--&lt;!&ndash;<span v-for="item in versions">{{ item.label }}</span>&ndash;&gt;-->
                    <!--</td>-->
                    <td>1</td>
                </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <bank-chooser @on-change="onParamChange('bankId',$event)"></bank-chooser>
            <div class="button buy-dialog-btn" @click="hidePayDialog">
                确认购买
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import vSelection from '../components/selection.vue'
    import vChooser from '../components/chooser.vue'
    import vmChooser from '../components/mChooser.vue'
    import vCounter from '../components/counter.vue'
    import myDialog from '../components/dialog.vue'
    import bankChooser from '../components/bankChooser.vue'
    export default {
        components:{
            vSelection,
            vChooser,
            vmChooser,
            vCounter,
            myDialog,
            bankChooser
        },
        data(){
            return{
                isShowPayDialog: false,
                buyNum:1,
                buyType:{},
                buyLv:{},
                bankId:{},
                versionList: [
                    {
                        label: '初级版',
                        value: 0
                    },
                    {
                        label: '中级版',
                        value: 1
                    },
                    {
                        label: '高级版',
                        value: 2
                    },
                    {
                        label: '专家版',
                        value: 3
                    }
                ],
                tradeList: [
                    {
                        label: '出版业',
                        value: 0
                    },
                    {
                        label: '媒体',
                        value: 1
                    },
                    {
                        label: '金融',
                        value: 2
                    },
                    {
                        label: '互联网',
                        value: 3
                    },
                    {
                        label: '游戏',
                        value: 4
                    }
                ]
            }
        },
        methods:{
            onParamChange(type,mes){
                console.log(mes);
                this[type]=mes;
                let allMes={
                    num:this.buyNum,
                    type:this.buyType.label,
                    lv:this.buyLv.label,
                    bank:this.bankId.label
                }
                console.log(allMes);
            },
            showPayDialog(){
                this.isShowPayDialog=!this.isShowPayDialog;
            },
            hidePayDialog(){
                this.isShowPayDialog=false;
            }
        }
    }
</script>

<style scoped>
    .buy-dialog-title {
        font-size: 16px;
        font-weight: bold;
    }
    .buy-dialog-btn {
        margin-top: 20px;
    }
    .buy-dialog-table {
        width: 100%;
        margin-bottom: 20px;
    }
    .buy-dialog-table td,
    .buy-dialog-table th{
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 5px 0;
    }
    .buy-dialog-table th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
    }
</style>