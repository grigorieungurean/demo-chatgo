(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{311:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(313),c=t.n(l);a.a=function(e){return n.a.createElement("span",{className:c.a.name},e.fullName)}},312:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(314),c=t.n(l);a.a=function(e){return n.a.createElement("span",{className:c.a.date},e.dateTime)}},313:function(e,a,t){e.exports={name:"name_name__2kJBL"}},314:function(e,a,t){e.exports={date:"date_date__1H5JU"}},317:function(e,a,t){e.exports={chat:"chat_chat__1l5fY",activ:"chat_activ__u_WOU",content:"chat_content__1kC4O",info:"chat_info__2bD9p",message:"chat_message__3OlB0"}},318:function(e,a,t){e.exports={dialog:"dialog_dialog__1FUEM",header:"dialog_header__1oKMh",title:"dialog_title__1KClF",interlocutor:"dialog_interlocutor__1MpC0",list:"dialog_list__1UoF9",form:"dialog_form__3AaVr",text:"dialog_text__2mFCB",tweet:"dialog_tweet__29Atd"}},319:function(e,a,t){e.exports={message:"message_message__1LHq9",content:"message_content__2IIS9",info:"message_info__20Ga0",text:"message_text__2xsaZ"}},320:function(e,a,t){e.exports={dialogs:"dialogs_dialogs__1Er9-",chats:"dialogs_chats__2fH7P",dialog:"dialogs_dialog__NgbLr",title:"dialogs_title__Ki_im",descr:"dialogs_descr__3_Hra"}},335:function(e,a,t){"use strict";t.r(a);var s=t(130),n=t(9),l=t(0),c=t.n(l),i=t(95),m=t(311),r=t(312),o=t(317),d=t.n(o),_=t(309),u=function(e){return c.a.createElement(_.a,{className:d.a.chat,activeClassName:d.a.activ,to:"/dialogs/".concat(e.id)},c.a.createElement(i.a,{path:e.senderAvatar,size:30}),c.a.createElement("div",{className:d.a.content},c.a.createElement("div",{className:d.a.info},c.a.createElement(m.a,{firstName:e.fullName.firstName,lastName:e.fullName.lastName}),c.a.createElement(r.a,{dateTime:e.dateTime})),c.a.createElement("p",{className:d.a.message},e.message)))},g=t(89),f=t(131),N=t(28),E=t(73),p=t(318),h=t.n(p),v=t(319),b=t.n(v),w=function(e){return c.a.createElement("div",{className:b.a.message},c.a.createElement(i.a,{path:e.senderAvatar,size:30}),c.a.createElement("div",{className:b.a.content},c.a.createElement("div",{className:b.a.info},c.a.createElement(m.a,{firstName:e.fullName.firstName,lastName:e.fullName.lastName}),c.a.createElement(r.a,{dateTime:e.dateTime})),c.a.createElement("p",{className:b.a.text},e.message)))},M=Object(E.a)(50),x=Object(f.a)({form:"dialogAddMessageForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit,className:h.a.form},c.a.createElement(g.a,{component:N.b,validate:[E.b,M],name:"newMessageBody",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0442\u0435\u043a\u0441 \u0437\u0430\u043f\u0438\u0441\u0438",className:h.a.text}),c.a.createElement("button",{className:h.a.tweet},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))}),O=function(e){var a=e.messages.map(function(e){return c.a.createElement(w,{key:e.id,fullName:e.fullName,message:e.message,dateTime:e.time})});return c.a.createElement("div",{className:h.a.dialog},c.a.createElement("div",{className:h.a.header},c.a.createElement("h2",{className:h.a.title},"\u0414\u0438\u0430\u043b\u043e\u0433"),c.a.createElement("span",{className:h.a.interlocutor},"c ",c.a.createElement(m.a,{name:"\u0415\u043b\u0435\u043d\u0430 \u0423\u043d\u0433\u0443\u0440\u044f\u043d"}))),c.a.createElement("div",{className:h.a.list},a),c.a.createElement(x,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},j=t(320),y=t.n(j),B=function(e){var a=e.dialogsPage.dialogs.map(function(e){return c.a.createElement(u,{key:e.id,fullName:e.fullName,message:e.lastMessage,dateTime:e.time,id:e.id})});return c.a.createElement("main",{className:y.a.dialogs},c.a.createElement("div",{className:y.a.chats},c.a.createElement("h2",{className:y.a.title},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),a),c.a.createElement(O,{messages:e.dialogsPage.messages,updateNewMessageBody:e.updateNewMessageBody,sendMessage:e.sendMessage,newMessageBody:e.dialogsPage.newMessageBody}))},A=t(30),k=t(31),T=t(33),C=t(32),P=t(307),F=function(e){return{isAuth:e.auth.isAuth}},H=t(7);a.default=Object(H.d)(Object(n.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(s.b)(a))}}}),function(e){var a=function(a){Object(T.a)(s,a);var t=Object(C.a)(s);function s(){return Object(A.a)(this,s),t.apply(this,arguments)}return Object(k.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(P.a,{to:"/login"})}}]),s}(c.a.Component);return Object(n.b)(F)(a)})(B)}}]);
//# sourceMappingURL=4.b8b56ed5.chunk.js.map