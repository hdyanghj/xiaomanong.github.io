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
      xuexiao: '北京外国语学院',
      zhuanye: '计算机科学&技术',
      position: '［WEB前端攻城狮］',
      coordinate: '首都北京',
      jingyan:'七年前端开发',
      jiguan: '河北 邯郸 临漳(三国故地 六朝古都)',
      weixin: 'hongju_Yang',
      qq: '938246567',
      email: 'HDyanghj@gmail.com',
      mobile: '18810292567',
    },
    avatarUrl: '../../imgs/avatar.jpg',
    resume: '满怀激情  放飞梦想',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
