<template>
    <div>
        <el-button type="primary" v-on:click="connected()">连接</el-button>
        <el-button  type="success" v-on:click="sendMsg()">发送</el-button>
        <el-button type="primary" v-on:click="disconnect()">断开连接</el-button>
        <div>
            <el-button type="primary" @click="show = !show">开关</el-button>
            <div>
                <transition name="fade">
                    <!-- <el-button v-show="show">hello</el-button> -->
                    <!-- <span v-show="show">hello</span> -->
                    <div v-show="show">div</div>
                </transition>
            </div>
        </div>
        <div>
            <el-input type="textarea" :rows="1" v-model="sendMessage"></el-input>
            <el-input type="textarea" :rows="10" v-model="textarea"></el-input>
        </div>
        <div>
            <hr>
            <el-input placeholder="player1" v-model="player1"></el-input>
            <el-input placeholder="player2" v-model="player2"></el-input>
            <el-input placeholder="player3" v-model="player3"></el-input>
            <el-input placeholder="player4" v-model="player4"></el-input>
            <el-button type="primary" @click="startGame()">准备游戏</el-button>
            <br>
            <el-button type="success">开始游戏</el-button>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
import Message from 'element-ui'
    // import SockJS from 'sockjs-client'
    // import Stomp from 'stompjs'
    export default {
        name: "Game",
        data(){
            return{
                stompClient:null,
                show:true,
                account:'add',
                socket:null,
                messageForReceive:'',
                textarea:'',
                sendMessage:'',
                player1:'',
                player3:'',
                player2:'',
                player4:'',
                GameingClient:null
            }
        },
        methods:{
            connected(){
                let that = this;
                let opts = {
                    query: 'loginUserNum=' + that.player1
                }
                if(that.player1 === null || that.player1 === ''){ 
                    this.$message.error('请输入游戏昵称')
                }else{
                    if(that.socket === null){
                        that.socket = io("http://localhost:8082",opts);
                    }
                }
                that.socket.on('connect',()=>{
                    console.log('链接成功')
                })
                // 获取后端监听的push_event事件
                that.socket.on('push_event',(data)=>{
                    console.log(data)
                    // that.textarea = data
                    // that.textarea = that.textarea + '\n' + data
                })
                setTimeout(()=>{
                    that.socket.emit('gameing',"game over")
                },5000)
            },
            sendMsg(){
                console.log(this)
                console.log(window)
                // let gameInfo={}
                // gameInfo.name = this.player1;
                // gameInfo.status = 1;
                // gameInfo.score = 100;
                // gameInfo.grid = [[0,0,0,0],
                //                 [1,1,1,1],
                //                 [2,2,2,2],
                //                 [3,3,3,3]];  
                // this.socket.emit('gameing',gameInfo)
                // console.log("xioaxiyifasong")
            }
            
        }
    }
</script>

<style scoped>
    /* .fade-enter-active, .fade-leave-active{
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    } */
    .fade-enter-active{
        transition: ease 0.5s;
    }
    .fade-leave-active{
        transition: linear 1s;
    }
    .fade-enter,.fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }
</style>
