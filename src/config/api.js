const HOST = process.env.HOST || 'http://www.daiwei.org'
const api = {
  // 设置的请求host地址
  HOST,

  // 获取位置
  GET_ADRESS: `${HOST}/vue/server/home.php?inAjax=1&do=getAdress`,

  // 获取天气信息
  GET_WEATHER: `${HOST}/vue/server/home.php?inAjax=1&do=getWeather`,

  // 获取bing壁纸
  GET_BING_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getImageByBingJson`,

  // 获取个人首页图片集合
  GET_MINE_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getHomeImage`,

  // 获取个人所有的图片信息
  GET_ALL_MINE_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getAllImage`,

  // 获取友情链接地址
  GET_LINKS: `${HOST}/vue/server/home.php?inAjax=1&do=getLinksInfo`,

  // 获取笑话数据
  GET_JOKE: `${HOST}/vue/server/home.php?inAjax=1&do=getJokeInfo`,

  // 获取个人的标签
  GET_TIPS_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getTipsInfo`,

  // 更新个人标签
  UPDATE_TIPS_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=updataTipsInfo`,

  // 获取新闻信息
  GET_NEWS_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getNewsInfo`,

  // 获取资源信息中音频地址
  GET_RESOURCE_AUDIO: `${HOST}/vue/server/home.php?inAjax=1&do=getResourceAudio`,

  // 获取资源信息中视频地址
  GET_RESOURCE_VIDEO: `${HOST}/vue/server/home.php?inAjax=1&do=getResourceVideo`,

  // 获取建议和意见的内容
  GET_SUGGEST_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getSuggestInfo`,

  // 提交建议和意见
  SUB_SUGGEST_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=submitSuggestInfo`,

  // 获取网址更新内容
  GET_WEB_UPDATE_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getUpdateInfo`,

  // 获取作品列表
  GET_WORKS_LIST: `${HOST}/vue/server/home.php?inAjax=1&do=getWorksList`,

  // 判断是否要更新 在弹窗提示的时候使用
  IS_NEED_UPDATE: `${HOST}/vue/server/home.php?inAjax=1&do=isNeedUpdate`,

  // 更新注册信息
  UPDATE_SINGIN_INFO: `${HOST}/vue/server/user.php?inAjax=1&do=updateSigninInfo`,

  // 文件上传
  UPLOAD: `${HOST}/vue/server/upload.php`,

  // 更新用户信息
  UPDATE_USER_INFO: `${HOST}/vue/server/user.php?inAjax=1&do=updateUserInfo`,

  // 获取pic路由下图片的数据
  GET_PIC_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getImageCondition`,

  // 获取赞赏的人的信息
  GET_REWARD_LIST: `${HOST}/vue/server/home.php?inAjax=1&do=getRewardList`,

  // 个人中心数据获取
  GET_PERSONAL_INFO: `${HOST}/vue/server/user.php?inAjax=1&do=personalCenter`,

  // 登陆
  LOGIN: `${HOST}/vue/server/user.php?inAjax=1&do=login`,

  // 注册
  SINGIN: `${HOST}/vue/server/user.php?inAjax=1&do=singin`
}
export default api
