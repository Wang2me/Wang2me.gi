window.onload = function() {

    initMap();

    // 关联复选框和标记

       // 初始化标记
    //    markers.camel1 = createMarker({ lat: 34.123, lng: 108.456 }, 'camel');
    //    markers.camel2 = createMarker({ lat: 35.123, lng: 108.456 }, 'camel');
   
    //    markers.cat1 = createMarker({ lat: 36.123, lng: 108.456 }, 'cat');
    //    markers.cat2 = createMarker({ lat: 37.123, lng: 108.456 }, 'cat');
   
    //    markers.dog1 = createMarker({ lat: 35.123, lng: 108.456 }, 'dog');
    //    markers.dog2 = createMarker({ lat: 36.123, lng: 148.456 }, 'dog');
   
   
   
    //    markers.rhino1 = createMarker({ lat: 50.123, lng: 108.456 }, 'rhino');
    //    markers.rhino2 = createMarker({ lat: 30.123, lng: 108.456 }, 'rhino');
   
    //    markers.leopard1 = createMarker({ lat: 31.133, lng: 108.456 }, 'leopard');
    //    markers.leopard2 = createMarker({ lat: 31.123, lng: 108.456 }, 'leopard');
   //狮子


markers.lion1 = createMarker({ lat:	30.0444 ,lng:31.2357}, 'lion','埃及開羅',{ A:['lion'], B:['史前至夏商周'],C:['宗教信仰'],D:[''],E:['非洲'] }
   ,{  title: '描述',
       description: '生有翅膀的獅子是古代中東地區的典型神獸形象，古埃及的斯芬克斯就是這樣一種神獸。斯芬克斯有一對翅膀、獅子的身體和人的頭。位於埃及吉薩的獅身人面像，因其被視為古代世界七大奇跡之一，而可能是世界上最著名的斯芬克斯雕像了。'
       ,reference:'1. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁36-38。<br>&emsp;&emsp;&emsp;2. Memphis and its Necropolis – the Pyramid Fields from Giza to Dahshur, UNESCO World Heritage Convention Webstie, whc.unesco.org/zh/list/86.'
       ,imag:'media/lion/212 Great Sphinx of Giza.jpg'
       ,referenceUrl:'whc.unesco.org/zh/list/86.'
    });


markers.lion2 = createMarker({ lat:	37.8201	,lng:22.6513}, 'lion','希臘尼米亞',{ A:['lion'], B:['史前至夏商周'],C:['宗教信仰'],D:[''],E:['歐洲'] },
   {title: '描述'  
	,description:'海格力斯是古希臘神話中的半神半英雄，他曾經完成了十二件被稱為｢不可能完成｣的偉績，其中第一件就是殺死尼米亞的獅子。在伯羅奔尼撒，海格力斯殺死了獅子並獲得了它的皮毛。由是，｢海格力斯和尼米亞獅子｣成為了歐洲文化中讚美英雄的武力的典型形象。例如，在這件古希臘的雙耳陶罐上就出現了描繪了海格力斯與獅子搏鬥場景的繪畫。這件陶罐的年代大約為公元前540年，現存於美國紐約大都會博物館。'  
	,reference:'1. Madeleine, "What were the 12 Labors of Hercules?", THEOI Greek Methology website, (13 September 2019), www.theoi.com/articles/what-were-the-12-labors-of-hercules/.<br>&emsp;&emsp;&emsp;2. Terracotta amphora (jar), The Metropolitan Museum of Art Website, www.metmuseum.org/art/collection/search/253608.'  
	,image:'media/lion/213 Terracotta amphora (jar).jpg'
	,referenceUrl:''
    });

markers.lion3 = createMarker({ lat:	25.3176	,lng:82.9739 }, 'lion','印度瓦拉納西',{ A:['lion'], B:['史前至夏商周'],C:['宗教信仰'],D:[''],E:['南亞']},
   {title: '描述'  
	,description:'獅子在佛教文化中有著神聖的意義。據說，佛祖釋迦牟尼的化身之一就是獅子。在公元前三世紀，印度孔雀王朝的第三位君主阿育王崇尚佛教，他在佛教聖地鹿野苑建造了許多雕刻著獅子的石柱，象徵著佛法的傳播。'  
	,reference:'1. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁36-38。<br>&emsp;&emsp;&emsp;2. Capital of Ashokan pillar, Archaeological Museum Sarnath Website, www.sarnathmuseumasi.org/gallery/Gallery3%20Acc%20No%20355.html.'  
	,image:'media/lion/214 Capital of Ashokan pillar.jpg'
	,referenceUrl:''});

markers.lion4 = createMarker({ lat:	36.1628	,lng:54.3338 }, 'lion','伊朗達姆甘',{ A:['lion'], B:['秦漢'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'獅子不是中國的原生物種，其傳入依靠的是西域國家的朝貢。章和元年（公元87年），安息（今伊朗）國王遣使向東漢進貢獅子，這是中國史書中最早的關於貢獅的明確記載。此後，永元十三年（公元101年），安息再次向東漢進貢獅子和鴕鳥。'  
	,reference:'1. 范曄，《後漢書·西域傳第七十八》（北京：中華書局，1997），頁2918。'  
	,image:''
	,referenceUrl:''});//河南洛阳

markers.lion5 = createMarker({ lat:	39.4723	,lng:75.9893 }, 'lion','新疆喀什',{ A:['lion'], B:['秦漢'],C:['朝貢'],D:['陸上絲綢之路'],E:['東亞'] },
   {title: '描述'  
	,description:'陽嘉二年（公元133年），疏勒國（今新疆喀什）向東漢進貢獅子和瘤牛。'  
	,reference:'1. 范曄，《後漢書·西域傳第七十八》（北京：中華書局，1997），頁2927。'  
	,image:''
	,referenceUrl:''});//河南洛阳

markers.lion6 = createMarker({ lat:	36.7580	,lng:66.8966 }, 'lion','阿富汗巴爾赫',{ A:['lion'],B:['秦漢'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'章和元年（公元87年），大月氏（今阿富汗）向東漢進貢獅子。'  
	,reference:'1. 范曄，《後漢書·肅宗孝章帝紀第三》（北京：中華書局，1997），頁158。'  
	,image:''
	,referenceUrl:''});//河南洛阳

markers.lion7 = createMarker({ lat:	41.1273	,lng:119.740 }, 'lion','遼寧喀左縣',{ A:['lion'],B:['三國兩晉南北朝'],C:['身份象徵'],D:['陸上絲綢之路'],E:['東亞']},
   {title: '描述'  
	,description:'在西晉張華所著的《博物志》中，記載了一個曹操獵獅的故事，其內容大致為：曹操率領軍隊討伐烏桓，在白狼山偶遇一隻獅子，曹操率領數百士兵獵殺了這隻獅子並帶回洛陽。'  
	,reference:'1. 張華，《博物志·卷之三》（中國國家圖書館藏明弘治十八年賀泰刻本，中國國家數字圖書館·中華古籍資源庫），網址：read.nlc.cn/OutOpenBook/OpenObjectBook?aid=892&bid=103176.0。<br>&emsp;&emsp;&emsp;2. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁185-190。'  
	,image:'media/lion/219 北凉-272窟龛内南壁-说法图.webp'
	,referenceUrl:''});

markers.lion8 = createMarker({ lat:	40.1130	,lng:94.6618 },'lion','甘肅敦煌',{ A:['lion'],B:['三國兩晉南北朝'],C:['宗教信仰'],D:['陸上絲綢之路'],E:['東亞'] },
   {title: '描述'  
	,description:'隨著佛教在中國的傳播，獅子的形象也逐漸在古代中國流行起來。敦煌莫高窟第272窟，於十六國時期建造。其中南壁的壁畫描繪了佛陀講經說法的場景，畫中佛陀座位兩側有兩隻蹲伏的獅子。這是敦煌壁畫中最早的獅子形象。'  
	,reference:'1. 莫高窟第272窟，敦煌研究院網站：www.dha.ac.cn/info/1425/3590.htm#<br>&emsp;&emsp;&emsp;2. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁251-252。'  
	,image:''
	,referenceUrl:''});

markers.lion9 = createMarker({ lat:	15.8801	,lng:108.338 }, 'lion','越南會安',{ A:['lion'],B:['三國兩晉南北朝'],C:['軍事'],D:['陸上絲綢之路'],E:['東南亞'] },
   {title: '描述'  
	,description:'林邑是位於越南中部地區的古國。南朝宋曾經派遣檀和之和宗愨討伐林邑，林邑以披著鎧甲的大象抵禦。宗愨認為獅子威服百獸，於是下令製作了大量的獅子模型。林邑的大象部隊受驚而潰散，林邑的首都被攻克。'  
	,reference:''  
	,imag:'1. 沈約，《宋書·列傳第三十六》（北京：中華書局，1997），頁1971-1972。'});

markers.lion10 = createMarker({ lat:	34.6364	,lng:   112.4501 }, 'lion','河南洛陽',{ A:['lion'],B:['三國兩晉南北朝'],C:['宗教信仰'],D:['陸上絲綢之路'],E:['東亞'] },
   {title: '描述'  
	,description:'隨著佛教在北魏傳播，洛陽的佛寺逐漸興旺起來。僧人每年在洛陽城內舉行遊行，向洛陽居民展示佛陀的畫像。而獅子作為佛教的神獸，會在遊行隊伍的最前方引路'  
	,reference:'1. 楊衒之，《洛陽伽藍記·卷一》（洛陽：大東書局，1933），頁9。'  
	,image:''
	,referenceUrl:''});

markers.lion11 = createMarker({ lat:    33.3154	,lng:   44.3660 }, 'lion','伊拉克巴格達',{ A:['lion'],B:['三國兩晉南北朝'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'薩珊王朝是最長壽的波斯帝國，持續了四個世紀。薩珊波斯王朝曾經向北魏進貢了一隻獅子，此後這隻獅子被飼養在北魏孝莊帝的皇家園林中。當時洛陽的一處地名｢師子坊｣因此而命名。'  
	,reference:'1. 楊衒之，《洛陽伽藍記·卷三》（洛陽：大東書局，1933），頁7。'  
	,image:''
	,referenceUrl:''});//河南洛阳

markers.lion12 = createMarker({ lat:    40.5204	,lng:   95.7822 }, 'lion','甘肅瓜州',{ A:['lion'],B:['唐'],C:['宗教信仰'],D:['陸上絲綢之路'],E:['東亞'] },
   {title: '描述'  
	,description:'文殊菩薩騎乘青獅子，是中國佛教藝術中的典型形象。這一形象並非源自印度，而是唐代人的創造。例如，在榆林窟第25號窟的壁畫中，文殊菩薩的坐騎就是獅子。考古學家認為，二者的組合意義是以獅子的威猛象徵菩薩的智慧。'  
	,reference:'1. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁209,213。<br>&emsp;&emsp;&emsp;2. 榆林窟第25窟，敦煌研究院網站，www.dha.ac.cn/info/1426/3635.htm#。'  
	,image:'media/lion/223 榆林窟第25窟-主室西壁北侧-文殊图-中唐.png'
	,referenceUrl:''});

markers.lion13 = createMarker({ lat:    41.7207	,lng:   82.9430 }, 'lion','新疆庫車',{ A:['lion'],B:['唐'],C:['朝貢'],D:['陸上絲綢之路'],E:['東亞'] },
   {title: '描述'  
	,description:'突厥在隋朝時分裂為東突厥和西突厥。唐高祖時期，西突厥的首領射匱可汗多次向唐朝進貢鴕鳥卵和獅子皮，以希望與唐朝聯合進攻東突厥。'  
	,reference:'1. 歐陽修、宋祁，《新唐書·列傳第一百四十下》（北京：中華書局，1997），頁6057。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion14 = createMarker({ lat:    41.7407	,lng:   82.9530 }, 'lion','新疆庫車',{ A:['lion'],B:['唐'],C:['文化娛樂'],D:['陸上絲綢之路'],E:['東亞']},
   {title: '描述'  
	,description:'唐代宮廷舞樂中有一種據說來自龜茲（今新疆庫車）的《五方獅子舞》。根據記載，每隻獅子由十二名舞者扮演，這些舞者也被稱為｢獅子郎｣。這種宮廷舞樂可能是現在中國傳統舞獅的源頭。'  
	,reference:'1. 歐陽修、宋祁，《新唐書·志第十一》（北京：中華書局，1997），頁470。<br>&emsp;&emsp;&emsp;2. 尚永琪，《蓮花上的獅子——圖說歐亞獅子文化》（香港：中華書局，2015），頁132。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion15 = createMarker({ lat:	39.627	,lng:   66.9749 }, 'lion','烏茲別克斯坦撒馬爾罕',{ A:['lion'],B:['唐'],C:['朝貢'],D:['陸上絲綢之路'],E:['中亞'] },
   {title: '描述'  
	,description:'貞觀九年（公元635年），康國（今烏茲別克斯坦撒馬爾罕）向唐朝進貢一隻獅子。唐太宗命令書法家虞世南作賦以紀念此事。'  
	,reference:'1. 劉昫等，《舊唐書·列傳第一百四十八》（北京：中華書局，1997），頁5310-5311。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion16 = createMarker({ lat:	33.5138	,lng:	36.2765 }, 'lion','敘利亞大馬士革',{ A:['lion'],B:['唐'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'大食國是唐宋史書中對阿拉伯帝國的稱呼。唐高宗永徽二年（公元651年），阿拉伯帝國第三任哈里發奧斯曼派遣使節抵達長安（今陝西西安）朝貢，其後雙方往來密切。武則天執政時期，大食使者貢獻了一隻獅子。大臣姚璹以飼養獅子花費巨大為由，上書建議拒絕接受這隻獅子。武則天隨後下詔要求大食使者以後不要再進貢獅子。'  
	,reference:'1. 歐陽修、宋祁，《新唐書·列傳第二十七》（北京：中華書局，1997），頁3980。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion17 = createMarker({ lat:	36.4707	,lng:	52.3466 }, 'lion','伊朗阿莫勒',{ A:['lion'],B:['唐'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'塔巴里斯坦位於裏海南岸，原本屬於薩珊波斯王朝。薩珊波斯王朝被阿拉伯帝國攻滅後，塔巴里斯坦保持獨立，並繼續以波斯王的名義向唐朝進貢。唐玄宗時期，塔巴里斯坦曾進貢獅子。'  
	,reference:'1. 陀拔思單國，中國大百科全書網站，www.zgbk.com/ecph/words?SiteID=1&ID=498208&Type=bkztb&SubID=704。<br>&emsp;&emsp;&emsp;2. 劉昫等，《舊唐書·本紀第八》（北京：中華書局，1997），頁184。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion18 = createMarker({ lat:	41.0082	,lng:	28.9784 }, 'lion','土耳其伊斯坦布爾',{ A:['lion'],B:['唐'],C:['朝貢'],D:['陸上絲綢之路'],E:['歐洲'] },
   {title: '描述'  
	,description:'拂菻，又稱大秦，是中國古籍中對東羅馬帝國的稱呼。開元七年（公元719年），拂菻向唐朝進貢兩隻獅子和兩頭羚羊。'  
	,reference:'1. 劉昫等，《舊唐書·列傳第一百四十八》（北京：中華書局，1997），頁5314-5315。'  
	,image:''
	,referenceUrl:''});//陕西西安

markers.lion19 = createMarker({ lat:	53.7175	,lng:	91.4292 }, 'lion','俄羅斯亞巴坎',{ A:['lion'],B:['唐'],C:['文化娛樂'],D:['陸上絲綢之路'],E:['北亞'] },
   {title: '描述'  
	,description:'黠戛斯，位於西伯利亞地區的葉尼塞河流域，是如今吉爾吉斯人的祖先。根據史書記載，黠戛斯人有一種獅子戲，推測可能是一種馴化獅子作動物表演的娛樂活動。'  
	,reference:'1. 歐陽修、宋祁，《新唐書·列傳第一百四十二下》（北京：中華書局，1997），頁6147-6148。'  
	,image:''
	,referenceUrl:''});

markers.lion20 = createMarker({ lat:	34.7973	,lng:	114.3072 }, 'lion','河南開封',{ A:['lion'],B:['宋' ],C:['文化娛樂'],D:[''],E:['東亞']},
   {title: '描述'  
	,description:'根據《東京夢華錄》記載，宋代元宵節的戲曲表演中，有｢舞獅豹｣一節。可見舞獅在宋代已經成為中國文化中流行的節慶活動。宋代宮廷畫家蘇漢臣所繪的《百子嬉春圖》，其內容為春節期間兒童進行娛樂活動的場景，其中的獅子是兩名孩童扮成的，有著綠色的鬃毛和藍色的皮膚，其形象已經很接近現在的舞獅。'  
	,reference:'1. 孟元老，《東京夢華錄·卷七》（上海：商務印書館據學津討源本影印，1936），頁138-139。<br>&emsp;&emsp;&emsp;2. 宋人百子嬉春頁，故宮博物院網站，www.dpm.org.cn/collection/paint/231547。'  
	,image:'media/lion/231 苏汉臣百子嬉春.png'
	,referenceUrl:''});

markers.lion21 = createMarker({ lat:	34.7970	,lng:	114.3077 }, 'lion','河南開封',{ A:['lion'],B:['宋'],C:['宗教信仰'],D:[''],E:['東亞'] },
   {title: '描述'  
    ,description:'獅子作為文殊菩薩的坐騎，這一觀念發展至宋代已經深入人心。重陽節時，北宋首都汴梁（今河南開封）的寺廟都會舉辦法會。其中部分僧人騎乘獅子講經說法，吸引遊人觀看。'  
    ,reference:'1. 孟元老，《東京夢華錄·卷八》（上海：商務印書館據學津討源本影印，1936），頁166-167。'  
    ,image:''
	,referenceUrl:''});

markers.lion22 = createMarker({ lat:	15.8801	,lng:	108.338 }, 'lion','越南會安',{ A:['lion'],B:['宋' ],C:['朝貢'],D:['陸上絲綢之路'],E:['東南亞']},
   {title: '描述'  
	,description:'占城是位於越南中部地區的古國。大中祥符四年（公元1011年），占城向北宋進貢獅子。宋真宗下令，對使者進行豐厚的賞賜，並將獅子飼養在皇家園林中。'  
	,reference:'1. 脫脫等，《宋史·列傳第二百四十八》（北京：中華書局，1997），頁14083。'  
	,image:''
	,referenceUrl:''});//河南開封

markers.lion23 = createMarker({ lat:	38.1234	,lng:	46.2444}, 'lion','伊朗大不里士',{ A:['lion'],B:['元'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'1259年，蒙古大汗蒙哥在進攻南宋的過程中死亡，蒙古帝國隨後陷入內戰，並最終分裂為元朝和四大汗國。四大汗國實際上獨立，但在名義上以元朝皇帝為領袖並進行朝貢。據記載，位於中亞地區的伊兒汗國曾經向元朝進貢獅子和豹。'  
	,reference:'1. 宋濂等，《元史·本紀第三十》（北京：中華書局，1997），頁678。'  
	,image:''
	,referenceUrl:''});//北京

markers.lion24 = createMarker({ lat:	21.3891	,lng:	39.8579 }, 'lion','沙特阿拉伯麥加',{ A:['lion'],B:['元' ],C:['朝貢'],D:['海上絲綢之路'],E:['西亞']},
   {title: '描述'  
	,description:'元代將從阿拉伯或波斯遷入中國的穆斯林稱為｢回回｣。蒙古統治者給予回回商人許多特權，尤其是元朝的對外貿易場所主要由他們負責。許多回回商人以元朝皇室的名義在中亞、西亞等地區大量收購獅子、豹、鷹等動物，再通過海路運輸至中國。據記載，杭州的驛站甚至在一個月內接待回回商人超過1200人，供給人及各種動物的肉食高達1300斤。'  
	,reference:'1. 回回商人，中國大百科全書網站，www.zgbk.com/ecph/words?SiteID=1&ID=231255&Type=bkztb&SubID=705。<br>&emsp;&emsp;&emsp;2. 宋濂等，《元史·本紀第二十三》（北京：中華書局，1997），頁511。'  
	,image:''
	,referenceUrl:'www.zgbk.com/ecph/words?SiteID=1&ID=231255&Type=bkztb&SubID=705'});//浙江杭州,北京

markers.lion25 = createMarker({ lat:	39.9042	,lng:	116.4074 }, 'lion','北京',{ A:['lion'],B:['明'],C:['身份象徵'],D:[''],E:['東亞'] },
   {title: '描述'  
	,description:'補子，是明清時期官服前胸和後背上的方形刺繡，用來表明官階。根據明代禮制，獅子是一品和二品武官可以使用的補子圖案。而到了明朝中後期，獅子補則被濫用，普通武官的官服也可以使用獅子補。'  
	,reference:'1. 張廷玉等，《明史·志第四十三》（北京：中華書局，1997），頁1638。<br>&emsp;&emsp;&emsp;2. 沈德符，《萬曆野獲編·補遺三》（北京：中華書局據清道光七年姚氏扶荔山房刻本勘校，1959），頁870。'  
	,image:''
	,referenceUrl:''});

markers.lion26 = createMarker({ lat:	39.9245	,lng:	116.4074 }, 'lion','北京',{ A:['lion'],B:['明'],C:['朝貢'],D:[''],E:['東亞'] },
   {title: '描述'  
	,description:'明代建立了詳細的朝貢和回賜制度。各國所進貢的獅子需要先經過會同館評判價值，然後由錦衣衛飼養和訓練。這些獅子可能會加入明朝皇帝的儀仗隊，或者在重要的慶典上進行表演。'  
	,reference:'1. 申時行等，《明會典·卷之一百八》（北京：中華書局據萬有文庫本排印，1989），頁585。'  
	,image:''
	,referenceUrl:''});

markers.lion27 = createMarker({ lat:	42.9513	,lng:	89.1895 }, 'lion','新疆吐魯番',{ A:['lion'],B:['明' ],C:['朝貢'],D:['陸上絲綢之路'],D:['海上絲綢之路'],E:['東亞']},
   {title: '描述'  
	,description:'明弘治年間，吐魯番汗國曾多次向明朝進貢獅子，其常規進貢路線是陸路。但在弘治三年（公元1490年）秋天，吐魯番使者試圖通過海路進貢獅子。他們的船隊通過馬六甲海峽到達了廣州。明朝以海路不是吐魯番汗國的朝貢路線為由拒絕了。'  
	,reference:'1. 張廷玉等，《明史·列傳第二百十七》（北京：中華書局，1997），頁8531-8532。'  
	,image:''
	,referenceUrl:''});//廣東廣州，北京

markers.lion28 = createMarker({ lat:	34.3462	,lng:	62.2047 }, 'lion','阿富汗赫拉特',{ A:['lion'],B:['明'],C:['朝貢'],D:['陸上絲綢之路'],E:['西亞'] },
   {title: '描述'  
	,description:'阿富汗的赫拉特，在明代被稱為哈烈或黑婁。哈烈曾多次向明朝進貢獅子。根據明朝的文獻記載，當地人會竊取剛出生的獅子幼崽進行馴養。'  
	,reference:'1. 張廷玉等，《明史·列傳第二百二十》（北京：中華書局，1997），頁8612。<br>&emsp;&emsp;&emsp;2. 沈德符，《萬曆野獲編·卷三十》（北京：中華書局據清道光七年姚氏扶荔山房刻本勘校，1959），頁772。'  
	,image:''
	,referenceUrl:''});//北京

markers.lion29 = createMarker({ lat:	13.7563	,lng:	100.5018 }, 'lion','泰國曼谷',{ A:['lion'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['東南亞'] },
   {title: '描述'  
    ,description:'泰國在明朝時被稱為暹羅。鄭和下西洋時曾多次到達暹羅並進行貿易，隨行人員記錄了暹羅有白象和獅子等奇珍異獸。'  
    ,reference:'1. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁31-32。'  
    ,image:''
	,referenceUrl:''});//北京

markers.lion30 = createMarker({ lat:	12.7855	,lng:	45.0185 }, 'lion','也門亞丁',{ A:['lion'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['西亞'] },
   {title: '描述'  
    ,description:'亞丁在明代被稱為阿丹。據史書記載，阿丹國王十分崇敬中國，用大量珍寶與鄭和進行貿易。鄭和船隊從阿丹帶回了長頸鹿、獅子、豹、花貓、鴕鳥等動物。其中花貓可能是非洲當地的藪貓。'  
    ,reference:'1. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁71。'  
    ,image:''
	,referenceUrl:''});//北京

markers.lion31 = createMarker({ lat:	27.1377	,lng:	57.0684 }, 'lion','伊朗米纳卜',{ A:['lion'],B:['明'],C:['朝貢'],D:['海上絲綢之路' ],E:['西亞']},
   {title: '描述'  
    ,description:'忽魯謨斯，即如今伊朗米納卜，地處霍爾木茲海峽，是進入波斯灣的必經之路，鄭和的船隊曾多次到達此處。1414年，忽魯謨斯國王跟隨鄭和的船隊返回北京，向永樂皇帝進貢馬匹。此外，獅子和長頸鹿也是忽魯謨斯經常攜帶的貢品。'  
    ,reference:'1. 張廷玉等，《明史·列傳第二百十四》（北京：中華書局，1997），頁8452。<br>&emsp;&emsp;&emsp;2. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁85-86。'  
    ,image:''
	,referenceUrl:''});//北京

markers.lion32 = createMarker({ lat:	21.3891	,lng:	39.8379 }, 'lion','沙特阿拉伯麥加',{ A:['lion'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['西亞'] },
   {title: '描述'  
    ,description:'麥加是伊斯蘭教的發祥地，在明朝時被稱為天方。鄭和曾經派遣七名使者到達天方，帶回了長頸鹿、獅子、鴕鳥等動物。'  
    ,reference:'1. 馬歡，《瀛涯勝覽》（北京：中華書局據寶顏堂秘笈本影印，1985），頁90-91。'  
    ,image:''
	,referenceUrl:''});//北京

markers.lion33 = createMarker({ lat:	41.0182	,lng:	28.9784 }, 'lion','土耳其伊斯坦布爾',{ A:['lion'],B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['歐洲'] },
   {title: '描述'  
    ,description:'鄂圖曼帝國在明代被稱為｢魯迷｣。嘉靖和萬曆年間，魯迷曾多次向明朝進貢馬、狗、獅子、犀牛等動物。'  
    ,reference:'1. 張廷玉等，《明史·列傳第九十四》（北京：中華書局，1997），頁5437。'  
    ,image:''
	,referenceUrl:''});//北京

markers.lion34 = createMarker({ lat:	-25.9682 ,lng:	32.5729 }, 'lion','莫桑比克馬普托',{ A:['lion'],B:['清'],C:['朝貢'],D:['海上絲綢之路'],E:['非洲'] },
   {title: '描述'  
    ,description:'為了尋求在廣東地區的自由貿易，葡萄牙計劃向康熙皇帝進獻禮物。1672年，葡萄牙駐印度總督命令駐扎在東非莫桑比克的葡萄牙軍隊捕捉了一公一母兩隻獅子，並通過海路運送至印度果阿。其中公獅子不久後死亡，母獅子則被運送至澳門。為了獲得清廷的重視，澳門當局偽造了葡萄牙國王阿方索六世致康熙皇帝的國書。葡萄牙使團在澳門滯留兩年後，於1678年八月獲得批准，進京貢獻獅子。1680年，康熙下令開放了香山至澳門的陸路貿易路線，成為了當時清朝和歐洲各國貿易的重要路線之一。是次貢獅，是清朝首次收到來自外國的貢獅，也是中國歷史記載中的最後一次貢獅。'  
    ,reference:'1. 鄒振環，〈康熙朝西人貢獅與《獅子說》〉，《紫禁城》，期10（2018年10月），頁42,48。'  
    ,image:''
	,referenceUrl:''});//印度果阿，中國澳門，北京
   
   
   
    //    markers.elephant1 = createMarker({ lat: 33.123, lng: 108.456 }, 'elephant');
    //    markers.elephant2 = createMarker({ lat: 33.124, lng: 108.456 }, 'elephant');
    //    markers.elephant3 = createMarker({ lat: 33.125, lng: 108.456 }, 'elephant');
    //    markers.elephant4 = createMarker({ lat: 33.126, lng: 108.456 }, 'elephant');
   
   
   



    // 获取图标和 category-container 的引用
// 获取图标和 category-container 的引用



// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');





var lion4 = markers.lion4; // 假设已经创建了lion4标记
var lion5 = markers.lion5;
var lion6 = markers.lion6;
var lion11 = markers.lion11;
var lion13 = markers.lion13;
var lion14 = markers.lion14;
var lion15 = markers.lion15;
var lion16 = markers.lion16;
var lion17 = markers.lion17;
var lion18 = markers.lion18;
var lion22 = markers.lion22;
var lion23 = markers.lion23;
var lion24 = markers.lion24;

var lion27 = markers.lion27;
var lion28 = markers.lion28;
var lion29 = markers.lion29;
var lion30 = markers.lion30;
var lion31 = markers.lion31;
var lion32 = markers.lion32;
var lion33 = markers.lion33;
var lion34 = markers.lion34;

// 定义新坐标和初始坐标

// 定义一个函数，生成指定范围内的随机数
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// 定义一个函数，生成新的坐标对象，并添加随机数
function RandomCoords(coords) {
    var randomLat = coords.lat + getRandomNumber(-0.025, 0.025); // 在-0.1到0.1之间生成随机数
    var randomLng = coords.lng + getRandomNumber(-0.025, 0.025); // 在-0.1到0.1之间生成随机数
    return { lat: randomLat, lng: randomLng };
}

var newcoords_lion4 = { lat: 34.637, lng: 112.452 };
var newCoords_lion4= RandomCoords(newcoords_lion4);
var newcoords_lion5 = { lat: 34.637, lng: 112.452 };
var newCoords_lion5= RandomCoords(newcoords_lion5);
var newcoords_lion6 = { lat: 34.637, lng: 112.452 };
var newCoords_lion6= RandomCoords(newcoords_lion6);
var newcoords_lion11 = { lat: 34.637, lng: 112.452 };
var newCoords_lion11= RandomCoords(newcoords_lion11);

var newcoords_lion13 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion13= RandomCoords(newcoords_lion13);
var newcoords_lion14 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion14= RandomCoords(newcoords_lion14);
var newcoords_lion15 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion15= RandomCoords(newcoords_lion15);
var newcoords_lion16 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion16= RandomCoords(newcoords_lion16);
var newcoords_lion17 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion17= RandomCoords(newcoords_lion17);
var newcoords_lion18 = { lat: 34.2665636, lng: 108.9531649 };
var newCoords_lion18= RandomCoords(newcoords_lion18);

var newCoords_lion22 = { lat: 34.7845	,lng:	114.2722 };

var newcoords_lion23 =   { lat: 39.9042	,lng:	116.4074  };
var newCoords_lion23= RandomCoords(newcoords_lion23);
var newCoords_lion24_1 = { lat: 30.2925 ,lng:   120.1145  };
var newcoords_lion24_2 = { lat: 39.9042	,lng:	116.4074  };
var newCoords_lion24_2= RandomCoords(newcoords_lion24_2);
var newCoords_lion27_1 = { lat: 23.1298 ,lng:   113.2623  }
var newcoords_lion27_2 = { lat:	39.9042	,lng:	116.4074  };
var newCoords_lion27_2= RandomCoords(newcoords_lion27_2);

var newcoords_lion28 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion28= RandomCoords(newcoords_lion28);
var newcoords_lion29 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion29= RandomCoords(newcoords_lion29);
var newcoords_lion30 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion30= RandomCoords(newcoords_lion30);
var newcoords_lion31 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion31= RandomCoords(newcoords_lion31);
var newcoords_lion32 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion32= RandomCoords(newcoords_lion32);
var newcoords_lion33 = { lat: 39.9042	,lng:	116.4074 };
var newCoords_lion33= RandomCoords(newcoords_lion33);

var newCoords_lion34_1 = { lat: 15.2841528,lng: 73.9831089};//yindu
var newCoords_lion34_2 = { lat: 22.112492,lng : 113.5651789};//anmen
var newCoords_lion34_3 = { lat: 39.9042	,lng:	116.4074 };//bj


//河西走廊:敦煌-酒泉-张掖-武威
var dunhuang= { lat:	40.1130	,lng:94.6618 }; 
var wuwei = {lat:37.9283693,lng:102.6371};
var jiuquan={lat:39.7237,lng:98.3444}
var zhangye = {lat:38.9177,lng:100.3065};
//海上絲路：古里-xilan-palk-馬六甲
var guli ={lat:11.2618383,lng:75.7822258};
var xilan={lat:6.9397566,lng:79.8259408};
var palk={lat:10.0803525,lng:80.1207164};
var maliujia={lat:2.2373766,lng:102.1691017};
var kailuo={lat:	30.0444 ,lng:31.2357};
var kemolin={lat:8.0864,lng:77.5355707};
var jibudi={lat:11.8125646,lng:41.9678954};
var taihai={lat:24.2877,lng:119.5445649};
var zhangjiagang={lat:31.8774,lng:120.4609}

var lion4Position = lion4.getPosition();
var initialCoords_lion4 = {
    lat: lion4Position.lat(),
    lng: lion4Position.lng()
};
var lion5Position = lion5.getPosition();
var initialCoords_lion5 = {
    lat: lion5Position.lat(),
    lng: lion5Position.lng()
};
var lion6Position = lion6.getPosition();
var initialCoords_lion6 = {
    lat: lion6Position.lat(),
    lng: lion6Position.lng()
};
var lion11Position = lion11.getPosition();
var initialCoords_lion11 = {
    lat: lion11Position.lat(),
    lng: lion11Position.lng()
};

var lion13Position = lion13.getPosition();
var initialCoords_lion13 = {
    lat: lion13Position.lat(),
    lng: lion13Position.lng()
};
var lion14Position = lion14.getPosition();
var initialCoords_lion14 = {
    lat: lion14Position.lat(),
    lng: lion14Position.lng()
};
var lion15Position = lion15.getPosition();
var initialCoords_lion15 = {
    lat: lion15Position.lat(),
    lng: lion15Position.lng()
};
var lion16Position = lion16.getPosition();
var initialCoords_lion16 = {
    lat: lion16Position.lat(),
    lng: lion16Position.lng()
};
var lion17Position = lion17.getPosition();
var initialCoords_lion17 = {
    lat: lion17Position.lat(),
    lng: lion17Position.lng()
};
var lion18Position = lion18.getPosition();
var initialCoords_lion18 = {
    lat: lion18Position.lat(),
    lng: lion18Position.lng()
};
var initialCoords_lion22 = lion22.getPosition(); // 存储初始位置
var lion23Position = lion23.getPosition();
var initialCoords_lion23 = {
    lat: lion23Position.lat(),
    lng: lion23Position.lng()
};
var lion24Position = lion24.getPosition();
var initialCoords_lion24 = {
    lat: lion24Position.lat(),
    lng: lion24Position.lng()
};
var initialCoords_lion24_2 = {
    lat: newCoords_lion24_1.lat,
    lng: newCoords_lion24_1.lng
};

var initialCoords_lion27 = lion27.getPosition(); 

var initialCoords_lion27_2 = {
    lat: newCoords_lion27_1.lat,
    lng: newCoords_lion27_1.lng
};

var initialCoords_lion28 = lion28.getPosition(); // 存储初始位置

var lion29Position = lion29.getPosition();
var initialCoords_lion29 = {
    lat: lion29Position.lat(),
    lng: lion29Position.lng()
};
var lion30Position = lion30.getPosition();
var initialCoords_lion30 = {
    lat: lion30Position.lat(),
    lng: lion30Position.lng()
};
var lion31Position = lion31.getPosition();
var initialCoords_lion31 = {
    lat: lion31Position.lat(),
    lng: lion31Position.lng()
};
var lion32Position = lion32.getPosition();
var initialCoords_lion32 = {
    lat: lion32Position.lat(),
    lng: lion32Position.lng()
};
var lion33Position = lion33.getPosition();
var initialCoords_lion33 = {
    lat: lion33Position.lat(),
    lng: lion33Position.lng()
};

var lion34Position = lion34.getPosition(); // 存储初始位置
var initialCoords_lion34 = {
    lat: lion34Position.lat(),
    lng: lion34Position.lng()
};



var timeoutId = null;

// document.getElementById('buttonContainer').addEventListener('click', function () {
//     var randomValue = Math.floor(Math.random() * 8001); // 生成0到8000的随机数
//     slider.value = randomValue;
//     // 触发滑块的input事件，手动更新标记的位置
//     var event = new Event('input');
//     slider.dispatchEvent(event);
// });

document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('timeline-button')) {
        var buttonValue = event.target.getAttribute('data-value');
        slider.value = buttonValue;
        // 触发滑块的input事件，手动更新标记的位置
        var inputEvent = new Event('input');
        slider.dispatchEvent(inputEvent);
    }
});
// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    // 获取滑块的当前值
    var currentValue = parseInt(slider.value);
    
    if (currentValue >= 1000 && currentValue < 2000) {
        // 在1000到2000的范围内时执行标记位置的更新
        if(currentValue==1000){
            lion4.setPosition(newCoords_lion4);
            lion5.setPosition(newCoords_lion5);
            lion6.setPosition(newCoords_lion6);
        }
        var points_4 = [initialCoords_lion4, dunhuang,jiuquan, newCoords_lion4, newCoords_lion4,];
        var points_5 = [initialCoords_lion5, dunhuang,zhangye,  newCoords_lion5,  newCoords_lion5];
        var points_6 = [initialCoords_lion6, dunhuang, wuwei, newCoords_lion6, newCoords_lion6];
    // 计算当前阶段的目标点的索引
        var targetIndex_4 = Math.floor((currentValue - 1000) / (1000 / (points_4.length-1)));
        var targetIndex_5 = Math.floor((currentValue - 1000) / (1000 / (points_5.length-1)));
        var targetIndex_6 = Math.floor((currentValue - 1000) / (1000 / (points_6.length-1)));
    // 计算插值百分比
        var percentage_4 = (currentValue - 1000) % (1000 / (points_4.length-1)) / (1000 / (points_4.length-1));
        var percentage_5 = (currentValue - 1000) % (1000 / (points_5.length-1)) / (1000 / (points_5.length-1));
        var percentage_6 = (currentValue - 1000) % (1000 / (points_6.length-1)) / (1000 / (points_6.length-1));

        percentage_4 = Math.min(1, Math.max(0, percentage_4));
        percentage_5 = Math.min(1, Math.max(0, percentage_5));
        percentage_6 = Math.min(1, Math.max(0, percentage_6));


    // 计算插值的新位置
        var latDiff = points_4[targetIndex_4 + 1].lat - points_4[targetIndex_4].lat;
        var lngDiff = points_4[targetIndex_4 + 1].lng - points_4[targetIndex_4].lng;
        var interpolatedLat_4 = points_4[targetIndex_4].lat + latDiff * percentage_4;
        var interpolatedLng_4 = points_4[targetIndex_4].lng + lngDiff * percentage_4;

        var latDiff = points_5[targetIndex_5 + 1].lat - points_5[targetIndex_5].lat;
        var lngDiff = points_5[targetIndex_5 + 1].lng - points_5[targetIndex_5].lng;
        var interpolatedLat_5 = points_5[targetIndex_5].lat + latDiff * percentage_5;
        var interpolatedLng_5 = points_5[targetIndex_5].lng + lngDiff * percentage_5;

        
        var latDiff = points_6[targetIndex_6 + 1].lat - points_6[targetIndex_6].lat;
        var lngDiff = points_6[targetIndex_6 + 1].lng - points_6[targetIndex_6].lng;
        var interpolatedLat_6 = points_6[targetIndex_6].lat + latDiff * percentage_6;
        var interpolatedLng_6 = points_6[targetIndex_6].lng + lngDiff * percentage_6;

    // 设置lion24的位置
        lion4.setPosition({ lat: interpolatedLat_4, lng: interpolatedLng_4 });
        lion5.setPosition({ lat: interpolatedLat_5, lng: interpolatedLng_5 });     
        lion6.setPosition({ lat: interpolatedLat_6, lng: interpolatedLng_6 });


    }
    if (currentValue >= 2000 && currentValue <3000) {
        if(currentValue==2000){
            lion4.setPosition(newCoords_lion4);
            lion5.setPosition(newCoords_lion5);
            lion6.setPosition(newCoords_lion6);
        }
        var points_11 = [initialCoords_lion11, dunhuang, wuwei, newCoords_lion11, newCoords_lion11,];
        var targetIndex_11 = Math.floor((currentValue - 2000) / (1000 / (points_11.length-1)));
        var percentage_11 = (currentValue - 2000) % (1000 / (points_11.length-1)) / (1000 / (points_11.length-1));
        percentage_11 = Math.min(1, Math.max(0, percentage_11));
        var latDiff = points_11[targetIndex_11 + 1].lat - points_11[targetIndex_11].lat;
        var lngDiff = points_11[targetIndex_11 + 1].lng - points_11[targetIndex_11].lng;
        var interpolatedLat_11 = points_11[targetIndex_11].lat + latDiff * percentage_11;
        var interpolatedLng_11 = points_11[targetIndex_11].lng + lngDiff * percentage_11;
        lion11.setPosition({ lat: interpolatedLat_11, lng: interpolatedLng_11 });
    
    }
    if (currentValue >= 3000 && currentValue < 4000) {
        // 在1000到2000的范围内时执行标记位置的更新
        if(currentValue==3000){
            lion11.setPosition(newCoords_lion11);
            
        }
        var speedlion13=1;
        var speedlion14=1;
        var speedlion15=1;
        var speedlion16=1;
        var speedlion17=1;
        var speedlion18=1;

        var points_13 = [initialCoords_lion13, dunhuang,jiuquan, newCoords_lion13, newCoords_lion13];
        var points_14 = [initialCoords_lion14, dunhuang,zhangye, newCoords_lion14, newCoords_lion13];
        var points_15 = [initialCoords_lion15, dunhuang,wuwei, newCoords_lion15, newCoords_lion13];
        var points_16 = [initialCoords_lion16, jiuquan,zhangye, newCoords_lion16, newCoords_lion13];
        var points_17 = [initialCoords_lion17, jiuquan,wuwei, newCoords_lion17, newCoords_lion13];
        var points_18 = [initialCoords_lion18, dunhuang,zhangye,wuwei, newCoords_lion18, newCoords_lion13];
        155
    // 计算当前阶段的目标点的索引
        var targetIndex_13 = Math.floor((currentValue - 3000) / (1000 / (points_13.length-1)));
        var targetIndex_14 = Math.floor((currentValue - 3000) / (1000 / (points_14.length-1)));
        var targetIndex_15 = Math.floor((currentValue - 3000) / (1000 / (points_15.length-1)));
        var targetIndex_16 = Math.floor((currentValue - 3000) / (1000 / (points_16.length-1)));
        var targetIndex_17 = Math.floor((currentValue - 3000) / (1000 / (points_17.length-1)));
        var targetIndex_18 = Math.floor((currentValue - 3000) / (1000 / (points_18.length-1)));



    // 计算插值百分比
        var percentage_13 = speedlion13*(currentValue - 3000) % (1000 / (points_13.length-1)) / (1000 / (points_13.length-1));
        var percentage_14 = speedlion14*(currentValue - 3000) % (1000 / (points_14.length-1)) / (1000 / (points_14.length-1));
        var percentage_15 = speedlion15*(currentValue - 3000) % (1000 / (points_15.length-1)) / (1000 / (points_15.length-1));
        var percentage_16 = speedlion16*(currentValue - 3000) % (1000 / (points_16.length-1)) / (1000 / (points_16.length-1));
        var percentage_17 = speedlion17*(currentValue - 3000) % (1000 / (points_17.length-1)) / (1000 / (points_17.length-1));
        var percentage_18 = speedlion18*(currentValue - 3000) % (1000 / (points_18.length-1)) / (1000 / (points_18.length-1));





    // 计算插值的新位置
        var latDiff = points_13[targetIndex_13 + 1].lat - points_13[targetIndex_13].lat;
        var lngDiff = points_13[targetIndex_13 + 1].lng - points_13[targetIndex_13].lng;
        var interpolatedLat_13 = points_13[targetIndex_13].lat + latDiff * percentage_13*speedlion13;
        var interpolatedLng_13 = points_13[targetIndex_13].lng + lngDiff * percentage_13*speedlion13;

        var latDiff = points_14[targetIndex_14 + 1].lat - points_14[targetIndex_14].lat;
        var lngDiff = points_14[targetIndex_14 + 1].lng - points_14[targetIndex_14].lng;
        var interpolatedLat_14 = points_14[targetIndex_14].lat + latDiff * percentage_14*speedlion14;
        var interpolatedLng_14 = points_14[targetIndex_14].lng + lngDiff * percentage_14*speedlion14;

        
        var latDiff = points_15[targetIndex_15 + 1].lat - points_15[targetIndex_15].lat;
        var lngDiff = points_15[targetIndex_15 + 1].lng - points_15[targetIndex_15].lng;
        var interpolatedLat_15 = points_15[targetIndex_15].lat + latDiff * percentage_15*speedlion15;
        var interpolatedLng_15 = points_15[targetIndex_15].lng + lngDiff * percentage_15*speedlion15;

        var latDiff = points_16[targetIndex_16 + 1].lat - points_16[targetIndex_16].lat;
        var lngDiff = points_16[targetIndex_16 + 1].lng - points_16[targetIndex_16].lng;
        var interpolatedLat_16 = points_16[targetIndex_16].lat + latDiff * percentage_16*speedlion16;
        var interpolatedLng_16 = points_16[targetIndex_16].lng + lngDiff * percentage_16*speedlion16;
        
        var latDiff = points_17[targetIndex_17 + 1].lat - points_17[targetIndex_17].lat;
        var lngDiff = points_17[targetIndex_17 + 1].lng - points_17[targetIndex_17].lng;
        var interpolatedLat_17 = points_17[targetIndex_17].lat + latDiff * percentage_17*speedlion17;
        var interpolatedLng_17 = points_17[targetIndex_17].lng + lngDiff * percentage_17*speedlion17;

        var latDiff = points_18[targetIndex_18 + 1].lat - points_18[targetIndex_18].lat;
        var lngDiff = points_18[targetIndex_18 + 1].lng - points_18[targetIndex_18].lng;
        var interpolatedLat_18 = points_18[targetIndex_18].lat + latDiff * percentage_18*speedlion18;
        var interpolatedLng_18 = points_18[targetIndex_18].lng + lngDiff * percentage_18*speedlion18;
    // 设置lion213的位置
        lion13.setPosition({ lat: interpolatedLat_13, lng: interpolatedLng_13 });
        lion14.setPosition({ lat: interpolatedLat_14, lng: interpolatedLng_14 });     
        lion15.setPosition({ lat: interpolatedLat_15, lng: interpolatedLng_15 });
        lion16.setPosition({ lat: interpolatedLat_16, lng: interpolatedLng_16 });
        lion17.setPosition({ lat: interpolatedLat_17, lng: interpolatedLng_17 });
        lion18.setPosition({ lat: interpolatedLat_18, lng: interpolatedLng_18 });

    }
    if (currentValue >= 4000 && currentValue <5000) {
        // 在2000到3000的范围内时执行标记位置的更新
        if (currentValue === 4000) {
            // 如果滑块值为4000，将标记位置还原到初始位置

        
            lion22.setPosition(initialCoords_lion22);

        } else {
            // 计算lion22的新位置
            var latDiff22 = newCoords_lion22.lat - initialCoords_lion22.lat();
            var lngDiff22 = newCoords_lion22.lng - initialCoords_lion22.lng();
            var interpolatedLat22 = initialCoords_lion22.lat() + (latDiff22 * ((currentValue - 4000) / 1000));
            var interpolatedLng22 = initialCoords_lion22.lng() + (lngDiff22 * ((currentValue - 4000) / 1000));
            lion22.setPosition({ lat: interpolatedLat22, lng: interpolatedLng22 });
        }
    }
    if (currentValue >= 5000 && currentValue <6000) {
        
        // 定义要经过的点
        if(currentValue==5000){
            lion22.setPosition(newCoords_lion22);
            lion13.setPosition(newCoords_lion13);
            lion14.setPosition(newCoords_lion14);
            lion15.setPosition(newCoords_lion15);
            lion16.setPosition(newCoords_lion16);
            lion17.setPosition(newCoords_lion17);
            lion18.setPosition(newCoords_lion18);
        }
        var points_23 = [initialCoords_lion23, dunhuang, wuwei, newCoords_lion23, newCoords_lion23];
        var points_24 = [initialCoords_lion24, jibudi,guli, xilan, palk, maliujia, newCoords_lion24_1, newCoords_lion24_2, newCoords_lion24_2];
    // 计算当前阶段的目标点的索引
        var targetIndex_23 = Math.floor((currentValue - 5000) / (1000 / (points_23.length-1)));
        var targetIndex_24 = Math.floor((currentValue - 5000) / (1000 / (points_24.length-1)));

    // 计算插值百分比
        var percentage_23 = (currentValue - 5000) % (1000 / (points_23.length-1)) / (1000 / (points_23.length-1));
        var percentage_24 = (currentValue - 5000) % (1000 / (points_24.length-1)) / (1000 / (points_24.length-1));
    // 计算插值的新位置
        var latDiff = points_23[targetIndex_23 + 1].lat - points_23[targetIndex_23].lat;
        var lngDiff = points_23[targetIndex_23 + 1].lng - points_23[targetIndex_23].lng;
        var interpolatedLat_23 = points_23[targetIndex_23].lat + latDiff * percentage_23;
        var interpolatedLng_23 = points_23[targetIndex_23].lng + lngDiff * percentage_23;

        var latDiff = points_24[targetIndex_24 + 1].lat - points_24[targetIndex_24].lat;
        var lngDiff = points_24[targetIndex_24 + 1].lng - points_24[targetIndex_24].lng;
        var interpolatedLat_24 = points_24[targetIndex_24].lat + latDiff * percentage_24;
        var interpolatedLng_24 = points_24[targetIndex_24].lng + lngDiff * percentage_24;

    // 设置lion24的位置
        lion23.setPosition({ lat: interpolatedLat_23, lng: interpolatedLng_23 });
        lion24.setPosition({ lat: interpolatedLat_24, lng: interpolatedLng_24 });     
    
    }
   
    if(currentValue >=6000 && currentValue <7000){
      

        if(currentValue>=6000 && currentValue< 6000+(1000/3) ){

            if (currentValue===6000){
                lion28.setPosition(initialCoords_lion28);
                lion23.setPosition(newCoords_lion23);
                lion24.setPosition(newcoords_lion24_2);
            }else
            {
    
            // 计算lion28_1的新位置
            var latDiff28_1 = dunhuang.lat - initialCoords_lion28.lat();
            var lngDiff28_1 = dunhuang.lng - initialCoords_lion28.lng();
            var interpolatedLat28_1 = initialCoords_lion28.lat() + (latDiff28_1 * ((currentValue - 6000) / (1000/3)));
            var interpolatedLng28_1 = initialCoords_lion28.lng() + (lngDiff28_1 * ((currentValue - 6000) / (1000/3)));
            lion28.setPosition({ lat: interpolatedLat28_1, lng: interpolatedLng28_1 })
            }

        }

        if (currentValue >= 6000+(1000/3) && currentValue < 6000+(1000/3)+(1000/3)) {
            if (currentValue===(6000+(1000/3))){
                lion28.setPosition({ dunhuang });
                
            }else 
            {
            var latDiff28_2 = wuwei.lat - lion28.getPosition().lat();
            var lngDiff28_2 = wuwei.lng - lion28.getPosition().lng();
            var interpolatedLat28_2 = lion28.getPosition().lat() + (latDiff28_2 * ((currentValue - (6000+(1000/3))) / (1000/3)));
            var interpolatedLng28_2 = lion28.getPosition().lng() + (lngDiff28_2 * ((currentValue - (6000+(1000/3))) / (1000/3)));
            lion28.setPosition({ lat: interpolatedLat28_2, lng: interpolatedLng28_2 });
            
            
            }
        }

        if (currentValue >= 6000+(1000/3)+(1000/3) && currentValue < 7000) {
            if (currentValue===(6000+(1000/3)+(1000/3))){
                lion28.setPosition({ wuwei });
                


            }else
            {
            var latDiff28_3 = newCoords_lion28.lat - lion28.getPosition().lat();
            var lngDiff28_3 = newCoords_lion28.lng - lion28.getPosition().lng();
            var interpolatedLat28_3 = lion28.getPosition().lat() + (latDiff28_3 * ((currentValue - (6000+(1000/3)+(1000/3))) / (1000/3)));
            var interpolatedLng28_3 = lion28.getPosition().lng() + (lngDiff28_3 * ((currentValue - (6000+(1000/3)+(1000/3))) / (1000/3)));
            lion28.setPosition({ lat: interpolatedLat28_3, lng: interpolatedLng28_3 });
        
            }
        }



       
        

        if(currentValue>=6000 && currentValue< 6250 ){

            if (currentValue===6000){
                lion27.setPosition(initialCoords_lion27);
            }else
            {
    
            // 计算lion27_1的新位置
            var latDiff27_1 = dunhuang.lat - initialCoords_lion27.lat();
            var lngDiff27_1 = dunhuang.lng - initialCoords_lion27.lng();
            var interpolatedLat27_1 = initialCoords_lion27.lat() + (latDiff27_1 * ((currentValue - 6000) / 250));
            var interpolatedLng27_1 = initialCoords_lion27.lng() + (lngDiff27_1 * ((currentValue - 6000) / 250));
            lion27.setPosition({ lat: interpolatedLat27_1, lng: interpolatedLng27_1 })
            }
            
        }  
        if (currentValue >= 6250 && currentValue < 6500) {
            if (currentValue===6250){
                lion27.setPosition({ dunhuang });
            }else
            {
            var latDiff27_2 = wuwei.lat - lion27.getPosition().lat();
            var lngDiff27_2 = wuwei.lng - lion27.getPosition().lng();
            var interpolatedLat27_2 = lion27.getPosition().lat() + (latDiff27_2 * ((currentValue - 6250) / 250));
            var interpolatedLng27_2 = lion27.getPosition().lng() + (lngDiff27_2 * ((currentValue - 6250) / 250));
            lion27.setPosition({ lat: interpolatedLat27_2, lng: interpolatedLng27_2 });
            }
        }
        if (currentValue >= 6500 && currentValue < 6750) {
            if (currentValue===6500){
                lion27.setPosition({ wuwei });
            }else
            {
            var latDiff27_3 = newCoords_lion27_1.lat - lion27.getPosition().lat();
            var lngDiff27_3 = newCoords_lion27_1.lng - lion27.getPosition().lng();
            var interpolatedLat27_3 = lion27.getPosition().lat() + (latDiff27_3 * ((currentValue - 6500) / 250));
            var interpolatedLng27_3 = lion27.getPosition().lng() + (lngDiff27_3 * ((currentValue - 6500) / 250));
            lion27.setPosition({ lat: interpolatedLat27_3, lng: interpolatedLng27_3 });
            }
        }
        if (currentValue >= 6750 && currentValue < 7000) {
            if (currentValue===6750){
                lion27.setPosition({ newCoords_lion27_1 });
            }else
            {
            var latDiff27_4 = newCoords_lion27_2.lat - lion27.getPosition().lat();
            var lngDiff27_4 = newCoords_lion27_2.lng - lion27.getPosition().lng();
            var interpolatedLat27_4 = lion27.getPosition().lat() + (latDiff27_4 * ((currentValue - 6750) / 250));
            var interpolatedLng27_4 = lion27.getPosition().lng() + (lngDiff27_4 * ((currentValue - 6750) / 250));
            lion27.setPosition({ lat: interpolatedLat27_4, lng: interpolatedLng27_4});
            }
        }
        
    


  

    
    }
    if(currentValue >= 6000 && currentValue < 7000){
        // 在1000到2000的范围内时执行标记位置的更新

        var speedlion29=1;
        var speedlion30=1;
        var speedlion31=1;
        var speedlion32=1;
        var speedlion33=1;
        

        var points_29 = [initialCoords_lion29, maliujia, taihai,zhangjiagang,newCoords_lion29,newCoords_lion29];
        var points_30 = [initialCoords_lion30, guli,kemolin,palk,maliujia, taihai,zhangjiagang,newCoords_lion30,newCoords_lion30];
        var points_31 = [initialCoords_lion31, guli,xilan,kemolin,palk,maliujia, taihai,zhangjiagang,newCoords_lion31,newCoords_lion31];
        var points_32 = [initialCoords_lion32, jibudi,guli,xilan,kemolin,palk,maliujia, taihai,zhangjiagang,newCoords_lion32,newCoords_lion32];
        var points_33 = [initialCoords_lion33, kailuo,jibudi,guli,xilan,kemolin,palk,maliujia, taihai,zhangjiagang,newCoords_lion33,newCoords_lion33];
        
    // 计算当前阶段的目标点的索引
        var targetIndex_29 = Math.floor((currentValue - 6000) / (1000 / (points_29.length-1)));
        var targetIndex_30 = Math.floor((currentValue - 6000) / (1000 / (points_30.length-1)));
        var targetIndex_31 = Math.floor((currentValue - 6000) / (1000 / (points_31.length-1)));
        var targetIndex_32 = Math.floor((currentValue - 6000) / (1000 / (points_32.length-1)));
        var targetIndex_33 = Math.floor((currentValue - 6000) / (1000 / (points_33.length-1)));
        



    // 计算插值百分比
        var percentage_29 = speedlion29*(currentValue - 6000) % (1000 / (points_29.length-1)) / (1000 / (points_29.length-1));
        var percentage_30 = speedlion30*(currentValue - 6000) % (1000 / (points_30.length-1)) / (1000 / (points_30.length-1));
        var percentage_31 = speedlion31*(currentValue - 6000) % (1000 / (points_31.length-1)) / (1000 / (points_31.length-1));
        var percentage_32 = speedlion32*(currentValue - 6000) % (1000 / (points_32.length-1)) / (1000 / (points_32.length-1));
        var percentage_33 = speedlion33*(currentValue - 6000) % (1000 / (points_33.length-1)) / (1000 / (points_33.length-1));
       



    // 计算插值的新位置
        var latDiff = points_29[targetIndex_29 + 1].lat - points_29[targetIndex_29].lat;
        var lngDiff = points_29[targetIndex_29 + 1].lng - points_29[targetIndex_29].lng;
        var interpolatedLat_29 = points_29[targetIndex_29].lat + latDiff * percentage_29*speedlion29;
        var interpolatedLng_29 = points_29[targetIndex_29].lng + lngDiff * percentage_29*speedlion29;

        var latDiff = points_30[targetIndex_30 + 1].lat - points_30[targetIndex_30].lat;
        var lngDiff = points_30[targetIndex_30 + 1].lng - points_30[targetIndex_30].lng;
        var interpolatedLat_30 = points_30[targetIndex_30].lat + latDiff * percentage_30*speedlion30;
        var interpolatedLng_30 = points_30[targetIndex_30].lng + lngDiff * percentage_30*speedlion30;

        
        var latDiff = points_31[targetIndex_31 + 1].lat - points_31[targetIndex_31].lat;
        var lngDiff = points_31[targetIndex_31 + 1].lng - points_31[targetIndex_31].lng;
        var interpolatedLat_31 = points_31[targetIndex_31].lat + latDiff * percentage_31*speedlion31;
        var interpolatedLng_31 = points_31[targetIndex_31].lng + lngDiff * percentage_31*speedlion31;

        var latDiff = points_32[targetIndex_32 + 1].lat - points_32[targetIndex_32].lat;
        var lngDiff = points_32[targetIndex_32 + 1].lng - points_32[targetIndex_32].lng;
        var interpolatedLat_32 = points_32[targetIndex_32].lat + latDiff * percentage_32*speedlion32;
        var interpolatedLng_32 = points_32[targetIndex_32].lng + lngDiff * percentage_32*speedlion32;
        
        var latDiff = points_33[targetIndex_33 + 1].lat - points_33[targetIndex_33].lat;
        var lngDiff = points_33[targetIndex_33 + 1].lng - points_33[targetIndex_33].lng;
        var interpolatedLat_33 = points_33[targetIndex_33].lat + latDiff * percentage_33*speedlion33;
        var interpolatedLng_33 = points_33[targetIndex_33].lng + lngDiff * percentage_33*speedlion33;

        
    // 设置lion229的位置
        lion29.setPosition({ lat: interpolatedLat_29, lng: interpolatedLng_29 });
        lion30.setPosition({ lat: interpolatedLat_30, lng: interpolatedLng_30 });     
        lion31.setPosition({ lat: interpolatedLat_31, lng: interpolatedLng_31 });
        lion32.setPosition({ lat: interpolatedLat_32, lng: interpolatedLng_32 });
        lion33.setPosition({ lat: interpolatedLat_33, lng: interpolatedLng_33 });
        

    }
    if(currentValue >=7000 && currentValue <8000){
        
        if(currentValue==7000){
            lion28.setPosition(newCoords_lion28);
            lion29.setPosition(newCoords_lion29);
            lion30.setPosition(newCoords_lion30);
            lion31.setPosition(newCoords_lion31);
            lion32.setPosition(newCoords_lion32);
            lion33.setPosition(newCoords_lion33);
        }
        
        var points_34 = [initialCoords_lion34, newCoords_lion34_1,guli, xilan, palk, maliujia, newCoords_lion34_2, taihai, zhangjiagang,newCoords_lion34_3, newCoords_lion34_3];
    // 计算当前阶段的目标点的索引
        
        var targetIndex_34 = Math.floor((currentValue - 7000) / (1000 / (points_34.length-1)));

    // 计算插值百分比
        
        var percentage_34 = (currentValue - 7000) % (1000 / (points_34.length-1)) / (1000 / (points_34.length-1));
    // 计算插值的新位置
       

        var latDiff = points_34[targetIndex_34 + 1].lat - points_34[targetIndex_34].lat;
        var lngDiff = points_34[targetIndex_34 + 1].lng - points_34[targetIndex_34].lng;
        var interpolatedLat_34 = points_34[targetIndex_34].lat + latDiff * percentage_34;
        var interpolatedLng_34 = points_34[targetIndex_34].lng + lngDiff * percentage_34;

    // 设置lion24的位置
     
        lion34.setPosition({ lat: interpolatedLat_34, lng: interpolatedLng_34 });     
    }
    if(currentValue==8000){
        lion34.setPosition(newCoords_lion34_3);
    }else if(currentValue==1000||currentValue==2000||currentValue==3000||currentValue==4000||currentValue==5000||currentValue==6000||currentValue==7000){
        lion34.setPosition(initialCoords_lion34);
    }


    //marker.setAnimation(google.maps.Animation.DROP);

    //markerCluster.clearMarkers(); // 清除所有标记
    //markerCluster.removeMarker();

    // // // 将所有标记重新添加到MarkerClusterer中
    //markerCluster.addMarkers([lion4, lion5, lion6, lion11, lion13, lion14, lion15, lion16, lion17, lion18, lion22, lion23, lion24, lion27, lion28, lion29, lion30, lion31, lion32, lion33, lion34]);
    //markerCluster.addMarkers([lion4, lion5, lion6, lion11, lion13, lion14, lion15, lion16, lion17, lion18, lion22, lion23, lion24, lion27, lion28, lion29, lion30, lion31, lion32, lion33, lion34,markers.lion1,markers.lion2,markers.lion3,markers.lion7,markers.lion8,markers.lion9,markers.lion10,markers.lion12,markers.lion19,markers.lion20,markers.lion21,markers.lion25,markers.lion26,]);
    // // 更新标签显示

    
 


    document.getElementById('current-year').textContent = 'Year: ' + currentValue;
});



// 初始化地图和标记
// ...

// 初始化地图和标记
// ...
var infowindows = {};

// 为每个标记添加点击事件监听器
for (var key in markers) {
    if (markers.hasOwnProperty(key)) {
        var marker = markers[key];

        // 使用闭包创建新的作用域
        (function(marker, key) {
            google.maps.event.addListener(marker, 'click', function() {
                // 如果该标记的窗口已经打开，则关闭窗口
                if (infowindows[key] !== undefined && infowindows[key].getMap()) {
                    infowindows[key].close();
                } else {
                    // 使用标记对象的 content 属性设置信息窗口的内容
                    var content = '<div class="info-window" id="infoContainer">' +
                        '<h1>' + marker.content.title + '</h1>' +
                        '<p>' + marker.content.description + '</p>' +
                        '<p class="info-reference">参考：' + marker.content.reference + '</p>' +
                        '<img class="info-image" src="' + marker.content.image + '" alt="">' +
                        '</div>';

                    // 创建新的信息窗口
                    var infowindow = new google.maps.InfoWindow({
                        content: content
                    });

                    // 在点击的标记位置显示信息窗口
                    infowindow.open(map, marker);

                    // 将该信息窗口保存在infowindows对象中
                    infowindows[key] = infowindow;
                }
            });
        })(marker, key);
    }
}



    
// // 获取链接元素
// var link = document.getElementById('link');

// // 添加点击事件监听器
// link.addEventListener('click', function(event) {
//     // 阻止默认链接跳转行为
//     event.preventDefault();

//     // 获取标记的跳转链接
//     var linkUrl = marker.content.linkUrl;

//     // 执行跳转操作，将页面跳转到对应的链接
//     window.location.href = linkUrl;
// });






};


