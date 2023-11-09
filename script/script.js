// 图标信息
var iconInfo = {
    camel: { url: '/media/animal_icon/camel.PNG', scaledSize: new google.maps.Size(50, 50)},
    cat: { url: '/media/animal_icon/cat.png' },
    dog: { url: '/media/animal_icon/dog.png', scaledSize: new google.maps.Size(50, 50) },
    rhino: { url: '/media/animal_icon/rhino.png' },
    leopard: { url: '/media/animal_icon/leopard.png', scaledSize: new google.maps.Size(50, 50) },
    lion: { url: '/media/animal_icon/lion1.png',scaledSize: new google.maps.Size(25, 25) },
    elephant: { url: '/media/animal_icon/elephant.png', scaledSize: new google.maps.Size(50, 50) },
};

// 地图、标记、复选框等的全局变量
var map;
var markers = {};

function initMap() {
    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-75, -180),
        new google.maps.LatLng(75, 180)
    );

    map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: 34.123, lng: 108.456 },
        zoom: 3,
        minZoom: 2,
        maxZoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        restriction: {
            latLngBounds: bounds,
            strictBounds: true,
        },
        // language:'zh_HK'
    });

    map.set('styles', mapstyle);


}
function createMarker(position, type, label, categories, content) {
    // 在地图上创建标记
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.lat, position.lng),
        map: null,
        icon: iconInfo[type],
        title: label,
        attributes: {
            A: categories.A || [],
            B: categories.B || [],
            C: categories.C || [],
            D: categories.D || [],
            E: categories.E || []
        },
        content: content
    });

    // 如果有特定大小需求，设置标记的大小
    if (iconInfo[type].scaledSize) {
        marker.setIcon(iconInfo[type]);
    }

    return marker;
}


// function createMarker(position, type, label,customAttributes,content) {
//     // 在地图上创建标记
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(position.lat, position.lng),
//         map: null,
//         icon: iconInfo[type],
//         title: label,
    
//         attributes:customAttributes,
//         content:content
//     });

//     // 如果有特定大小需求，设置标记的大小
//     if (iconInfo[type].scaledSize) {
//         marker.setIcon(iconInfo[type]);
//     }


// //在这个例子中，



//     return marker;
// }

// 关联复选框和标记
function attachCheckboxHandler(checkboxId, markerType) {
    var checkbox = $('#' + checkboxId);

    checkbox.change(function () {
        if (checkbox.is(':checked')) {
            markers[markerType].setMap(map);
        } else {
            markers[markerType].setMap(null);
        }
    });
}

// 显示选项卡内容
function showTab(tabName) {
    // 隐藏所有选项卡内容
    $('.tab-content').hide();

    // 显示指定选项卡内容
    $('#' + tabName).show();
}

// 在页面加载后的初始化


handleCheckboxChange('landCheckbox', '陸上絲綢之路');
handleCheckboxChange('oceanCheckbox', '海上絲綢之路');


handleCheckboxChange('camel-Checkbox', 'camel');
handleCheckboxChange('cat-Checkbox', 'cat');
handleCheckboxChange('dogCheckbox', 'dog');
handleCheckboxChange('rhinoCheckbox', 'rhino');
handleCheckboxChange('leopardCheckbox', 'leopard');
handleCheckboxChange('lionCheckbox', 'lion');
handleCheckboxChange('elephantCheckbox', 'elephant');

handleCheckboxChange('xia-Checkbox', '史前至夏商周');
handleCheckboxChange('qinhan-Checkbox', '秦漢');
handleCheckboxChange('sanguo-Checkbox', '三國兩晉南北朝');
handleCheckboxChange('tang-Checkbox', '唐');
handleCheckboxChange('song-Checkbox', '宋');
handleCheckboxChange('yuan-Checkbox', '元');
handleCheckboxChange('ming-Checkbox', '明');
handleCheckboxChange('qing-Checkbox', '清');

handleCheckboxChange('zongjiao-Checkbox', '宗教信仰');
handleCheckboxChange('chaogong-Checkbox', '朝貢');
handleCheckboxChange('shenfen-Checkbox', '身份象徵');
handleCheckboxChange('junshi-Checkbox', '軍事');
handleCheckboxChange('wenhua-Checkbox', '文化娛樂');

handleCheckboxChange('zhong-Checkbox', '中亞');
handleCheckboxChange('nan-Checkbox', '南亞');
handleCheckboxChange('xi-Checkbox', '西亞');
handleCheckboxChange('bei-Checkbox', '北亞');
handleCheckboxChange('dong-Checkbox', '東亞');
handleCheckboxChange('dongnan-Checkbox', '東南亞');

handleCheckboxChange('feizhou-Checkbox', '非洲');
handleCheckboxChange('ouzhou-Checkbox', '歐洲');
handleCheckboxChange('meizhou-Checkbox', '美洲');





