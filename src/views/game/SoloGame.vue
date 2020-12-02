<template>
  <div class="container">
        <div class="heading">
            <h1 class="title">2048</h1>
            <div class="scores-container">
                <div class="score-container">0</div>
                <div class="best-container">0</div>
            </div>
        </div>

        <div class="above-game">
            <p class="game-intro">欢迎来到<strong>2048小游戏!</strong></p>
            <a class="restart-button">新游戏</a>
        </div>

        <!-- 游戏结束画面 -->
    <div class="game-container">
        <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">再玩一次</a>
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


  </div>
</template>
<script>
import GameManager from '../../api/game/game_manager'
import KeyboardInputManager from '../../api/game/keyboard_input_manager'
import HTMLActuator from '../../api/game/html_actuator'
import LocalStorageManager from '../../api/game/local_storage_manager'

export default {
  name: 'SoloGame',
  components: {},
  data () {
    return {
      tiles:[]
    }
  },
  methods:{
    getDocument(){
      for(let i = 1;i <= 4;++i){
        for(let j = 1;j <= 4;++j){
          this.tiles[i-1][j-1] = 0;
          let ele = document.querySelector('.tile-position-'+j+'-'+i);
          if(ele !== null){
            this.tiles[i-1][j-1] = parseInt(ele.firstChild.textContent);
          }
            
          // if(ele.firstChild.textContent !== null && ele.firstChild.textContent !== '' && ele.firstChild.textContent !== undefined)
          //   this.tiles[j-1][i-1] = ele.firstChild.textContent;
          
        }
      }
      console.log(this.tiles)
      // let ele = document.querySelector('.tile-position-1-2')
      // console.log(ele)
      // console.log(ele.firstChild.textContent)

      // let objs = document.getElementsByClassName('tile');
      // console.log(objs)
      // for(let obj of objs){
      //   console.log(obj.textContent)
      // }
      // console.log(this.tiles)

    }
  },
  beforeUpdate(){
  },
  beforeMount(){
    
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
        console.log("sologame");
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    });
    
  },
  mounted(){
    
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

    /* max-width: 400px; */
    /* background: url('../images/bg.jpg') no-repeat center;
    background-size: cover; */
}


  
</style>
