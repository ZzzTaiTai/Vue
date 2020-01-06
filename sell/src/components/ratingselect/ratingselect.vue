<template>
    <div class="ratingselect">
        <div class="rating-type">
            <span class="desc " :class="{'active':selectType === 2}" @click="select(2,$event)">{{desc.all}}<em>{{ratings.length}}</em></span>
            <span class="desc positive" :class="{'active':selectType === 0}" @click="select(0,$event)">{{desc.positive}}<em>{{positive.length}}</em></span>
            <span class="desc negative" :class="{'active':selectType === 1}" @click="select(1,$event)">{{desc.negative}}<em>{{negative.length}}</em></span>
        </div>
        <div class="swtich" :class="{'on':onlyContent}" @click="only">
            <span class="iconfont icon-gouxuan"></span>
            <span class="text">只看有评价的内容</span>
        </div>
    </div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
    props:{
        ratings:{
            type:Array,
            default() {
                return [];
            }
        },
        selectType:{
            type:Number,
            default:ALL
        },
        onlyContent:{
            type:Boolean,
            default:false
        },
        desc:{
            type:Object,
            default() {
                return {
                    all:'全部',
                    positive:'满意',
                    negative:'不满意'
                }
            }
        }
    },
    computed: {
        positive (){
            return this.ratings.filter((rating) =>{
                return rating.rateType === POSITIVE
            })
        },
        negative() {
            return this.ratings.filter((rating) =>{
                return rating.rateType === NEGATIVE
            })
        }
    },
    methods: {
        select(type,event){
            if(event._contructed){
                return
            }
            this.$emit('changes-type',type)
        },
        only(event){
             if(event._contructed){
                return
            }
            this.$emit('changes-only')
        }
    },
}
</script>

<style lang="less">
@import "../../common/css/mixin";
.ratingselect{
    .rating-type{
        padding: 18px 0;
        margin: 0 18px;
        font-size: 0;
        .border-1px(rgba(7,17,27,.1));
        .desc{
            display: inline-block;
            margin:0 4px;
            font-size: 12px;
            color: rgb(77, 85, 93);
            padding:8px 12px;
            background: rgba(0, 160, 220,.2);
            border-radius: 1px;
            &:first-child{margin: 0}
            em{
                font-size: 8px;
            }
            &.active{
                background: rgb(0, 160, 220);
                color: rgb(255, 255, 255);
            }
            &.negative{
                background: rgba(77, 85, 93,.2);
                &.active{
                    background: rgb(77, 85, 93);
                }
            }
        }
    }
    .swtich{
        padding:12px 18px;
        line-height: 24px;
        border-bottom: 1px solid rgba(7, 17, 27,.1);
        color: rgb(147, 153, 159);
        font-size: 0;
        &.on{
            .iconfont{
                color: rgb(0, 160, 220);
            }
        }
        .iconfont{
            display: inline-block;
            margin-right: 4px; 
            font-size: 24px;
            vertical-align: top;
        }
        .text{
            font-size: 12px;
            vertical-align: top;
        }
    }
}

</style>