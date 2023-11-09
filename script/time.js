// 获取时间轴元素的引用

var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var currentYear = document.getElementById('current-year');


// 根据滑块的值更新地图内容
slider.addEventListener('input', function () {
    var year = slider.value;
    // 根据年份更新地图内容，这里只是一个示例
    // 可以根据您的需求加载不同的图层或数据
    updateMapContent(year);
    // 更新当前年份显示
    currentYear.textContent = 'Year: ' + year;
  });
  
  // 函数用于根据年份更新地图内容（示例函数）
  function updateMapContent(year) {
    // 在这里根据年份更新地图内容
    // 可以加载不同的图层、标记或数据
    // 这里只是一个示例，您需要根据您的需求自定义该函数
  
    
  }


  markers.lion1 = createMarker({ lat:	30.0444 ,lng:31.2357}, 'lion','埃及開羅',{ categories: ['lion', '史前至夏商周','宗教信仰'] });
  markers.lion2 = createMarker({ lat:	37.8201	,lng:22.6513}, 'lion','希臘尼米亞',{ categories: ['lion', '史前至夏商周','宗教信仰'] });
  markers.lion3 = createMarker({ lat:	25.3176	,lng:82.9739 }, 'lion','印度瓦拉納西',{ categories:['lion', '史前至夏商周','宗教信仰']});
  markers.lion4 = createMarker({ lat:	36.1628	,lng:54.3338 }, 'lion','伊朗達姆甘',{ categories: ['lion', '秦漢','朝貢'] });
  markers.lion5 = createMarker({ lat:	39.4723	,lng:75.9893 }, 'lion','新疆喀什',{ category: ['lion', '秦漢','朝貢'] });
  markers.lion6 = createMarker({ lat:	36.7580	,lng:66.8966 }, 'lion','阿富汗巴爾赫',{ category: ['lion','秦漢','朝貢'] });
  markers.lion7 = createMarker({ lat:	41.1273	,lng:119.740 }, 'lion','遼寧喀左縣',{ category: ['lion','三國兩晉南北朝','身份象徵'] });
  markers.lion8 = createMarker({ lat:	40.1430	,lng:94.6618 },'lion','甘肅敦煌',{ category: ['lion','三國兩晉南北朝','宗教信仰'] });
  markers.lion9 = createMarker({ lat:	15.8801	,lng:108.338 }, 'lion','越南會安',{ category: ['lion','三國兩晉南北朝','軍事'] });
  markers.lion10 = createMarker({ lat:	34.6364	,lng:   112.4501 }, 'lion','河南洛陽',{ category: ['lion','三國兩晉南北朝','宗教信仰'] });
  markers.lion11 = createMarker({ lat:    33.3154	,lng:   44.3660 }, 'lion','伊拉克巴格達',{ category: ['lion','三國兩晉南北朝','朝貢'] });
  markers.lion12 = createMarker({ lat:    40.5204	,lng:   95.7822 }, 'lion','甘肅瓜州',{ category: ['lion','唐','宗教信仰'] });
  markers.lion13 = createMarker({ lat:    41.7207	,lng:   82.9430 }, 'lion','新疆庫車',{ category: ['lion','唐','朝貢'] });
  markers.lion14 = createMarker({ lat:    41.7407	,lng:   82.9530 }, 'lion','新疆庫車',{ category: ['lion','唐','文化娛樂']});
  markers.lion15 = createMarker({ lat:	39.627	,lng:   66.9749 }, 'lion','烏茲別克斯坦撒馬爾罕',{ category: ['lion','唐','朝貢'] });
  markers.lion16 = createMarker({ lat:	33.5138	,lng:	36.2765 }, 'lion','敘利亞大馬士革',{ category: ['lion','唐','朝貢'] });
  markers.lion17 = createMarker({ lat:	36.4707	,lng:	52.3466 }, 'lion','伊朗阿莫勒',{ category: ['lion','唐','朝貢'] });
  markers.lion18 = createMarker({ lat:	41.0082	,lng:	28.9784 }, 'lion','土耳其伊斯坦布爾',{ category: ['lion','唐','朝貢'] });
  markers.lion19 = createMarker({ lat:	53.7175	,lng:	91.4292 }, 'lion','俄羅斯亞巴坎',{ category: ['lion','唐','文化娛樂'] });
  markers.lion20 = createMarker({ lat:	34.7973	,lng:	114.3072 }, 'lion','河南開封',{ category: ['lion','宋' ,'文化娛樂']});
  markers.lion21 = createMarker({ lat:	34.7970	,lng:	114.3077 }, 'lion','河南開封',{ category: ['lion','宋','宗教信仰' ]});
  markers.lion22 = createMarker({ lat:	15.8801	,lng:	108.338 }, 'lion','越南會安',{ category: ['lion','宋' ,'朝貢']});
  markers.lion23 = createMarker({ lat:	38.1234	,lng:	46.2444}, 'lion','伊朗大不里士',{ category: ['lion','元','朝貢'] });
  markers.lion24 = createMarker({ lat:	21.3891	,lng:	39.8579 }, 'lion','沙特阿拉伯麥加',{ category: ['lion','元' ,'朝貢']});
  markers.lion25 = createMarker({ lat:	39.9042	,lng:	116.4074 }, 'lion','北京',{ category: ['lion','明','身份象徵'] });
  markers.lion26 = createMarker({ lat:	39.9245	,lng:	116.4074 }, 'lion','北京',{ category: ['lion','明','朝貢'] });
  markers.lion27 = createMarker({ lat:	42.9513	,lng:	89.1895 }, 'lion','新疆吐魯番',{ category: ['lion','明' ,'朝貢']});
  markers.lion28 = createMarker({ lat:	34.3462	,lng:	62.2047 }, 'lion','阿富汗赫拉特',{ category: ['lion','明','朝貢'] });
  markers.lion29 = createMarker({ lat:	13.7563	,lng:	100.5018 }, 'lion','泰國曼谷',{ category: ['lion','明','朝貢' ]});
  markers.lion30 = createMarker({ lat:	12.7855	,lng:	45.0185 }, 'lion','也門亞丁',{ category: ['lion','明','朝貢'] });
  markers.lion31 = createMarker({ lat:	27.1970	,lng:	56.2877 }, 'lion','伊朗阿拔斯港',{ category: ['lion','明','朝貢' ]});
  markers.lion32 = createMarker({ lat:	21.3891	,lng:	39.8379 }, 'lion','沙特阿拉伯麥加',{ category: ['lion','明','朝貢'] });
  markers.lion33 = createMarker({ lat:	41.0182	,lng:	28.9784 }, 'lion','土耳其伊斯坦布爾',{ category: ['lion','明','朝貢'] });
  markers.lion34 = createMarker({ lat:	-25.9682 ,lng:	32.5729 }, 'lion','莫桑比克馬普托',{ category: ['lion','清','朝貢'] });




  var markerCluster; // 声明 MarkerClusterer 变量

