<template>
  <el-form class="inputLogin">
      <el-input
        v-model="account"
        placeholder="请输入账号"
        auto-complete="new-password"
        size="large"
        prefix-icon="el-icon-user">
      </el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        size="large"
        prefix-icon="el-icon-key"
        show-password>
      </el-input>
      <el-button
        type="primary"
        size="medium"
        style="width: 200px; margin-top: 25px"
        @click="login()">
        登录
      </el-button>
      <div>
        <el-link type="info" @click="toRegister()">点我注册</el-link>
      </div>
  </el-form>
</template>
<script>
import {functions} from '../../api/function'
import {userLogin} from '../../api/login'
export default {
  name: 'UserLogin',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.account === '') {
        functions.showErrorMessage('请输入账号')
      } else {
        if (this.password === '') {
          functions.showErrorMessage('请输入密码')
        } else {
          let formData = new FormData();
          formData.append("telephone",this.account);
          formData.append("password",this.password);
          const response = userLogin(formData)
          let _this = this;
          response.then(e=>{
            console.log(e)
            if(e.data.status === 'success'){
                // 登录成功跳转
            }
          }).catch({

          })
        }
      }
    },
    toRegister(){
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
  .inputLogin{
    margin: 15px auto;
    width: 300px;
    height: 320px;
  }
  .inputLogin div{
    margin: 15px auto;
  }
</style>
