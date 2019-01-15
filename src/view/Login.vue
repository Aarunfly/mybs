<!--  -->
<template>
  <div class="login">
    <div class="loginIn_card">
            <Form ref="loginInP">
            <FormItem prop="user" label-position>
            <Input type="text" v-model="userName" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
            </FormItem>
            <FormItem prop="password">
            <Input type="password" v-model="userPwd" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
            </FormItem>
            </Form>
            <div slot="footer">
               <router-link to='/'> 取消</router-link> 
             <Button type="primary" @click="login()  ">登录</Button>
             </div>
             </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName:"",
      userPwd:"",
      loginFlag:false
    };
  },

  components: {},

  computed: {},

  mounted(){
    console.log(222);
  },

  methods:{
     //登录事件请求
    login(){
      if(this.userName!=''&&this.userPwd!=''){
        this.$axios.post("/users/login",{
        userName:this.userName,
        userPwd:this.userPwd
      }).then((Response)=>{
        let res =Response.data;
        if(res.status=="success"){
          this.errorTip =false;
          if(res.Msg=="登陆成功"){
            this.$store.commit('changeLoginStatus');
            this.$router.push('/');
            this.loginFlag=true,
            this.addUsers="退出登录"
             this.$Message.success(res.Msg);
             this.loginName=res.result.userName
             this.loginmodel=false;
          }else if(res.Msg=="用户名或密码错误"){
           this.$Message.error(res.Msg);
           this.userName='';
           this.userPwd='';
          }if(res.Msg=="用户不存在"){
           this.$Message.error(res.Msg);
           this.userName='';
           this.userPwd='';
          }
        }
      }) 
        }else{
             this.$Message.error("请输入用户名及密码");
             }
    },
   
  }
}

</script>
<style >
.login{
  position: relative;
  height: 500px;
}
.loginIn_card{
position: absolute;
width: 350px;
height: 400px;
border: 2px solid #ccc;
right: 20px;
top: 100px;
}
</style>