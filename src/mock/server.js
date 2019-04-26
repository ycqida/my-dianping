
const Koa = require('koa');
var Router = require('koa-router');
const sleep = require('sleep-promise');
const app = new Koa();
var router = new Router();


router.get('/',  (ctx,next) => {
    ctx.body = 'hello koa !'
});

// router.get('/api',  (ctx,next) => {
//     ctx.body = 'test data'
// });
 

// 首页广告
var homeAdDate = require('./home/ad.js');
router.get('/api/homead', (ctx, next) => { 
    ctx.body = homeAdDate; 
    next();
});

//首页猜你喜欢
var listData = require('./home/list.js');
router.get('/api/homelist/:city/:page', async(ctx, next) => {
    console.log('首页 —— 推荐列表（猜你喜欢）')
    await sleep(2000);
    //参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市:' + paramsCity + '当前页数: ' + paramsPage);
    ctx.body = listData;
    next();
})


//订单列表
const orderList = require('./orderlist/orderlist.js')
router.get('/api/orderlist/:username', (ctx,next) => {
    console.log('订单列表');
    
    const params = ctx.params;
    const username = params.username;

    console.log('用户名' + username);
    ctx.body = orderList;
    next();
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3200);