<template>
    <div class="login">
        <headerNav :title="title"></headerNav>
        <div class="loginBox">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
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
            console.log('submit', values);
        },
    },
}
</script>

<style lang="scss" scope>
    .login{
        .loginBox{
            padding:50px;
            .infos{
                font-size: 12px;
                color: rgba(0,0,0,.5);
            }
        }
    }
</style>