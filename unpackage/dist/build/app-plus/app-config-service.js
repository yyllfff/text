
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/Home","pages/Illness/Illness","pages/index/index","pages/Fuction/Fuction","pages/Position/Position","pages/login/login","pages/identity/identity","pages/Reg/Reg","pages/forg/forg","pages/Video/Video","pages/Yuying/Yuying","pages/Message/Message","pages/Wait/Wait","pages/Search/Search","pages/search-list/search-list","pages/conv/conv"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","scrollIndicator":"none"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/Illness/Illness","iconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","selectedIconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","text":"病情发展"},{"pagePath":"pages/Fuction/Fuction","iconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","selectedIconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","text":"语音视频"},{"pagePath":"pages/Home/Home","iconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","selectedIconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","text":"发现"},{"pagePath":"pages/Position/Position","iconPath":"static/picture/location.png","selectedIconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","text":"地理位置"},{"pagePath":"pages/index/index","iconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","selectedIconPath":"file:///D:/HBuilderX/remake--app/static/picture/19.png","text":"个人主页"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"remake--app","compilerVersion":"3.4.15","entryPagePath":"pages/Home/Home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现"}},{"path":"/pages/Illness/Illness","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"病情发展","scrollIndicator":"none"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/Fuction/Fuction","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"语音视频"}},{"path":"/pages/Position/Position","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"地理位置"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/identity/identity","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Reg/Reg","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false}},{"path":"/pages/forg/forg","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Video/Video","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Yuying/Yuying","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Message/Message","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Wait/Wait","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Search/Search","meta":{},"window":{"navigationBarBackgroundColor":"#FFFBF6","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"请输入搜索内容-","disabled":false,"align":"left","autoFocus":true,"borderRadius":"15px","backgroundColor":"#F7F7F7","placeholderColor":"#B3B3B3"},"buttons":[{"float":"right","color":"#636263","text":"搜索","fontSize":"16px","width":"60px"}]}}},{"path":"/pages/search-list/search-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/conv/conv","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
