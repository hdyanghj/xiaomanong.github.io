//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user:{
      name: '杨洪举',
      sex: '男',
      age: '1988.08',
      minzu: '汉',
      xueli: '大专',
      xuexiao: '北京外国语大学',
      zhuanye: '计算机科学&技术',
      position: '［WEB前端攻城狮］',
      coordinate: '首都北京',
      jingyan:'八年前端开发',
      jiguan: '河北 邯郸 临漳(三国故地 六朝古都)',
      weixin: 'hongju_Yang',
      qq: '938246567',
      email: 'HDyanghj@gmail.com',
      mobile: '18810292567',
      www: 'www.imaring.com'
    },
    avatarUrl: '../../imgs/avatar.jpg',
    resume: '满怀激情  放飞梦想',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  clickphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18810292567'
    })
  },
  
  clickcopy: function (e) {
    // console.log(e)
    wx.setClipboardData({
      data: e._relatedInfo.anchorTargetText,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              icon: 'none',
              title: '复制成功',
              duration: 3000
            })
          }
        })
      }
    })

  },
  onLoad: function () {
    console.log("%c恭喜！天赐锦鲤砸中了你", "font-weight:bold");
    console.log("%c好嗨哟~感觉人生已达到了高潮", "color:red");
    console.log("%c本项目由码灵前端导航提供：http://www.imaring.com （码灵前端导航前端攻城狮的福利）", "color:green");
  },
  
})
