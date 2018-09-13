import actions from '../actions'
import mutations from '../mutations'

let userInfo = {
    namespaced: true,
    state: {
        createDays: null,
        createTime: null,
        level: null,
        listenSongs: null,
        peopleCanSeeMyPlayRecord: true,
        uid: null,
        profile: null,
        userPoint: null,
        playlist: null,
        more: false, // 是否还有更多歌单
    },
    mutations: {
        login: mutations.login,
        userInfo: mutations.userInfo,
        playlist: mutations.playlist
    },
    actions: {
        login: actions.login,
        userInfo: actions.userInfo,
        playlist: actions.playlist,
        listDetail: actions.listDetail
    }
}

export default userInfo;