<template>
    <div class="login">
        <headerNav :title="title"></headerNav>
        <div class="loginBox">
            
            <van-form  @submit="onSubmit"  @failed="onFailed">
                <h1 class="title">记账本</h1>
                <h2 class="tips">请直接使用账号：admin，密码123456登录页面</h2>
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="admin"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="123456"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    登录
                    </van-button>
                    <p class="infos">没有账号?请点击<router-link to="regist">注册</router-link></p>
                    
                </div>
                </van-form>
        </div>
    </div>
</template>

<script>
import headerNav from "@/components/common/headerNav"
import { setlocalStorage } from "@/common/js/util"
export default {
    name:'login',
    data() {
        return {
            title:'登录',
            username:'',
            password:''
        }
    },
    components:{
        headerNav
    },
    methods: {
        onSubmit(values) {
            let data = {
                username:this.username,
                password:this.password
            }
            this.$axios
            .post('/user/login',data)
            .then( res => {
                if(!res.data.success){
                    this.$toast.fail('密码不正确');
                }else{
                    this.$toast.success('登录成功');
                    setlocalStorage('token',res.data.token);
                    setlocalStorage('userId',res.data.userId);
                    this.$router.push(this.$route.query.redirect);
                }
            })
        },
        onFailed(errorInfo) {
            this.$toast.fail(`${errorInfo.errors[0].message}\n重新登录`);
        }
    },
}
</script>

<style lang="scss" scope>
    .login{
        .loginBox{
            position: relative;
            height: calc(100vh - 50px);
            .tips{
                font-size: 14px;
                text-align: center;
                color: #646566;
            }
            .title{
                text-align: center;
                margin-bottom: 50px;
            }
            .van-form{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -60%);
                width: 80%;
            }
            .infos{
                margin-top: 10px;
                text-align: right;
                font-size: 12px;
                color: rgba(0,0,0,.5);
            }
        }
    }
</style>