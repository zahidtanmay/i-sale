(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{564:function(e,t,r){var content=r(758);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("571af42b",content,!0,{sourceMap:!1})},757:function(e,t,r){"use strict";var o=r(564);r.n(o).a},758:function(e,t,r){(t=r(8)(!1)).push([e.i,".register-page .el-select{width:100%!important;margin-bottom:30px}.register-page .el-select .el-input__inner{border-color:rgba(29,37,59,.2)!important}",""]),e.exports=t},833:function(e,t,r){"use strict";r.r(t);r(35);var o,n=r(12),l=r(3),m=(r(537),r(84),r(538)),d=r.n(m),c=(r(22),r(539),r(540)),v=r.n(c),f=r(59),w={name:"register-page",layout:"auth",auth:"guest",head:function(){return{title:"Register",meta:[{hid:"description",name:"description",content:"My custom description"}]}},components:(o={},Object(l.a)(o,v.a.name,v.a),Object(l.a)(o,d.a.name,d.a),Object(l.a)(o,"BaseCheckbox",f.b),o),data:function(){return{model:{email:"",firstName:"",lastName:"",password:"",role:"User"},roles:["Super Admin","Admin","User"]}},methods:{getError:function(e){return this.errors.first(e)},register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:t.sent&&(data={email:e.model.email,password:e.model.password,first_name:e.model.firstName,last_name:e.model.lastName,role:e.model.role},e.$store.dispatch("user/register",data));case 4:case"end":return t.stop()}}),t)})))()}}},h=(r(757),r(4)),component=Object(h.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container register-page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-7 mx-auto"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("card",{staticClass:"card-register card-white"},[r("template",{slot:"header"},[r("img",{staticClass:"card-img",attrs:{src:"img/card-primary.png",alt:"Card image"}}),e._v(" "),r("h4",{staticClass:"card-title"},[e._v("Register")])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{error:e.getError("First Name"),name:"First Name",placeholder:"First Name","addon-left-icon":"tim-icons icon-single-02"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),r("div",{staticClass:"col-md-6"},[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{error:e.getError("Last Name"),name:"Last Name",placeholder:"Last Name","addon-left-icon":"tim-icons icon-single-02"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1)]),e._v(" "),r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{error:e.getError("email"),name:"email",placeholder:"Email",autocomplete:"username","addon-left-icon":"tim-icons icon-email-85"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),e._v(" "),r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{error:e.getError("password"),name:"password",type:"password",placeholder:"Password",autocomplete:"new-password","addon-left-icon":"tim-icons icon-lock-circle"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}}),e._v(" "),r("base-button",{attrs:{slot:"footer","native-type":"submit",type:"primary",round:"",block:"",size:"lg"},slot:"footer"},[e._v("\n            Register\n          ")])],2)],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);