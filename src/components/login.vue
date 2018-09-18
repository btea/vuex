<template>
    <div class="login-container">
        <div v-for="(d,i) in data" :key="i">{{d.name}}<img :src="d.images[0] ? d.images[0].pic_url : ''" alt="" style="width:100px;height:50px"></div>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            data: []
        }
    },
    mounted(){
        let self = this;
        // fetch('http://localhost:8080/api/user/playlist?uid=59361195').then(res => res.json()).then(data => {
        //     console.log(data);
        //     self.data = data.playlist;
        //     console.log(self.data);
        // })
        fetch('../src/aa.json').then(res => res.json()).then(data => {
            console.log(data);
            self.data = data.data;
            console.log(self.data[0].images[0].id);
            console.log(self.data[0].images[0].pic_url);
        })
        // setTimeout(function(){
        //     self.data = [
        //         {
        //             name: 'a',
        //             src: ''
        //         },
        //         {
        //             name: 'b',
        //             src: ''
        //         }
        //     ]
        // },1000)
    }
}
</script>



