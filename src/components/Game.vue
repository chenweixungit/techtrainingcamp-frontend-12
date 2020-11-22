<template>
    <div>
        <el-button type="primary" v-on:click="connect()">连接</el-button>
        <el-button  type="success" v-on:click="sendName()">发送</el-button>
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
    </div>
</template>

<script>
    import SockJS from 'sockjs-client'
    import Stomp from 'stompjs'
    export default {
        name: "Game",
        data(){
            return{
                stompClient:null,
                show:true
            }
        },
        methods:{
            connect() {
                let socket = new SockJS('http://localhost:8081/gs-guide-websocket');
                this.stompClient = Stomp.over(socket);
                let _this = this
                this.stompClient.connect({}, function (frame) {
                    console.log('Connected: ' + frame);
                    _this.stompClient.subscribe('/topic/greetings', function (greeting) {
                        console.log(greeting)
                    });
                });
            },
            disconnect() {
                if (this.stompClient !== null) {
                    this.stompClient.disconnect();
                }
                console.log("Disconnected");
            },
            sendName() {
                let arr = ['ad','da']
                this.stompClient.send("/app/hello", {}, JSON.stringify({'name':arr}));
                // this.stompClient.send("/app/hello", {}, JSON.stringify(arr));
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
