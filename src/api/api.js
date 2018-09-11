// 手机登录
const phoneLogin = '/login/cellphone';
// /login/cellphone?phone=xxx&password=yyy

// 邮箱登录
const emailLogin = '/login';
// /login?email=xxx@163.com&password=yyy

// 刷新登录
const refresh = '/login/refresh';

// 登录状态
const status = '/login/status';

// 获取用户详情
const userDetail = '/user/detail';

// 获取用户信息，歌单，收藏，mv，dj数量
const subcount = '/user/subcount';

// 更新用户信息
const userUpdate = 'user/update';
// /user/update/?gender=0&signature=测试签名&city=440300&nickname=binary&birthday=1525918298004&province=440000

// 获取用户歌单
const playList = '/user/playlist';
// /user/playlist?uid=32953014

// 更新歌单
const updateList = 'playlist/update';
// /playlist/update/?id=24381616&name=新歌单&desc=描述&tags=学习  id(歌单id)

// 发送私信
const sendText = '/send/text';
// /send/text?user_ids=32953014&msg=test,/send/text?user_ids=32953014,475625142&msg=test
// 当给多个人发送私信时,user_ids可以用逗号拼接多个用户id

// 发送私信（带歌单）
const sendPlayList = '/send/playlist';
// /send/playlist?msg=test&user_ids=475625142&playlist=705123491,/send/playlist?msg=test2&user_ids=475625142,32953014&playlist=705123493

// 获取用户电台
const userDj = '/user/dj';
// /user/dj?uid=32953014

// 获取用户关注列表
const follows = '/user/follows';
// /user/follows?uid=32953014  可选参数limit:返回数量，默认为30;offset: 偏移数量

// 获取用户粉丝列表
const followeds = '/user/followeds'
// ...

// 搜索
// const search = ''

export default {
    phoneLogin,
    emailLogin,
    refresh,
    status,
    userDetail,
    subcount,
    userUpdate,
    playList,
    updateList,
    sendText,
    sendPlayList,
    userDj,
    follows,
    followeds
}