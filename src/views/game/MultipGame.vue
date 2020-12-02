<template>
  <div class="container">
    <el-dialog
      title="游戏结束"
      :visible.sync="dialogVisible"
      width="30%"
      v-if="dialogVisible"
      >
      <!-- :before-close="handleClose" -->
      <span>您的分数为:{{finalScore}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="backToSoloGame()">返回单人游戏</el-button>
        <el-button type="primary" @click="restart()">再来一局</el-button>
      </span>
    </el-dialog>
        <div class="heading">
            <h1 class="title">2048</h1>
            <div class="scores-container">
                <div class="score-container">0</div>
                <div class="best-container">0</div>
            </div>
        </div>

        <div class="above-game">
            <!-- <p class="game-intro">欢迎来到 <strong>2048小游戏! </strong></p> -->
            <p class="game-intro game-timer" v-if="timer >= 0"> 游戏倒计时: <strong>{{timer}} </strong>s</p>
            <p class="game-intro game-timer" v-if="timer < 0"> 游戏结束  </p>
            <a class="restart-button">新游戏</a>
        </div>

        <!-- 游戏结束画面 -->
    <div class="game-container">
        <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">再玩一遍</a>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>

<!-- 排行榜html -->
  <div class="leaderboard">
    <header>
  
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" class="leaderboard__icon">
        <g>
          <g>
            <path d="M466.45,49.374c-7.065-8.308-17.368-13.071-28.267-13.071H402.41v-11.19C402.41,11.266,391.143,0,377.297,0H134.705
              c-13.848,0-25.112,11.266-25.112,25.112v11.19H73.816c-10.899,0-21.203,4.764-28.267,13.071
              c-6.992,8.221-10.014,19.019-8.289,29.624c9.4,57.8,45.775,108.863,97.4,136.872c4.717,11.341,10.059,22.083,16.008,32.091
              c19.002,31.975,42.625,54.073,68.627,64.76c2.635,26.644-15.094,51.885-41.794,57.9c-0.057,0.013-0.097,0.033-0.153,0.046
              c-5.211,1.245-9.09,5.921-9.09,11.513v54.363h-21.986c-19.602,0-35.549,15.947-35.549,35.549v28.058
              c0,6.545,5.305,11.85,11.85,11.85H390.56c6.545,0,11.85-5.305,11.85-11.85v-28.058c0-19.602-15.947-35.549-35.549-35.549h-21.988
              V382.18c0-5.603-3.893-10.286-9.118-11.52c-0.049-0.012-0.096-0.028-0.145-0.04c-26.902-6.055-44.664-31.55-41.752-58.394
              c25.548-10.86,48.757-32.761,67.479-64.264c5.949-10.009,11.29-20.752,16.008-32.095c51.622-28.01,87.995-79.072,97.395-136.87
              C476.465,68.392,473.443,57.595,466.45,49.374z M60.652,75.192c-0.616-3.787,0.431-7.504,2.949-10.466
              c2.555-3.004,6.277-4.726,10.214-4.726h35.777v21.802c0,34.186,4.363,67.3,12.632,97.583
              C89.728,153.706,67.354,116.403,60.652,75.192z M366.861,460.243c6.534,0,11.85,5.316,11.85,11.85v16.208H134.422v-16.208
              c0-6.534,5.316-11.85,11.85-11.85H366.861z M321.173,394.03v42.513H191.96V394.03H321.173z M223.037,370.331
              c2.929-3.224,5.607-6.719,8.002-10.46c7.897-12.339,12.042-26.357,12.228-40.674c4.209,0.573,8.457,0.88,12.741,0.88
              c4.661,0,9.279-0.358,13.852-1.036c0.27,19.239,7.758,37.45,20.349,51.289H223.037z M378.709,81.803
              c0,58.379-13.406,113.089-37.747,154.049c-23.192,39.03-53.364,60.525-84.956,60.525c-31.597,0-61.771-21.494-84.966-60.523
              c-24.342-40.961-37.748-95.671-37.748-154.049V25.112c0-0.78,0.634-1.413,1.412-1.413h242.591c0.78,0,1.414,0.634,1.414,1.413
              V81.803z M451.348,75.192c-6.702,41.208-29.074,78.51-61.569,104.191c8.268-30.283,12.631-63.395,12.631-97.58V60.001h35.773
              c3.938,0,7.66,1.723,10.214,4.726C450.915,67.688,451.963,71.405,451.348,75.192z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M327.941,121.658c-1.395-4.288-5.103-7.414-9.566-8.064l-35.758-5.196l-15.991-32.402
              c-1.997-4.044-6.116-6.605-10.626-6.605c-4.511,0-8.63,2.561-10.626,6.605l-15.991,32.402l-35.758,5.196
              c-4.464,0.648-8.172,3.775-9.566,8.065c-1.393,4.291-0.231,8.999,2.999,12.148l25.875,25.221l-6.109,35.613
              c-0.763,4.446,1.064,8.938,4.714,11.59c3.648,2.651,8.487,3,12.479,0.902L256,190.32l31.982,16.813
              c1.734,0.911,3.627,1.36,5.512,1.36c2.456,0,4.902-0.763,6.966-2.263c3.65-2.652,5.477-7.144,4.714-11.59l-6.109-35.613
              l25.875-25.221C328.172,130.658,329.334,125.949,327.941,121.658z M278.064,146.405c-2.793,2.722-4.068,6.644-3.408,10.489
              l3.102,18.09l-16.245-8.541c-1.725-0.908-3.62-1.36-5.514-1.36c-1.894,0-3.788,0.454-5.514,1.36l-16.245,8.541l3.102-18.09
              c0.66-3.844-0.615-7.766-3.408-10.489l-13.141-12.81l18.162-2.64c3.859-0.56,7.196-2.985,8.922-6.482l8.123-16.458l8.122,16.458
              c1.727,3.497,5.062,5.921,8.922,6.482l18.162,2.64L278.064,146.405z" />
          </g>
        </g>
      </svg>
  
      <h1 class="leaderboard__title"><span class="leaderboard__title--top">Forbes</span><span class="leaderboard__title--bottom">Leaderboard</span></h1>
    </header>
    
    <main class="leaderboard__profiles">


      <article class="leaderboard__profile" onclick="aaa()">
        <div class="test_div">
          <div class="game-container_small">
            <div class="grid-container">
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid1[0][0]}}</div>
                <div class="grid-cell_small">{{grid1[1][0]}}</div>
                <div class="grid-cell_small">{{grid1[2][0]}}</div>
                <div class="grid-cell_small">{{grid1[3][0]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid1[0][1]}}</div>
                <div class="grid-cell_small">{{grid1[1][1]}}</div>
                <div class="grid-cell_small">{{grid1[2][1]}}</div>
                <div class="grid-cell_small">{{grid1[3][1]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid1[0][2]}}</div>
                <div class="grid-cell_small">{{grid1[1][2]}}</div>
                <div class="grid-cell_small">{{grid1[2][2]}}</div>
                <div class="grid-cell_small">{{grid1[3][2]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid1[0][3]}}</div>
                <div class="grid-cell_small">{{grid1[1][3]}}</div>
                <div class="grid-cell_small">{{grid1[2][3]}}</div>
                <div class="grid-cell_small">{{grid1[3][3]}}</div>
              </div>
            </div>
          </div>
        </div>
        
        <span class="leaderboard__name">{{player1}}</span>
        <span class="leaderboard__value">{{score1}}<span>B</span></span>
      </article>
      
      <article class="leaderboard__profile" onclick="aaa()">
        <div class="test_div">
          <div class="game-container_small">
            <div class="grid-container">
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid2[0][0]}}</div>
                <div class="grid-cell_small">{{grid2[1][0]}}</div>
                <div class="grid-cell_small">{{grid2[2][0]}}</div>
                <div class="grid-cell_small">{{grid2[3][0]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid2[0][1]}}</div>
                <div class="grid-cell_small">{{grid2[1][1]}}</div>
                <div class="grid-cell_small">{{grid2[2][1]}}</div>
                <div class="grid-cell_small">{{grid2[3][1]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid2[0][2]}}</div>
                <div class="grid-cell_small">{{grid2[1][2]}}</div>
                <div class="grid-cell_small">{{grid2[2][2]}}</div>
                <div class="grid-cell_small">{{grid2[3][2]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid2[0][3]}}</div>
                <div class="grid-cell_small">{{grid2[1][3]}}</div>
                <div class="grid-cell_small">{{grid2[2][3]}}</div>
                <div class="grid-cell_small">{{grid2[3][3]}}</div>
              </div>
            </div>
          </div>
        </div>
     
        <span class="leaderboard__name">{{player2}}</span>
        <span class="leaderboard__value">{{score2}}<span>B</span></span>
      </article>
      
      <article class="leaderboard__profile" onclick="aaa()">
        <div class="test_div">
          <div class="game-container_small">
            <div class="grid-container">
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid3[0][0]}}</div>
                <div class="grid-cell_small">{{grid3[1][0]}}</div>
                <div class="grid-cell_small">{{grid3[2][0]}}</div>
                <div class="grid-cell_small">{{grid3[3][0]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid3[0][1]}}</div>
                <div class="grid-cell_small">{{grid3[1][1]}}</div>
                <div class="grid-cell_small">{{grid3[2][1]}}</div>
                <div class="grid-cell_small">{{grid3[3][1]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid3[0][2]}}</div>
                <div class="grid-cell_small">{{grid3[1][2]}}</div>
                <div class="grid-cell_small">{{grid3[2][2]}}</div>
                <div class="grid-cell_small">{{grid3[3][2]}}</div>
              </div>
              <div class="grid-row_small">
                <div class="grid-cell_small">{{grid3[0][3]}}</div>
                <div class="grid-cell_small">{{grid3[1][3]}}</div>
                <div class="grid-cell_small">{{grid3[2][3]}}</div>
                <div class="grid-cell_small">{{grid3[3][3]}}</div>
              </div>
            </div>
          </div>
        </div>
      
        <span class="leaderboard__name">{{player3}}</span>
        <span class="leaderboard__value">{{score3}}<span>B</span></span>
      </article>
      
    </main>
  </div>
