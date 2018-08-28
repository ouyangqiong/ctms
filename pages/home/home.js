Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    banners: [
      {
        id: 3,
        img: 'http://huihuishenghuo.com/huihui8/static/img/ban1.jpg',
        url: '',
        name: '摇一摇'
      },
      {
        id: 1,
        img: 'http://huihuishenghuo.com/huihui8/static/img/ban2.jpg',
        url: '',
        name: '净水器'
      },
      {
        id: 2,
        img: 'http://huihuishenghuo.com/huihui8/static/img/ban3.jpg',
        url: '',
        name: '旅拍啦'
      }
    ],
    icons: [
      {
        id: 1,
        img: '../../images/home/home_selected.png',
        name: '接单',
      },
      {
        id: 2,
        img: '../../images/location.png',
        name: '到仓',
      },
      {
        id: 3,
        img: '../../images/car.png',
        name: '装车',
      },
      {
        id: 4,
        img: '../../images/sign.png',
        name: '签收',
      },
      {
        id: 5,
        img: '../../images/location-disabled.png',
        name: '异常',
      },
      {
        id: 6,
        img: '../../images/image.png',
        name: '传图',
      }
    ]
  },
  taskTap: function (e) {
    wx.switchTab({
      url: '../task/task',
      success: function (res) {
        console.log("switch success")
        // success
      },
      fail: function (res) {
        console.log("switch failure:"+res)
        // fail
      },
      complete: function () {
        console.log("switch complete")
        // complete
      }
    })
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
