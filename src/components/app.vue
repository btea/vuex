<template>
    <!-- <div class="body"> -->
        <!-- <UserInfo></Userinfo> -->
        <!-- <Header></Header> -->
        <!-- <Login></Login> -->
        <!-- <anime></anime> -->
    <!-- </div> -->
    <router-view></router-view>
</template>

<script>
import UserInfo from './userInfo'
import Header from './header'
import Login from './login'
import anime from './anime'
export default {
    components: {
        UserInfo,
        Header,
        Login,
        anime
    }
}
</script>

