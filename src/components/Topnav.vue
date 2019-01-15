<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                      
                       <MenuItem  name="1"  >
                        <div class="navstyle" @click="(loginName=='登录')?userLogin():''">
                             <Icon type="ios-contact-outline" size="25"/>
                          {{loginName}}
                           </div>
                      </MenuItem>
                      
                      <MenuItem v-for="item in navItem" name="2" >
                       <div  @click="(item.ItemName=='退出登录')?openQuitRemind():(item.to=='')? remindLogin():'' ">
                      <router-link :to="item.to">
                           <div class="navstyle">
                             <Icon :type="item.Icont" size="25"/>
                          {{item.ItemName}}
                           </div>
                      </router-link>
                       </div>
                      </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
        <Content :style="{padding: '0 8%'}">
                <Card>
                    <router-view>
                        <HomePage />
                    </router-view>
                    
                </Card>
    </Content>

    <Modal v-model="loginmodel" width="25" @on-cancel='resetForm()' >
            <div slot:header>
                <p>登录</p>
              </div>
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
             <Button  @click="resetForm" style="margin-left: 8px">取消</Button>
             <Button type="primary" @click="login()">登录</Button>
             </div>
        </Modal>
<Modal v-model="quitremind" width="25">
            <p slot="header">
             <span class="modal-title">退出</span>
            </p>
            <Form ref="loginInP">
            <p>确定要狠心离开么？</p>
            </Form>
            <div slot="footer">
             <Button  @click="resetForm" style="margin-left: 8px">取消</Button>
             <Button type="primary" @click="loginOut">确定</Button>
             </div>
        </Modal>
         
    </div>
</template>
<script>
import HomePage from '../view/HomePage.vue'
export default {
  data() {
    return {
      modalshow:{loginstatus:"",},
      loginmodel:false,
      quitremind:false,
      userName:"",
      userPwd:"",
      navItem:[],
      superUser:false,
      errorTip:false,
     loginFlag:"未登录",
      loginName:"登录",
      
      item:{rate:2},
                scenicsList:[],
                page:1,
                pageSize:8,
    };
  },
  mounted(){
      this.loadNavItem();
      
       console.log(unescape( document.cookie));
  },
  
components:{
            HomePage,
},
  methods: {
    loadNavItem(){
      this.$axios.post("/users/",{
      }).then((Response)=>{
         let res =Response.data;
        this.loginFlag=res.result.userStatus;
        this.loginName=res.result.userName;
      })
         switch(this.loginFlag)
                   {
                  case "User":
                   this.navItem=[ 
        {
            ItemName : "退出登录",
            to : "",
            Icont : "ios-person-add",
            loginStatus : true
        }, 
        {
            ItemName : "购物车",
            to : "/cart",
            Icont : "md-cart",
            loginStatus : true
        }, 
        {
            ItemName : "查看订单",
            to : "/checkorder",
            Icont : "ios-eye-outline",
            loginStatus : true
        }, 
        {
            ItemName : "设置",
            to : "/userset",
            Icont : "ios-settings-outline",
            loginStatus: true
        }
    ]
                   break;
                  case "superUser":
                  this.navItem=[ 
        {
            ItemName : "退出登录",
            to : "",
            Icont : "ios-person-add",
            loginStatus : true
        }, 
        {
            ItemName : "景点管理",
            to : "/senicemanage",
            Icont : "ios-clipboard",
            loginStatus : true
        }, 
        {
            ItemName : "用户管理",
            to : "/usermanage",
            Icont : "ios-contacts-outline",
            loginStatus : true
        }, 
        {
            ItemName : "头图管理",
            to : "/toppic",
            Icont : "ios-image-outline",
            loginStatus : true
        }
    ]
                   break;
                default:
                this.navItem=[
                  {
            ItemName : "注册",
            to : "/adduser",
            Icont : "ios-person-add",
            loginStatus : true
        }, 
        {
            ItemName : "购物车",
            to: "",
            Icont : "md-cart",
            loginStatus : false
        }, 
        {
            ItemName : "查看订单",
            to : "",
            Icont : "ios-eye-outline",
            loginStatus : false
        }, 
        {
            ItemName : "设置",
            to: "",
            Icont : "ios-settings-outline",
            loginStatus : false
        }
                ]
};
    },
  // open login modal
  userLogin(){
    this.$router.push('/');
    this.loginmodel=true;
  },
    //login
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
            this.loginFlag=res.result.userStatus;
             this.loginName=res.result.userName;
             this.loadNavItem();
              this.userName='';
             this.userPwd='';
             this.loginmodel=false;
             this.$Message.success(res.Msg);
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
  //remind user click befor to login
   remindLogin(){
     this.$Message.error('请先登录');
   },
   //open quitremind
   openQuitRemind(){
     this.quitremind=true;
   },
  // close quitremind model and  logout
  loginOut(){
    this.quitremind=false,
    this.$router.push('/');
    // this.addUsers="注册";
    this.loginName="登录";
    this.loginFlag="未登录";
    this.loadNavItem();
   },
   //close model
     resetForm(){
       this.userName='';
           this.userPwd='';
this.quitremind=false;
this.loginmodel=false;
     }
         },
  
};
</script>
<style scoped>
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 1px;
}
.navstyle{
  color: #fff;
}
.navstyle:hover{
  color: aqua;
}
.ivu-menu-horizontal{
      height: 35px;
    line-height: 43px;
}
.ivu-layout-header{
      height: 40px;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
</style>