<!-- <el-input placeholder="请输入弹幕内容" v-model="barrageMsg"></el-input>
<el-button type="success" @click="sendBarrage()">发送</el-button> -->
<!-- <input type="text" class="form-control" name="" id="barrage_content" placeholder="添加弹幕内容">
<button class="danmu_btn danmu_btn-primary" id="submit_barraget">发送</button> -->
<!-- 弹幕html -->

<!-- 实时排名折线图 -->
  <div id="mountNode">
    <div id="content" class="content">
    </div>
    <el-input placeholder="请输入弹幕内容" v-model="barrageMsg"></el-input>
      <el-button @click="sendBarrage()" type="success">发送</el-button>
  </div>
<!-- 实时排名折线图 -->

<!-- 模态框 -->
<section class="cd-section">
  <div class="cd-modal-action" >
    <a href="#0" class="btn" data-type="modal-trigger" id="testtest">Fire Modal Window</a>
    <div class="cd-modal-bg"></div>
  </div> <!-- cd-modal-action -->

  <div class="cd-modal">
    <div class="game-container game-container-model">
      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>
    </div>
  </div> <!-- cd-modal -->

  <a href="#0" class="cd-modal-close">Close</a>
</section> 
<!-- 模态框 -->
<!-- <el-button @click="getDocument" type="success">Document</el-button> -->
  </div>
