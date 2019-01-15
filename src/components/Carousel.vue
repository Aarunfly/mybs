<template>
    <Carousel v-model="value1" loop autoplay radius-dot trigger="hover" class="carouse">
        <CarouselItem v-for="(pic,index) in pics" :key="index" >
            <div class="demo-carousel" ><img :src="pics[index].url" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1:1,
                pics:[{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546507674510&di=6ffc14f05f9b7eba371b2bad48c47bf1&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2F66%2FD8%2FwKgB4lMcWvyAE9xYAAC8zPK6yMw35.jpeg"},
                {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546507674499&di=2d16821e8625c9fca04dd39dbff4b3ff&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd31b0ef41bd5ad6e7cbe7a1e8bcb39dbb7fd3cfa.jpg"},
                {url:"http://img0.pconline.com.cn/pconline/1309/30/3571757_9.jpg"},{url:"http://img0.pconline.com.cn/pconline/1309/30/3571757_9.jpg"},{url:"http://img0.pconline.com.cn/pconline/1309/30/3571757_9.jpg"}]
            }
        }
    }
</script>
<style>
 img{
     width: 100%;
     height: 100%;
 }
 .carouse{
     width: 100%;
     height:500px;
 }
 .demo-carousel{
     width: 100%;
     height: 500px;
 }
</style>
