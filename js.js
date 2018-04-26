 //本地存储搜索最新十条数据
addLocalStorage: function (item) {
    var that = this;
    var arr=[];
    var storageDataList = localStorage.getItem("searchDataList");
    if (_g.ckeckNotNull(storageDataList)) {
        arr=JSON.parse(storageDataList);
        console.log(arr)
    }
    var addItem={
       goodsName:item
    }
    arr.unshift(addItem)
    if(arr.length>10){
        arr.pop()

    }
    localStorage.setItem("searchDataList",JSON.stringify(arr))
};
//页面上展示存在本地的数据
 showLocalDataList:function(){
    var storageDataList = localStorage.getItem("searchDataList");
    if (_g.ckeckNotNull(storageDataList)) {
        this.show = true
        this.shop = JSON.parse(storageDataList)
        console.log(this.shop)
    }else{
        this.show = false
    }
},