var categoryToggleIcon = $('#toggle');
var categoryContainer = $('.category-container');
var isContainerVisible = true;

// 添加点击事件处理程序


// function handleCheckboxChange(checkboxId) {
//     var checkbox = $('#' + checkboxId);

//     checkbox.change(function () {
//         // 获取每个大类中被选中的小类别的并集
//         var selectedSubcategories = [];
//         $('.subcategory-container:visible').each(function() {
//             var subcategory = $('#' + $(this).attr('id') + ' input:checkbox:checked').map(function() {
//                 return $(this).val();
//             }).get();
//             selectedSubcategories = selectedSubcategories.concat(subcategory);
//         });

//         // 判断是否有被选中的大类别
//         var selectedCategories = [];
//         $('.category-checkbox:checked').each(function () {
//             selectedCategories.push($(this).val());
//         });

//         // 显示符合选中大类别和小类别的标记
//         for (var key in markers) {
//             var marker = markers[key];
//             if (marker.attributes && marker.attributes.categories) {
//     var markerCategories = marker.attributes.categories;
//     var isCategoryVisible = selectedCategories.length === 0 || selectedCategories.every(function (category) {
//         return markerCategories.includes(category);
//     });

//     var isSubcategoryVisible = selectedSubcategories.length === 0 || selectedSubcategories.some(function (subcategory) {
//         return markerCategories.includes(subcategory);
//     });

//     if (isCategoryVisible && isSubcategoryVisible) {
//         marker.setMap(map);
//     } else {
//         marker.setMap(null);
//     }
// }

//         }
//     });
// }

// var markerCluster; // 声明 MarkerClusterer 变量
// var visibleMarkers = []; // 可见标记的数组
// // 

// function handleCheckboxChange(checkboxId) {
//     var checkbox = $('#' + checkboxId);

//     checkbox.change(function () {
//         var selectedCategories = []; // 存储选中的复选框值的数组
//         $('.category-checkbox:checked').each(function () {
//             selectedCategories.push($(this).val());
//         });
    
//         // 清空当前地图上的所有标记
//         visibleMarkers.forEach(function(marker) {
//             marker.setMap(null);
//         });
        
//         // 将符合选中大类别和小类别的标记添加到 visibleMarkers 数组中
//         visibleMarkers = [];
//         for (var key in markers) {
//             var marker = markers[key];
//             if (marker.attributes && marker.attributes.categories) {
//                 var markerCategories = marker.attributes.categories;
//                 var isCategoryVisible = selectedCategories.length === 0 || selectedCategories.every(function (category) {
//                     return markerCategories.includes(category);
//                 });
    
//                 if (isCategoryVisible) {
//                     marker.setMap(map);
//                     visibleMarkers.push(marker);
//                     // 将可见的标记添加到 visibleMarkers 数组中
//                 } else {
//                     marker.setMap(null);
//                 }
//             }
//         }
    

//         // 清除当前的聚合器
//         if (markerCluster) {
//             markerCluster.clearMarkers();
//         }

//         // 创建新的聚合器
//         markerCluster = new MarkerClusterer(map, visibleMarkers, {
//             gridSize: 2,  // 合适的网格大小
//             minimumClusterSize: 3,  // 至少 2 个标记时才进行聚合
//             styles: [
//                 { url: 'media/animal_icon/lion_gather.png', width: 50, height: 40, textSize: 12, textColor: 'black' },
//             ]
//         });

  
        

        
//     });

    


// }

var filteredMarkers = [];

function filterMarkers() {
    // 清空上次筛选的结果
    filteredMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    filteredMarkers = [];

    var selectedCategories = getSelectedCategories();

    // 对每个标记进行筛选
    for (var key in markers) {
        var marker = markers[key];
    
        if (marker.attributes && (marker.attributes.A || marker.attributes.B || marker.attributes.C || marker.attributes.D || marker.attributes.E)) {
            var markerCategories = {
                A: marker.attributes.A || [],
                B: marker.attributes.B || [],
                C: marker.attributes.C || [],
                D: marker.attributes.D || [],
                E: marker.attributes.E || []
            };
    
           
            
    
            var isMatching = selectedCategories.every(function(categoryGroup) {
                return categoryGroup.some(function(subCategory) {
                    return markerCategories.A.includes(subCategory) || 
                           markerCategories.B.includes(subCategory) || 
                           markerCategories.C.includes(subCategory) || 
                           markerCategories.D.includes(subCategory) || 
                           markerCategories.E.includes(subCategory);
                });
            });
    
            
    
            if (isMatching) {
                marker.setMap(map);
                filteredMarkers.push(marker);
            }
        }
    }
    

    // 清除当前的聚合器
    if (markerCluster) {
        markerCluster.clearMarkers();
    }

    // 创建新的聚合器
    // markerCluster = new MarkerClusterer(map, filteredMarkers, {
    //     gridSize: 2,
    //     minimumClusterSize: 3,
    //     styles: [
    //         { url: 'media/animal_icon/lion_gather.png', width: 50, height: 40, textSize: 12, textColor: 'black' },
    //     ]
    //});
}

