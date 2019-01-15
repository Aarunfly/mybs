<template>
                <div>
                    <div style="min-height: 300px;">
                       <Carousel/> 
                    </div>
                    <div class="scenic_all">
                     <div class="scenic_card" v-for="item in scenicsList" bordered style="margin-top:20px">
                          <div class="pic">
                            <img :src="item.pic">
                            
                          </div>
                          <h3>景点名称:{{item.scenicName}}</h3>
                          <span>评分:
                         <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 10"></Icon><Icon type="ios-star-half" v-else></Icon>
                         {{item.rate}}
                         </span>
                         <p >
                            价格:{{item.price}}
                         </p>
                          <button class="add_shopcar" >加入购物车</button>
                     </div>
                    </div>
    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
    export default {
        data () {
            return {
                item:{rate:2},
                scenicsList:[],
                page:1,
                pageSize:8,
            }
        },
        mounted(){
            
            this.getScenicList();
        },
        methods:{
            
getScenicList(){
                var param = {
                  page:this.page,
                  pageSize:this.pageSize,
              };
              this.$axios.post("/scenics/list",{
          param
      }).then((res=>{
          this.scenicsList=res.data.list;
      }))
            }        
},

components:{
         Carousel
        }
    }
</script>
<style >
.carousel{
    margin: auto;
    
}
.ivu-layout-content .ivu-card-body{
    padding: 0 16px;
    background-color: rgb(247, 245, 245);
}
.ivu-layout-content .ivu-card-bordered{
    background-color: rgba(206, 53, 53, 0);
}
.scenic_all{
    display: flex;
     flex-wrap:wrap;
     width: 100%;
     
}
.pic{
    width:100%;
    height: 250px;
}
.pic img{
    width: 100%;
    height: 100%;
}
.scenic_card{
    border: 6px solid #ccc;
    display: inline-block;
    margin:0 11px 0px 11px;
    width:18%;
    height: 400px;
}
.add_shopcar{
    width:150px;
    height: 40px;
    display: block;
    font-size: 18px;
    border: 4px solid rgb(184, 77, 77);
    padding: 5px 20px;
   margin:10px auto;
   /* background-color: yellow; */
   border-radius: 2px;
}
</style>