function handleCheckboxChange(checkboxId) {
    var checkbox = $('#' + checkboxId);

    checkbox.change(function () {
        var selectedSubcategories = [];
        $('.subcategory-container:visible input:checkbox:checked').each(function() {
            selectedSubcategories.push($(this).val());
        });

      
        var selectedCategories = [];
        $('.category-checkbox:checked').each(function () {
            selectedCategories.push($(this).val());
        });

        
      
        var visibleMarkers = [];

    // 根据选中的大类别和小类别，将符合条件的标记添加到 visibleMarkers 数组中
    for (var key in markers) {
        var marker = markers[key];
        if (marker.attributes && marker.attributes.categories) {
            var markerCategories = marker.attributes.categories;
            var isCategoryVisible = selectedCategories.length === 0 || selectedCategories.every(function (category) {
                return markerCategories.includes(category);
            });

            var isSubcategoryVisible = selectedSubcategories.length === 0 || selectedSubcategories.some(function (subcategory) {
                return markerCategories.includes(subcategory);
            });

            if (isCategoryVisible && isSubcategoryVisible) {
                marker.setMap(map);
                visibleMarkers.push(marker);
                 // 将可见的标记添加到 visibleMarkers 数组中
            } else {
                marker.setMap(null);
                
            }
        }
    }
   

    if (markerCluster) {
        markerCluster.clearMarkers();
    }
    // 创建 MarkerClusterer 对象，将 visibleMarkers 数组传递给它
    var markerCluster=new MarkerClusterer(map, visibleMarkers, {
        gridSize: 1, // 设置网格像素大小
        minimumClusterSize: 2,
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        // styles: [{
        //     url: '/media/animal_icon/lion1.png', // 聚合图标的URL
        //    width: 48, // 图标宽度
        //     height: 48, // 图标高度
        //     textSize: 14 // 文字大小
        // }]
    });
    
    });
}

var markerCluster; // 声明 MarkerClusterer 变量

function handleCheckboxChange(checkboxId) {
    var checkbox = $('#' + checkboxId);

    checkbox.change(function () {
        var selectedSubcategories = [];
        $('.subcategory-container:visible input:checkbox:checked').each(function() {
            selectedSubcategories.push($(this).val());
        });

        var selectedCategories = [];
        $('.category-checkbox:checked').each(function () {
            selectedCategories.push($(this).val());
        });

        var visibleMarkers = [];

        for (var key in markers) {
            var marker = markers[key];
            if (marker.attributes && marker.attributes.categories) {
                var markerCategories = marker.attributes.categories;
                var isCategoryVisible = selectedCategories.length === 0 || selectedCategories.every(function (category) {
                    return markerCategories.includes(category);
                });

                var isSubcategoryVisible = selectedSubcategories.length === 0 || selectedSubcategories.some(function (subcategory) {
                    return markerCategories.includes(subcategory);
                });

                if (isCategoryVisible && isSubcategoryVisible) {
                    marker.setMap(map);
                    visibleMarkers.push(marker);
                } else {
                    marker.setMap(null);
                }
            }
        }

        // 清除之前的 MarkerClusterer
        if (markerCluster) {
            markerCluster.clearMarkers();
        }

        // 创建新的 MarkerClusterer，只聚合当前显示的标记
        markerCluster = new MarkerClusterer(map, visibleMarkers, {
            gridSize: 50,
            minimumClusterSize: 2,
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    });
}
