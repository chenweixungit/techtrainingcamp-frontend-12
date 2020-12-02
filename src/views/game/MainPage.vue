<template>
  <div >
    <el-aside width="130px" class="game-menu">
        <game-menu/>
    </el-aside>
    <el-container class="main-content" v-loading="this.$store.state.loading" element-loading-text="匹配玩家中~" element-loading-spinner="el-icon-loading" element-loading-background='rgba(0,0,0,0.8)'>
        <el-main>
            <solo-game v-if="this.$store.state.soloGameMode === true"></solo-game>
            <multip-game v-if="this.$store.state.soloGameMode === false && this.$store.state.loading === false"></multip-game>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import GameMenu from './GameMenu'
import SoloGame from './SoloGame'
import MultipGame from './MultipGame'
export default {
  name: 'MainPage',
  data () {
    return {
      loading:false
    }
  },
  methods: {
    
  },
  components:{
    'game-menu':GameMenu,
    'solo-game':SoloGame,
    'multip-game':MultipGame
  }
}
</script>

<style scoped>
  
  .game-menu{
      background-color: white;
      position: fixed;
      top: 0;
      height: 100vh;
  }
  .main-content{
      position: fixed;
      top: 0;
      left: 150px;
      width: 100%;
      height: 100%;
  }
 
</style>
