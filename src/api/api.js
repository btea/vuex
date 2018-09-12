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

// 获取歌单详情
const playListDetail = '/playlist/detail';
// /playlist/detail?id=24381616

// 获取单曲地址
const songUrl = '/music/url';
// /music/url?id=33894312  br（码率）可选参数，默认999000，最大 可同时获取多个url /music/url?id=33894312,405998841

// 获取音乐是否有版权，是否可播放
const check = '/check/music';
/** /check/music?id=33894312
 * 调用此接口，传入歌曲id，可获取音乐是否可用，返回{success: true, messge: 'ok'}或者{success: false, message: '亲爱的,暂无版权'}
*/

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
const followeds = '/user/followeds';
// ...同follows

// 获取用户动态
const event = '/user/event';
//  /user/event/?uid=32953014

// 获取用户播放记录
const record = '/user/record';
// /user/record/?uid=32953014&type=1  可选参数type: type=1时返回weekData,type=0时返回allData

// 获取动态消息
const news = '/event';
// /event 参数未知，调用此接口，可获取各种动态，对应网页版的网易云，朋友界面里的各种消息，如分享的音乐、视屏、照片等

// 歌手分类列表
const artistList = '/artist/list';
// 必选参数：cat（即category Code），歌手类型，默认1001，返回华语男歌手数据  
// 可选参数：limit：返回数量，默认为30 offset：偏移数量，默认为0  initial按首字母索引查找参数
// /artist/list/cat=1001

// 搜索
const search = '/search';
/**
 * 调用此接口，传入搜索关键词可以搜索该音乐/专辑/歌手/歌单/用户,关键词可以多个，以空格隔开，搜索获取的mp3url不能直接使用，可通过/music/url接口传入歌曲id获取播放链接
 * 必选参数 keywords关键词
 * 可选参数 limit: 返回数量，默认为30  offset：偏移数量
 * type: 搜索类型；默认为1即单曲，  1：单曲，10：专辑，100：歌手，1000：歌单，1002：用户，1004：MV,1006: 歌词，1009：电台，1014：视屏
 * /search?keywords=童话镇
*/

// 热搜
const hot = '/search/hot';
/**
 * 获取热门搜索列表 /search/hot
*/

// 搜索建议
const suggest = '/search/suggest';
/**
 * 调用此接口，传入搜索关键词可以获得搜索建议，搜索结果同时包含单曲，歌手，歌单，mv信息
 * 必选参数 keywords
 * 可选参数 limit offset type
 * /search/suggest/?keywords=童话镇&type=1....
*/

export default {
    phoneLogin,
    emailLogin,
    refresh,
    status,
    userDetail,
    subcount,
    userUpdate,
    playList,
    playListDetail,
    songUrl,
    check,
    updateList,
    sendText,
    sendPlayList,
    userDj,
    follows,
    followeds,
    event,
    record,
    news,
    artistList,
    search,
    hot,
    suggest
}