</template>
<script>
import GameManager from '../../api/game/game_manager'
import KeyboardInputManager from '../../api/game/keyboard_input_manager'
import HTMLActuator from '../../api/game/html_actuator'
import LocalStorageManager from '../../api/game/local_storage_manager'
import Barrage from '../../api/game/barrage'

export default {
  name: 'MultipGame',
  components: {},
  watch:{
    timer(newVal,oldVal){
      if(this.timer < 0){
        let socket = this.$store.state.socket
        // 断开游戏连接
        socket.emit('endGame',{room:this.$store.state.roomInfo.room})
        this.dialogVisible = true
      }
    }
  },
  data () {
    return {
      dialogVisible:false,
      tiles:[],
      player1:null,
      player2:null,
      player3:null,
      score1:0,
      score2:0,
      score3:0,
      grid1:[],
      grid2:[],
      grid3:[],
      loading:true,
      timer:60,
      finalScore:0,
      barrageMsg:"",
      barrage:null,
      socket:null
    }
  },
  methods:{
    sendBarrage(){
      // if(this.barrageMsg !== null && this.barrageMsg !== ""){
      //   // this.barrage.shoot(this.barrageMsg)
      // }
      // this.barrageMsg = ""
      if(this.socket !== null && this.barrageMsg !== null && this.barrageMsg !== ""){
        this.socket.emit('comment',{room:this.$store.state.roomInfo.room,message:this.$store.state.userInfo.name + this.barrageMsg})
        
        this.socket.on('push_comment',data=>{
          this.barrage.shoot(data.message)
          this.barrageMsg = ""  
        })
      }
      

    },
    handleClose(done) {
      // let that = this
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     that.dialogVisible = false;
      //     done()
      //   })
      //   .catch(_ => {});
    },
    getDocument(){
      this.grid1 = new Array();
      this.grid2 = new Array();
      this.grid3 = new Array();
      for(let i = 1;i <= 4;++i){
      this.grid1[i - 1] = [new Array()];
      this.grid2[i - 1] = [new Array()];
      this.grid3[i - 1] = [new Array()];
      for(let j = 1;j <= 4;++j){
        this.grid1[i-1][j-1] = '3';
        this.grid2[i-1][j-1] = '2';
        this.grid3[i-1][j-1] = '2';
        }
      }
    },
    backToSoloGame(){
      this.$store.commit('setIndex',1);
      this.dialogVisible = false
      this.$store.commit('setIndex',"1")
      this.$store.commit('setGameMode',true);
    },
    restart(){
      this.dialogVisible = false;
      let socket = this.$store.state.socket
      this.$store.commit('setLoadingState',true)
      socket.emit('startGame',{name:this.$store.state.userInfo.name})
      socket.on('start_game',data=>{
          console.log("game starting")
          console.log(data)
          this.$store.commit('setLoadingState',false)
          this.$store.commit('setRoomInfo',data)
      })
    }
  }
  ,
  beforeUpdate(){
  },
  beforeMount(){
    this.socket = this.$store.state.socket
    for(let i = 1;i <= 4;++i){
      this.grid1[i - 1] = [new Array()];
      this.grid2[i - 1] = [new Array()];
      this.grid3[i - 1] = [new Array()];
      for(let j = 1;j <= 4;++j){
        this.grid1[i-1][j-1] = '';
        this.grid2[i-1][j-1] = '';
        this.grid3[i-1][j-1] = '';
        }
      }
    Function.prototype.bind = Function.prototype.bind || function (target) {
        var self = this;
        return function (args) {
            if (!(args instanceof Array)) {
            args = [args];
            }
            self.apply(target, args);
        };
    };
    (function () {
        if (typeof window.Element === "undefined" ||
            "classList" in document.documentElement) {
            return;
        }

        var prototype = Array.prototype,
            push = prototype.push,
            splice = prototype.splice,
            join = prototype.join;

        class DOMTokenList {
            constructor(el) {
            this.el = el;
            // The className needs to be trimmed and split on whitespace
            // to retrieve a list of classes.
            var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);
            for (var i = 0; i < classes.length; i++) {
                push.call(this, classes[i]);
            }
            }
            add(token) {
            if (this.contains(token))
                return;
            push.call(this, token);
            this.el.className = this.toString();
            }
            contains(token) {
            return this.el.className.indexOf(token) != -1;
            }
            item(index) {
            return this[index] || null;
            }
            remove(token) {
            if (!this.contains(token))
                return;
            for (var i = 0; i < this.length; i++) {
                if (this[i] == token)
                break;
            }
            splice.call(this, i, 1);
            this.el.className = this.toString();
            }
            toString() {
            return join.call(this, ' ');
            }
            toggle(token) {
            if (!this.contains(token)) {
                this.add(token);
            } else {
                this.remove(token);
            }

            return this.contains(token);
            }
        }


        window.DOMTokenList = DOMTokenList;

        function defineElementGetter(obj, prop, getter) {
            if (Object.defineProperty) {
            Object.defineProperty(obj, prop, {
                get: getter
            });
            } else {
            obj.__defineGetter__(prop, getter);
            }
        }

        defineElementGetter(HTMLElement.prototype, 'classList', function () {
            return new DOMTokenList(this);
        });
    })();


    window.fakeStorage = {
        _data: {},
        setItem: function (id, val) {
            return this._data[id] = String(val);
        },

        getItem: function (id) {
            return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
        },

        removeItem: function (id) {
            return delete this._data[id];
        },

        clear: function () {
            return this._data = {};
        }
    };
    window.requestAnimationFrame(function () {
      console.log("multipgame");
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    });
    // 使用dom对象来监听按键
    

  },
  mounted(){
    // 初始化弹幕对象mounted
    this.barrage = new Barrage('content');
    // 计时器
    setInterval(()=>{
      this.timer = this.timer - 1
    },1000)
    // 开启监听弹幕
    this.socket.on('push_comment',data=>{
      this.barrage.shoot(data.message)
      this.barrageMsg = ""  
    })
    let that = this
    this.socket.on('push_event',(data)=>{
        console.log(data)
        if(data.name !== that.$store.state.userInfo.name){
          if(that.player1 === null || that.player2 === null || that.player3 === null){
            if(that.player1 === null && that.player2 !== data.name && that.player3 !== data.name){
              that.player1 = data.name
              that.grid1 = data.grid
              that.score1 = data.score
            }else if(that.player2 === null && that.player1 !== data.name && that.player3 !== data.name){
              that.player2 = data.name
              that.grid2 = data.grid
              that.score2 = data.score
            }else if(that.player3 === null && that.player2 !== data.name && that.player1 !== data.name){
              that.player3 = data.name
              that.grid3 = data.grid
              that.score3 = data.score
            }
          }else{
            if(that.player1 === data.name){
              that.grid1 = data.grid
              that.score1 = data.score
            }
            if(that.player2 === data.name){
              that.grid2 = data.grid
              that.score2 = data.score
            }
            if(that.player3 === data.name){
              that.grid3 = data.grid
              that.score3 = data.score
            }
          }
        }
      })

    
    document.onkeydown = function(e){
      console.log(that.$store.state.roomInfo)
      let socket = that.$store.state.socket
      let ele = e || event || window.event || arguments.callee.caller.arguments(0);
      let score = document.querySelector('.score-container').textContent
      
      if(ele && ele.keyCode === 37){
        setTimeout(()=>{
          let curScore = document.querySelector('.score-container').textContent
          let res = ""
          for(let i of curScore){
              if(i === '+'){
                  break;
              }
              res += i
          }
          that.finalScore = res
          let grid = []
          for(let i = 0;i < 4;++i){
            grid[i] = [new Array()]
            for(let j = 0;j < 4;++j){
              grid[i][j] = ''
              let dom = document.querySelector('.tile-position-' + (i + 1) + '-' +(j + 1));
              if(dom != null){
                grid[i][j] = dom.firstChild.textContent
              }
            }
          }
          socket.emit('gameing',{room:that.$store.state.roomInfo.room,name:that.$store.state.userInfo.name,grid:grid,score:res})
        },50)
          
      }else if(ele && ele.keyCode === 38){
          setTimeout(()=>{
            let curScore = document.querySelector('.score-container').textContent
            let res = ""
            for(let i of curScore){
                if(i === '+'){
                    break;
                }
                res += i
            }
            that.finalScore = res
            let grid = []
            for(let i = 0;i < 4;++i){
              grid[i] = [new Array()]
              for(let j = 0;j < 4;++j){
                grid[i][j] = ''
                let dom = document.querySelector('.tile-position-' + (i + 1) + '-' +(j + 1));
                if(dom != null){
                  grid[i][j] = dom.firstChild.textContent
                }
              }
            }
            socket.emit('gameing',{room:that.$store.state.roomInfo.room,name:that.$store.state.userInfo.name,grid:grid,score:res})
          },50)
      }else if(ele && ele.keyCode === 39){
          setTimeout(()=>{
            let curScore = document.querySelector('.score-container').textContent
            let res = ""
            for(let i of curScore){
                if(i === '+'){
                    break;
                }
                res += i
            }
            that.finalScore = res
            let grid = []
            for(let i = 0;i < 4;++i){
              grid[i] = [new Array()]
              for(let j = 0;j < 4;++j){
                grid[i][j] = ''
                let dom = document.querySelector('.tile-position-' + (i + 1) + '-' +(j + 1));
                if(dom != null){
                  grid[i][j] = dom.firstChild.textContent
                }
              }
            }
            socket.emit('gameing',{room:that.$store.state.roomInfo.room,name:that.$store.state.userInfo.name,grid:grid,score:res})
          },50)
      }else if(ele && ele.keyCode === 40){
          setTimeout(()=>{
            let curScore = document.querySelector('.score-container').textContent
            let res = ""
            for(let i of curScore){
                if(i === '+'){
                    break;
                }
                res += i
            }
            that.finalScore = res
            let grid = []
            for(let i = 0;i < 4;++i){
              grid[i] = [new Array()]
              for(let j = 0;j < 4;++j){
                grid[i][j] = ''
                let dom = document.querySelector('.tile-position-' + (i + 1) + '-' +(j + 1));
                if(dom != null){
                  grid[i][j] = dom.firstChild.textContent
                }
              }
            }
            socket.emit('gameing',{room:that.$store.state.roomInfo.room,name:that.$store.state.userInfo.name,grid:grid,score:res})
          },50)
      }
      

    }
  }
}
</script>

