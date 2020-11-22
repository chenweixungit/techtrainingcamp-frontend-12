import axios from 'axios'

async function getOtp(data){
    const res = await axios({
        method: 'post',
        url:'/user/getOtp',
        data:data
    })
    return res
}

async function register(data){
    const res = await axios({
        method: 'post',
        url: '/user/register',
        data:data
    })
    return res
}
export{
    getOtp,
    register
}