function getSelectedCategories() {
    var selectedCategories = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: []
    };

    // 遍历所有复选框
    $('.category-checkbox:checked').each(function() {
        var category = $(this).data('category');
        var subCategory = $(this).val();
        if (subCategory !== '') {
            selectedCategories[category].push(subCategory);
        }
    });

    // 如果某个大类别下没有选择任何子类别，但大类别不是D，则默认选择该大类别下的所有非空子类别
    for (var category in selectedCategories) {
        if (category !== 'D' && selectedCategories[category].length === 0) {
            $('input[data-category="' + category + '"]').each(function() {
                var subCategoryValue = $(this).val();
                // 检查子类别是否为空，如果不为空则加入选择列表
                if (subCategoryValue !== '') {
                    selectedCategories[category].push(subCategoryValue);
                }
            });
        }
    }

    // 移除空的大类别
    for (var category in selectedCategories) {
        if (selectedCategories[category].length === 0) {
            delete selectedCategories[category];
        }
    }

    var formattedCategories = Object.values(selectedCategories).map(function(subCategories) {
        return subCategories;
    });

    return formattedCategories;
}




function handleCheckboxChange(checkboxId, category) {
    var checkbox = $('#' + checkboxId);
    checkbox.change(function () {
        filterMarkers();
    });
}
$('.category-checkbox').change(function() {
    filterMarkers();
});


// function handleCheckboxChange(checkboxId, category) {
//     var checkbox = $('#' + checkboxId);

//     checkbox.change(function () {
//         // 判断复选框是否被选中
//         if (checkbox.is(':checked')) {
//             // 显示符合该类别的标记
//             for (var key in markers) {
//                 var marker = markers[key];
//                 if (marker.attributes && marker.attributes.categories && marker.attributes.categories.includes(category)) {
//                     marker.setMap(map);
//                 }
//             }
//         } else {
//             // 隐藏符合该类别的标记
//             for (var key in markers) {
//                 var marker = markers[key];
//                 if (marker.attributes && marker.attributes.categories && marker.attributes.categories.includes(category)) {
//                     marker.setMap(null);
//                 }
//             }
//         }
//     });
// }



// 获取图标元素
var toggleIcon = document.getElementById('toggle');

// 获取整个.category-container
var categoryContainer = document.querySelector('.category-container');

// 添加点击事件处理程序

toggleIcon.addEventListener('click', function() {
    if (categoryContainer.style.display === 'flex' || categoryContainer.style.display === '') {
        categoryContainer.style.display = 'none';
        toggleIcon.style.left = '0'; // 将图标移动到屏幕的左边缘
    } else {
        categoryContainer.style.display = 'flex';
        toggleIcon.style.left = '10%'; // 将图标移动回初始位置
    }
});

var slider = document.getElementById('slider');
var controlImage = document.getElementById('controlImage');
var currentValue = parseInt(slider.value);
var intervalId = null;

// 点击图片的事件处理
controlImage.addEventListener('click', function() {
    if (intervalId === null) {
        // 如果 intervalId 为 null，表示当前是停止状态，需要开始自动拖动
        controlImage.src = 'media/animal_icon/leopard.png'; // 切换到暂停图片
        intervalId = setInterval(autoSlide, 50); // 每隔 50 毫秒自动拖动一次
    } else {
        // 否则，当前是运行状态，需要停止自动拖动
        clearInterval(intervalId);
        intervalId = null;
        controlImage.src = 'media/animal_icon/dog.png'; // 切换回播放图片
    }
});

// 自动拖动滑块的函数
function autoSlide() {
    currentValue += 1; // 每次增加 10，你可以根据需要调整
    slider.value = currentValue;


    slider.dispatchEvent(new Event('input')); // 触发 input 事件，模拟用户拖动滑块
}

// 添加滑块值变化的事件监听器，以更新 currentValue
slider.addEventListener('input', function() {
    currentValue = parseInt(slider.value);
});

function toggleAsiaContainer() {
    var asiaContainer = document.getElementById('asiaContainer'); // 获取亚洲地区的容器
    var asiaCheckboxes = asiaContainer.querySelectorAll('.category-checkbox'); // 获取亚洲地区的子复选框

    // 切换亚洲地区容器的显示和隐藏状态
    if (asiaContainer.style.display === 'none' || asiaContainer.style.display === '') {
        asiaContainer.style.display = 'block';
        // 自动勾选亚洲地区的所有子复选框
        asiaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    } else {
        asiaContainer.style.display = 'none';
        // 取消勾选亚洲地区的所有子复选框
        asiaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
    filterMarkers();
}


