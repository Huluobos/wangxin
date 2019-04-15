
import Vue from 'vue'
import App from './App'
import router from './router'
import myAxios from './util/Axios/Axios'
import BaiduMap from 'vue-baidu-map'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

Vue.use(MintUI)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'GBmzIpvPkdA8YzDPtIN6XiF20j2ugx9V',
})
Vue.use(Lazyload);
Vue.use(InfiniteScroll);

import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Radio } from 'mint-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

