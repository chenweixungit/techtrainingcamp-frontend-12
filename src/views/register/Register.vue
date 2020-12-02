<template>
    <div class="form-card">
       <el-form :model="dataForm" :rules="rules">
           <el-alert v-if="regSuccessStatus" type="success" title="注册成功" center show-icon=""></el-alert>
           <el-alert v-if="regFailStatus" type="error" title="注册失败" center show-icon=""></el-alert>
            <el-form-item label="游戏昵称" label-width='80px' prop='name'>
                <el-input v-model="dataForm.name" ></el-input>
            </el-form-item>
            <el-form-item label="性别" label-width="80px" prop='gender'>
                <el-input v-model="dataForm.gender"></el-input>
            </el-form-item>
            <el-form-item label="年龄" label-width="80px" prop='age'> 
                <el-input v-model="dataForm.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop='password'>
                <el-input v-model="dataForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="电话号码" label-width="80px" prop="telephone">
                <el-input v-model="dataForm.telephone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-bind:disabled='otpButtonStatus' v-on:click.once="getCode">点击获取验证码</el-button>
            </el-form-item>
            <el-form-item label="验证码" label-width="80px" prop="otpCode">
                <el-input v-model="dataForm.otpCode"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="userRegister()">注册</el-button>
            </el-form-item>
        </el-form> 
    </div>
  
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getOtp,register} from '../../api/register/index'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
      return {
          regSuccessStatus: false,
          regFailStatus:false,
          otpButtonStatus: false,
          dataForm:{
              telephone:'',
              password:'',
              name:'',
              gender:'',
              age:'',
              otpCode:''
          },
          rules:{
            name:[
                {required:true, message:'请输入游戏昵称',trigger:'blur'},
                {max:12,message:'长度在5到12个字符',trigger:'blur'}
            ],
            age:[
                {required:true, message:'请输入年龄',trigger:'blur'}
            ],
            gender:[
                {required:true, message:'请输入性别',trigger:'blur'}
            ],
            password:[
                {required:true, message:'请输入密码',trigger:'blur'}
            ],
            otpCode:[
                {required:true, message:'请输入验证码',trigger:'blur'}
            ],
            telephone:[
                {required:true, message:'请输入电话号码',trigger:'blur'}
            ]
          }

      }
  },
  methods:{
      getCode(){
          let accessMsg = new FormData();
          accessMsg.append("telephone",this.dataForm.telephone);
          console.log(accessMsg)
          const response = getOtp(accessMsg);
          response.then((e)=>{
              console.log(e)
          })
      },
      userRegister(){
          let formData = new FormData();
          formData.append("telephone",this.dataForm.telephone);
          formData.append("password",this.dataForm.password);
          formData.append("name",this.dataForm.name);
          if(this.dataForm.gender === "男"){
              formData.append("gender",1);
          }else if(this.dataForm.gender === '女'){
              formData.append("gender",0);
          }
          formData.append("age",this.dataForm.age);
          formData.append("otpCode",this.dataForm.otpCode);
          console.log(this.dataForm)
          const response = register(formData);
          let _this = this;
          response.then((e)=>{
              console.log(e)
              if(e.data.status === 'success'){
                _this.regSuccessStatus = true;
                setTimeout(()=>{
                    _this.$router.push('/')
                },2000)
              }else if(e.data.status === 'fail'){
                _this.regFailStatus = true;
              }
          })
      }
  }
}
</script>
<style scoped>
  .form-card{
      top: 100px;
      position: relative;
      left: 50%;
      width: 420px;
      transform: translateX(-50%);
      /* background-color: green; */
  }

</style>