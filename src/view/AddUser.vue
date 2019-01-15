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
             <Button type="primary" @click="addUser()  ">注册</Button>
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
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods:{
        //注册
    addUser(){
          if(this.userName!=''&&this.userPwd!=''){
              this.$axios.post("/users/adduser",{
              addName:this.userName,
               addPwd:this.userPwd,
               superUser:false
              }).then(res=>{
                if(res.data.Msg=="该用户名已存在"){
                    this.$Message.error(res.data.Msg);
                }else if(res.data.Msg=="注册成功!请登录"){
                    this.$Message.success(res.data.Msg);
                    this.$router.push('/');
                    this.$store.commit('openLoginModel')
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