<template>
  <div>
      <el-menu :default-active="this.$store.state.index">
          <el-menu-item index="1" @click="setGameMode(true)">
              <i class="el-icon-menu"></i>
              <span>单人游戏</span>
          </el-menu-item>
          <el-menu-item index="2" @click="setGameMode(false)">
              <i class="el-icon-menu"></i>
              <span>多人游戏</span>
          </el-menu-item>
          <el-menu-item index="3" @click="exit()">
              <i class="el-icon-menu"></i>
              <span>退出游戏</span>
          </el-menu-item>
      </el-menu>
  </div>
</template>
<script>
import io from 'socket.io-client'
export default {
  name: 'GameMenu',
  beforeMount(){
    
  },
  data () {
    return {
    }
  },
  methods: {
    exit(){
        this.$router.push('/')
    },
    setGameMode(isSoloGame){
        let socket = this.$store.state.socket;
        // 处理多人游戏
        if(isSoloGame === false){
            console.log(this.$store.state.socket)
            if(socket === null){
                socket = io("http://116.62.144.88:8082",{query:'loginUserNum='+this.$store.state.userInfo.name});
                this.$store.commit('setSocket',socket); 
            }
            socket.emit("startGame",{name:this.$store.state.userInfo.name})
            this.$store.commit('setLoadingState',true)
            this.$store.commit('setIndex',"2")   
        }else{
            this.$store.commit('setSocket',null);
            this.$store.commit('setLoadingState',false)
            this.$store.commit('setIndex',"1")
        }
        // 准备开始游戏的实体：name:username,
        socket.on('connect',()=>{
            console.log('连接成功')
            // socket.emit("gameing",{name:'axun',age:15});
        })
        // 监听后端发过来的开始游戏的信息
        socket.on('start_game',data=>{
            console.log("game starting")
            console.log(data)
            this.$store.commit('setLoadingState',false)
            this.$store.commit('setRoomInfo',data)
        })
        this.$store.commit('setGameMode',isSoloGame);
    }
  }
}
</script>

<style scoped>
  
</style>
