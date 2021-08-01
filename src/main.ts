import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';
import { Button } from 'vant';


const app = createApp(App);
app.use(store);
app.use(router);

app.use(NavBar);
app.use(Grid);
app.use(GridItem);
app.use(Button);
app.mount('#app');
