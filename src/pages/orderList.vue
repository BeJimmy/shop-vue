<template>
    <div class="order-wrap">
        <h3>您的产品</h3>
        <div class="order-list-choose">
            <div class="order-list-option">
                选择产品：
                <o-selection :uLevel="products"></o-selection>
            </div>

            <div class="order-list-option">
                开始日期：
                <my-datepicker :date="startTime" :option="option" :limit="limit"></my-datepicker>
            </div>

            <div class="order-list-option">
                结束日期：
                <my-datepicker :date="startTime" :option="option" :limit="limit"></my-datepicker>
            </div>

            <div class="order-list-option">
                关键词：
                <input type="text" v-model.lazy='query' class="order-query">
            </div>
        </div>
        <div class="order-list-table">
            <table>
                <tr>
                    <th v-for="head in tableHeads">{{ head.label }}</th>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import oSelection from '../components/selection.vue'
    import myDatepicker from 'vue-datepicker'
    export default {
        components:{
            oSelection,
            myDatepicker
        },
        data () {
            return {
                query:'',
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: '',
                    inputStyle: {
                        'display': 'inline-block',
                        'padding': '6px',
                        'line-height': '22px',
                        'font-size': '16px',
                        'border': '2px solid #fff',
                        'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                        'border-radius': '2px',
                        'color': '#5F5F5F'
                    },
                    color: {
                        header: '#ccc',
                        headerText: '#f00'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format:"YYYY-MM-DD HH:mm"
                },
                limit: [{
                    type: 'weekday',
                    available: [1, 2, 3, 4, 5,6,0]
                },
                    {
                        type: 'fromto',
                        from: '1992-02-01',
                        to: '2099-02-20'
                    }],
                products: [
                    {
                        label: '数据统计',
                        value: 0
                    },
                    {
                        label: '数据预测',
                        value: 1
                    },
                    {
                        label: '流量分析',
                        value: 2
                    },
                    {
                        label: '广告发布',
                        value: 3
                    }
                ],
                tableHeads: [
                    {
                        label: '订单号',
                        key: 'orderId'
                    },
                    {
                        label: '购买产品',
                        key: 'product'
                    },
                    {
                        label: '版本类型',
                        key: 'version'
                    },
                    {
                        label: '有效时间',
                        key: 'period'
                    },
                    {
                        label: '购买日期',
                        key: 'date'
                    },
                    {
                        label: '数量',
                        key: 'buyNum'
                    },
                    {
                        label: '总价',
                        key: 'amount'
                    }
                ]
            }
        },
        methods: {

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .order-wrap {
        width: 1200px;
        min-height: 800px;
        margin: 20px auto;
        overflow: hidden;
    }
    .order-wrap h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .order-query {
        height: 25px;
        line-height: 25px;
        border: 1px solid #e3e3e3;
        outline: none;
        text-indent: 10px;
    }
    .order-list-option {
        display: inline-block;
        padding-left: 15px;
    }
    .order-list-option:first-child {
        padding-left: 0;
    }
    .order-list-table {
        margin-top: 20px;
    }
    .order-list-table table {
        width: 100%;
        background: #fff;
    }
    .order-list-table td,
    .order-list-table th {
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 10px 0;
    }
    .order-list-table th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
        cursor: pointer;
    }
    .order-list-table th.active {
        background: #35495e;
    }
</style>
