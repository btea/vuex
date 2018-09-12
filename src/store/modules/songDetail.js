import actions from '../actions'
import mutations from '../mutations'


let songDetail = {
    state: {
        id: null,
        name: null,
        singer: null,
        lyric: null,
        totalTime: null,
        currentTime: null,
        volice: null,
        img: null,
        commitNum: null,
        commit: null,
        isLike: null,
        isLoad: null
    },
    mutations: {
        getSongInfo: mutations.getSongInfo
    },
    actions: {
        getSongInfo: actions.getSongInfos
    },
    getters: {

    }
};


export default songDetail;

