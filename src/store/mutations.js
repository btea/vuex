let login = function(state, login){
    if(login && typeof login != 'object'){
        return ;
    }
    let info = login.login;
    state.account = info.login;
    state.profile = info.profile;
    state.clientId = info.clientId;
    state.uid = info.profile.userId;
};

let userInfo = function(state, data){
    if(data && typeof data != 'object'){
        return ;
    }
    let user = data.user;
    state.createDays = user.createDays;
    state.createTime = user.createTime;
    state.level = user.level;
    state.listenSongs = user.listenSongs;
    state.peopleCanSeeMyPlayRecord = user.peopleCanSeeMyPlayRecord;
    state.uid = state.uid || user.profile.userId;
    state.profile = state.profile || user.profile;
    state.userPoint = user.userPoint;
};

let playlist = function(state, list){
    if(list && typeof list === 'object'){
        state.playlist = list.playlist;
        state.more = list.more;
    }
};

export default {
    userInfo,
    playlist,
    login
}