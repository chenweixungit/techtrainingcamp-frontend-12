import axios from 'axios'

async function userLogin(data){
    const res = await axios({
        data:data,
        method:'post',
        url:'/user/login'
    })
    return res;
}

export{
    userLogin
}