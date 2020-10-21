import Vue from "vue";
// import './theme/index.css'
import { Button, Message, InfiniteScroll, Tree, Pagination, Table, TableColumn, DatePicker } from "element-ui";
import '../element-variables.scss'
import lang from 'element-ui/lib/locale/lang/zh-CN'
// import lang from 'element-ui/lib/locale/lang/en'
// 从 element ui 自带的语言库中拿到英文
import locale from 'element-ui/lib/locale'
// 从 element ui 内获取到自带的 local 对象，该对象下有方法可以设置国际化语言
locale.use(lang)
// 因为我们使用的是 element 的按需加载，所以不管是组件还是方法都得使用 use 或者 prototype 设成全局的
Vue.prototype.$message = Message;
Vue.use(Button);
Vue.use(Tree);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(InfiniteScroll);
// Vue.use(Message);
