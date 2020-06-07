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
                    :rules="[{ required: true, message: '请填写用户名' },{pattern:user, message: '请输入4-16位的用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' },{pattern:pawd, message: '请输入至少6位包含字母，数字的密码' }]"
                />
                <van-field
                    v-model="cfPassword"
                    type="password"
                    name="确认密码"
                    label="确认密码"
                    placeholder="请再次输入密码"
                    :rules="[{ required: true, message: '请填写密码' },{validator:confPasd, message: '请输入与上一次相同的密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    注册
                    </van-button>
                    <p class="infos">已经有账号?请点击<router-link to="login">登陆</router-link></p>
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
            title:'注册',
            username:'',
            password:'',
            cfPassword:'',
            user: /^[a-zA-Z0-9_-]{4,16}$/,
            pawd:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[a-z])$/
            
        }
    },
    components:{
        headerNav
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        confPasd(val){
            return val=== this.password;
        }
        
    },
}
</script>

<style lang="scss" scope>
    .login{
        .loginBox{
            position: relative;
            height: calc(100vh - 50px);
            .van-form{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
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