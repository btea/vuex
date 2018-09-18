<template>
    <div class="body">
        <UserInfo></Userinfo>
        <Header></Header>
        <Login></Login>
    </div>
</template>

<script>
import UserInfo from './userInfo'
import Header from './header'
import Login from './login'
export default {
    components: {
        UserInfo,
        Header,
        Login
    }
}
</script>

