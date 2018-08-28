Page({
  /**
  * 页面的初始数据
  */
  data: {
    "task_type":"receive",
    "taskTplPathDict":{
      1: "template/all_task.wxml",
      2: "template/receive.wxml",
      3: "template/ship.wxml"
    },
    "taskTplDict": {
      1: "taskTpl",
      2: "taskTpl",
      3: "taskTpl"
    },
    "alltask":[
      {
        sendCount: 2
      },
      {
        sendCount: 3
      },
      {
        sendCount: 4
      },
      {
        sendCount: 8
      }
    ]
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    console.log("onload")
    var i=1
    this.setData({
      showfilter: true,
      showfilterindex: i
    })
  },
  setFilterPanel: function (e) {
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if (d.showfilterindex == i) {
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    } else {
      console.log(d.taskTplPathDict[i])
      this.setData({
        showfilter: true,
        showfilterindex: i
      })
    }
    console.log('显示第几个筛选类别：' + d.showfilterindex);
  },
});

