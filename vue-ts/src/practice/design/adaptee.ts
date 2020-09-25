let googleMap = {
    show: function () {
        console.log("开始渲染谷歌");
    }
}

let baiduMap = {
    display: function () {
        console.log("开始渲染百度");
    }
}

let baiduMapAdaptee = {
    show: function () {
        baiduMap.display();
    }
}

let renderMap = function (map:any) {
    if (map.show instanceof Function) {
        map.show();
    }
};
export default  function main () {
    renderMap(googleMap);
    renderMap(baiduMapAdaptee);
}

