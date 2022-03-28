(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{781:function(_,t,v){"use strict";v.r(t);var a=v(11),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("Boxx"),_._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1-阻塞i-o模型"}},[_._v("1. 阻塞I/O模型")])]),v("li",[v("a",{attrs:{href:"#_2-非阻塞i-o模型"}},[_._v("2. 非阻塞I/O模型")])]),v("li",[v("a",{attrs:{href:"#_3-i-o复用模型"}},[_._v("3. I/O复用模型")])]),v("li",[v("a",{attrs:{href:"#_4-信号驱动i-o模型"}},[_._v("4. 信号驱动I/O模型")])]),v("li",[v("a",{attrs:{href:"#_5-异步i-o模型"}},[_._v("5. 异步I/O模型")])])])]),v("p"),_._v(" "),v("p",[_._v("借用知乎用于levin的回答，对各种模型讲个故事，描述下各个IO模型的区别：")]),_._v(" "),v("p",[_._v("故事情节为：老李去买火车票，三天后买到一张退票。参演人员（老李，黄牛，售票员，快递员），往返车站耗费1小时。")]),_._v(" "),v("h3",{attrs:{id:"_1-阻塞i-o模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-阻塞i-o模型"}},[_._v("#")]),_._v(" 1. 阻塞I/O模型")]),_._v(" "),v("p",[_._v("老李去火车站买票，排队三天买到一张退票。")]),_._v(" "),v("p",[_._v("耗费：在车站吃喝拉撒睡 3天，其他事一件没干。")]),_._v(" "),v("h3",{attrs:{id:"_2-非阻塞i-o模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-非阻塞i-o模型"}},[_._v("#")]),_._v(" 2. 非阻塞I/O模型")]),_._v(" "),v("p",[_._v("老李去火车站买票，隔12小时去火车站问有没有退票，三天后买到一张票。")]),_._v(" "),v("p",[_._v("耗费：往返车站6次，路上6小时，其他时间做了好多事。")]),_._v(" "),v("h3",{attrs:{id:"_3-i-o复用模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-i-o复用模型"}},[_._v("#")]),_._v(" 3. I/O复用模型")]),_._v(" "),v("ul",[v("li",[_._v("select/poll（有selector选择器，去轮询选择器）")])]),_._v(" "),v("p",[_._v("老李去火车站买票，委托黄牛，然后每隔6小时电话黄牛询问，黄牛三天内买到票，然后老李去火车站交钱领票。")]),_._v(" "),v("p",[_._v("耗费：往返车站2次，路上2小时，黄牛手续费100元，打电话17次")]),_._v(" "),v("ul",[v("li",[_._v("epoll（事件回调）")])]),_._v(" "),v("p",[_._v("老李去火车站买票，委托黄牛，黄牛买到后即通知老李去领，然后老李去火车站交钱领票。")]),_._v(" "),v("p",[_._v("耗费：往返车站2次，路上2小时，黄牛手续费100元，无需打电话")]),_._v(" "),v("h3",{attrs:{id:"_4-信号驱动i-o模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-信号驱动i-o模型"}},[_._v("#")]),_._v(" 4. 信号驱动I/O模型")]),_._v(" "),v("p",[_._v("老李去火车站买票，给售票员留下电话，有票后，售票员电话通知老李，然后老李去火车站交钱领票。")]),_._v(" "),v("p",[_._v("耗费：往返车站2次，路上2小时，免黄牛费100元，无需打电话")]),_._v(" "),v("h3",{attrs:{id:"_5-异步i-o模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-异步i-o模型"}},[_._v("#")]),_._v(" 5. 异步I/O模型")]),_._v(" "),v("p",[_._v("老李去火车站买票，给售票员留下电话，有票后，售票员电话通知老李并快递送票上门。")]),_._v(" "),v("p",[_._v("耗费：往返车站1次，路上1小时，免黄牛费100元，无需打电话")]),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("1同2的区别是：自己轮询")]),_._v(" "),v("p",[_._v("2同3的区别是：委托黄牛")]),_._v(" "),v("p",[_._v("3同4的区别是：电话代替黄牛")]),_._v(" "),v("p",[_._v("4同5的区别是：电话通知是自取还是送票上门")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("阻塞I/O模型：单线程一直阻塞直到事件发生才处理，期间干不了其他事情")])]),_._v(" "),v("li",[v("p",[_._v("非阻塞I/O模型：while(true) 不断循环看有没有事件发生才处理，期间可以干其他事情，但是需要自己不断的去监测")])]),_._v(" "),v("li",[v("p",[_._v("I/O复用模型：基于事件驱动（类似与页面的一个button一个事件），有事件发生才处理，期间可以干其他事情，可以理解有一个中间人selector替我们监听，\n有事件后通知我们去处理")])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th",[_._v("同步阻塞IO")]),_._v(" "),v("th",[_._v("伪异步IO")]),_._v(" "),v("th",[_._v("NIO")]),_._v(" "),v("th",[_._v("AIO")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("客户端数目 ：IO线程")]),_._v(" "),v("td",[_._v("1 : 1")]),_._v(" "),v("td",[_._v("m : n")]),_._v(" "),v("td",[_._v("m : 1")]),_._v(" "),v("td",[_._v("m : 0")])]),_._v(" "),v("tr",[v("td",[_._v("IO模型")]),_._v(" "),v("td",[_._v("同步阻塞IO")]),_._v(" "),v("td",[_._v("同步阻塞IO")]),_._v(" "),v("td",[_._v("同步非阻塞IO")]),_._v(" "),v("td",[_._v("异步非阻塞IO")])]),_._v(" "),v("tr",[v("td",[_._v("吞吐量")]),_._v(" "),v("td",[_._v("低")]),_._v(" "),v("td",[_._v("中")]),_._v(" "),v("td",[_._v("高")]),_._v(" "),v("td",[_._v("高")])]),_._v(" "),v("tr",[v("td",[_._v("编程复杂度")]),_._v(" "),v("td",[_._v("简单")]),_._v(" "),v("td",[_._v("简单")]),_._v(" "),v("td",[_._v("非常复杂")]),_._v(" "),v("td",[_._v("复杂")])])])]),_._v(" "),v("h2",{attrs:{id:"其他参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他参考"}},[_._v("#")]),_._v(" 其他参考")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/u013374645/article/details/82808301",target:"_blank",rel:"noopener noreferrer"}},[_._v("BIO、NIO、Netty示例demo"),v("OutboundLink")],1)])]),_._v(" "),v("Reward")],1)}),[],!1,null,null,null);t.default=r.exports}}]);