<style scoped>
  @import '../../style/motaikuang/style.css';
  @import '../../style/danmu/danmu.css';
  @import '../../style/main.css';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* 左边排行榜css */
  .test_div{
      width: 180px;
      height: 180px;
      background-color:blanchedalmond;
  }
  .leaderboard {
    max-width: 350px;
    width: 100%;
    border-radius: 12px;
    left: 150px;
    top:10px;
    position: fixed; 
  } 
  .leaderboard header {
    --start: 15%;
    height: 130px;
    background-image: repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(54, 89, 219, 0.33) 10%, rgba(54, 89, 219, 0.33) 17%), linear-gradient(to right, #5b7cfa, #3659db);
    color: #fff;
    position: relative;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
  }
  .leaderboard header .leaderboard__title {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: calc(var(--start) * .75);
    transform: translateY(-50%);
    text-transform: uppercase;
    margin: 0;
  }
  .leaderboard header .leaderboard__title span {
    display: block;
  }
  .leaderboard header .leaderboard__title--top {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 6.5px;
  }
  .leaderboard header .leaderboard__title--bottom {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 3.55px;
    opacity: .65;
    transform: translateY(-2px);
  }
  .leaderboard header .leaderboard__icon {
    fill: #fff;
    opacity: .35;
    width: 50px;
    position: absolute;
    top: 50%;
    left: var(--start);
    transform: translate(-50%, -50%);
  }
  .leaderboard__profiles {
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    padding: 15px 15px 20px;
    display: grid;
    row-gap: 8px;
  }
  .leaderboard__profile {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98), box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
    background-color: #fff;
  }
   .leaderboard__profile:hover {
    transform: scale(1.2);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  } 
  .leaderboard__picture {
    max-width: 100%;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
  }
  .leaderboard__name {
    color: #979cb0;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }
  .leaderboard__value {
    color: #35d8ac;
    font-weight: 700;
    font-size: 20px;
    text-align: right;
  }
  .leaderboard__value > span {
    opacity: .8;
    font-weight: 600;
    font-size: 13px;
    margin-left: 3px;
  }
  
  body {
    margin: 0;
    background-color: #eaeaea;
    display: grid;
    height: 100vh;
    place-items: center;
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  .leaderboard {
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.4);
  }

  /* 排行榜123图标 */
  .first_jpg{
    width:  70px;
    height: 70px;
    position: fixed;
    left: 450px;
    top:150px;
  }
  .second_jpg{
    width:  70px;
    height: 70px;
    position: fixed;
    left: 450px;
    top:370px;
  }
  .third_jpg{
    width:  70px;
    height: 70px;
    position: fixed;
    left: 450px;
    top:590px;
  }
/* 左边排行榜css */

/* 右下角弹幕框css */
.phone{
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 100%;
    height: 100%;
    max-width: 400px;
    /* background: url('../images/bg.jpg') no-repeat center; */
    background-size: cover;
}
.send-input{
    position: absolute;
    left: 10px;
    bottom: 20px;
    padding: 10px 4px;
    font-size: 16px;
    width: 70%;
    border: 1px solid green;
    border-radius: 5px;
    text-align: left;
}
.send-btn{
    position: absolute;
    left: 80%;
    bottom: 20px;
    margin-left: 0px;
    padding: 8px 0;
    font-size: 16px;
    width: 60px;
    background: #23abe2;
    color: #fff;
    border: 1px solid green;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
}
.message-area{
    position: absolute;
    left: 10px;
    bottom: 80px;
    width: 60%;
    height: 200px;
}

.mobile-live-message-item-text{
    background: rgba(0,0,0,0.3);
    margin-bottom: 10px;
    padding: 4px;
    color: #fff;
    border-radius: 4px;
    line-height: 1;
    font-size: 14px;
    display: inline-block;
}
.icon{
    width: 20px;
    vertical-align: middle;
}
.mobile-live-message-item-text span{
    vertical-align: middle;
    padding-left: 10px;
    font-size: 14px;
}
.mobile-live-message-box::-webkit-scrollbar{
    width:0px;
    height:0px;
}
.mobile-live-message-box::-webkit-scrollbar-track{
    background: rgba(0, 0, 0, 0);
    border-radius:2px;
}
.mobile-live-message-box::-webkit-scrollbar-thumb{
    background: rgba(0, 0, 0, 0);;
    border-radius:10px;
}
.mobile-live-message-box::-webkit-scrollbar-thumb:hover{
    background: rgba(0, 0, 0, 0);
}
.mobile-live-message-box::-webkit-scrollbar-corner{
    background: rgba(0, 0, 0, 0);
}
.mobile-live-message-box{
    position: relative;
}
/* .mobile-live-message-content-box{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
} */
/* 右下角弹幕框css */

/* 右边实时折线图 */
#mountNode{
    position: fixed;
    right: 30px;
    top: 50px;
    max-width: 400px;
    min-width: 400px;
    height: 70%;
    /* max-width: 400px; */
    /* background: url('../images/bg.jpg') no-repeat center;
    background-size: cover; */
}
.content{
  max-width: 400px;
  min-width: 400px;
  /* background-color: black; */
  height: 60%;
}


  
</style>
