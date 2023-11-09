
const MEDIA_SERVER_PATH = "https://storage.lib.hkbu.edu.hk/projects/1941hkbattle-qef/"
  , SEARCH_PAGE_PATH = "data.php"
  , OPTIONS = {
    map: {
        zoom: {
            default: 11,
            max: 17,
            min: 10
        }
    },
    historicalMaps: {
        opacity: 1,
        defaultMap: "1945"
    },
    units: {
        defaultIconSet: 1,
        opacity: .9
    },
    event: {
        intervalTime: 5e3,
        autoZoom: !1,
        stopAtLast: !0
    },
    transition: {
        frames: 49,
        totalTime: 3500
    },
    structure: {
        opacity: 1,
        styles: {
            normal: {
                strokeWeight: 2,
                fillOpacity: .7
            },
            mouseover: {
                strokeWeight: 4
            }
        }
    },
    eventDateLabel: {
        show: ["1208-0", "1211-1", "1218-1", "1225-1"]
    }
}
  , UI = {
    iconSet: [{
        name: "None",
        title: _t("Hide units"),
        path: null,
        size: 0
    }, {
        name: "NATO",
        title: _t("Show units in NATO Joint Military Symbology"),
        path: MEDIA_SERVER_PATH + "media/unitsymbols/NATO/",
        scaledSize: new google.maps.Size(52,52)
    }, {
        name: "Graphical",
        title: _t("Show units in graphical symbology"),
        path: MEDIA_SERVER_PATH + "media/unitsymbols/graphical/",
        scaledSize: new google.maps.Size(52,52)
    }],
    text: {
        iconNotSelected: _t("Click an icon for information."),
        noInfo: _t("No further information for this item."),
        backTo: _t("Back to "),
        noEventDescription: _t("<p>Description not found...</p><p>Data Team, please check.</p>")
    }
}
  , AdditionalLayerOptions = {
    "Faces of War": {
        show: "marker"
    },
    "Images of War": {
        show: "marker"
    },
    "War Crimes": {
        show: "marker"
    },
    "Objects of War": {
        show: "list",
        url: "search.php?"
    },
    Units: {
        show: "list",
        url: "search.php?"
    },
    "List of Hong Kong combatants": {
        show: "list",
        url: "search.php?showexact=list&"
    }
}
  , PROCESS = {
    event: {
        previous: -1,
        current: -1,
        timer: null,
        autoPlay: !1,
        clock: null,
        autoZoom: OPTIONS.event.autoZoom
    },
    units: {
        iconSet: 0
    },
    transition: {
        current: 0,
        timer: null,
        intervalTime: Math.floor(OPTIONS.transition.totalTime / OPTIONS.transition.frames),
        autoPlay: !1,
        playing: !1
    },
    structure: {},
    historicalMap: {
        current: null
    },
    kmlLayers: {},
    panels: {
        infoPanel: {
            doExpand: !1
        }
    }
};
function getCssVar(e) {
    return getComputedStyle(document.documentElement).getPropertyValue(e)
}
const re = {
    image: /\.(bmp|png|jpe?g)$/i,
    video: /\.(mpe?g|mp4|ogg)$/i
}
  , HKsw = new google.maps.LatLng(21.851968456454532,112.81738983154295)
  , HKne = new google.maps.LatLng(22.98199133209345,115.43076263427733)
  , HKBound = new google.maps.LatLngBounds(HKsw,HKne)
  , map = new google.maps.Map(document.getElementById("map"),{
    zoom: OPTIONS.map.zoom.default,
    minZoom: OPTIONS.map.zoom.min,
    maxZoom: OPTIONS.map.zoom.max,
    center: HKBound.getCenter(),
    mapTypeControl: !1,
    fullscreenControl: !1,
    streetViewControl: !1,
    zoomControl: !1,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    restriction: {
        latLngBounds: HKBound,
        strictBounds: !1
    }
})
  , historicalMaps = {
  
}
  , kmlLayers = {
    comm: {
        displayName: "Communication",
        url: MEDIA_SERVER_PATH + "/kml/comm.kml?t=" + (new Date).getTime(),
        checkboxId: null,
        layer: null
    },
    navaldef: {
        displayName: "Naval Defences",
        url: MEDIA_SERVER_PATH + "/kml/navaldef.kml?t=" + (new Date).getTime(),
        checkboxId: null,
        layer: null
    }
};
class TickingClock {
    constructor(e) {
        var t = new Date
          , a = new Date
          , n = 30
          , i = 1e3
          , r = null
          , o = null
          , s = 0
          , l = 0
          , c = 0
          , m = function() {
            let e = t.getTime() + l * c
              , n = ++l >= s;
            r && r(new Date(e), n ? a : null),
            n && p()
        }
          , p = function() {
            o && (clearInterval(o),
            o = null)
        };
        this.setOptions = function(e) {
            if (e)
                for (var o in e)
                    switch (o) {
                    case "start":
                        t = e[o];
                        break;
                    case "end":
                        a = e[o];
                        break;
                    case "frameRate":
                        n = Math.floor(e[o]),
                        isNaN(n) && (n = 30);
                        break;
                    case "duration":
                        i = Math.floor(e[o]),
                        isNaN(i) && (i = 1e3);
                        break;
                    case "tickCallback":
                        r = e[o]
                    }
        }
        ,
        this.tick = function(e) {
            this.pause(),
            e && this.setOptions(e),
            l = 0,
            s = Math.floor(i / 1e3 * n),
            c = Math.floor((a.getTime() - t.getTime()) / s),
            t != a ? o = setInterval(m, Math.floor(1e3 / n)) : m()
        }
        ,
        this.pause = function() {
            p()
        }
        ,
        e && this.setOptions(e)
    }
}
function formatDisplayTime(e, t) {
    return t.replace("{Y}", e.getFullYear()).replace("{M}", LOCALE.months[e.getMonth()]).replace("{D}", ("0" + e.getDate()).slice(-2)).replace("{h}", ("0" + e.getHours().toString()).slice(-2)).replace("{i}", ("0" + e.getMinutes().toString()).slice(-2)).replace("{s}", ("0" + e.getSeconds().toString()).slice(-2))
}
function showTime(e) {
    $("#clock").html(formatDisplayTime(e, LOCALE.datetimeMask))
}
function _t(e) {
    return e && "undefined" != typeof TEXT && e in TEXT ? TEXT[e] : e
}
PROCESS.event.clock = new TickingClock({
    duration: OPTIONS.transition.totalTime,
    tickCallback: function(e, t) {
        showTime(e),
        t && showTime(t)
    }
});
var initMap = function() {
    const e = new google.maps.StyledMapType(MapStylers,{
        name: "Styled Map"
    });
    map.mapTypes.set("styled_map", e),
    map.setMapTypeId("styled_map"),
    map.addListener("bounds_changed", function() {
        showMapInfo()
    })
}();
function prepareMapIcons() {
    OPTIONS.map.zoom.default <= OPTIONS.map.zoom.min ? $("#mapZoomOut").addClass("disabled") : OPTIONS.map.zoom.default >= OPTIONS.map.zoom.max && $("#mapZoomIn").addClass("disabled"),
    OPTIONS.historicalMaps.opacity >= 1 ? $("#mapOpacityMore").addClass("disabled") : OPTIONS.historicalMaps.opacity <= 0 && $("#mapOpacityLess").addClass("disabled"),
    OPTIONS.event.autoZoom || $("#mapAutoZoom").addClass("disabled")
}
function prepareHistoricalMaps() {
    let e = [];
    historicalMaps && e.push('<div><input type="radio" id="optHistoricalMapNone" name="historicalMap" value="None" onclick="togglehistoricalMap(this.value)"><label for="optHistoricalMapNone">' + _t("None") + "</label></option></div>");
    let t = parseInt(getCssVar("--zIndexHistoricalMap"));
    for (layerName in historicalMaps)
        e.push('<div><input type="radio" id="optHistoricalMap' + layerName + '" name="historicalMap" value="' + layerName + '" onclick="togglehistoricalMap(this.value)"><label for="optHistoricalMap' + layerName + '">' + historicalMaps[layerName].alt + "</label></option></div>"),
        historicalMaps[layerName].tileSize ? historicalMaps[layerName].layer = new google.maps.ImageMapType({
            alt: historicalMaps[layerName].alt,
            name: layerName,
            tileSize: new google.maps.Size(historicalMaps[layerName].tileSize,historicalMaps[layerName].tileSize),
            minZoom: 10,
            maxZoom: 16,
            zIndex: t,
            opacity: OPTIONS.historicalMaps.opacity,
            getTileUrl: function(e, t) {
                if (t in historicalMaps[this.name].tileBound)
                    return e.x >= historicalMaps[this.name].tileBound[t].x.min && e.x <= historicalMaps[this.name].tileBound[t].x.max && e.y >= historicalMaps[this.name].tileBound[t].y.min && e.y <= historicalMaps[this.name].tileBound[t].y.max ? historicalMaps[this.name].url.replace("{x}", e.x).replace("{y}", e.y).replace("{z}", t) : void 0
            }
        }) : historicalMaps[layerName].layer = new google.maps.GroundOverlay(historicalMaps[layerName].url,historicalMaps[layerName].bounds,{
            clickable: !1,
            opacity: OPTIONS.historicalMaps.opacity
        });
    $("#historicalMapItems").append(e.join("\n")),
    togglehistoricalMap(OPTIONS.historicalMaps.defaultMap),
    $("#optHistoricalMap" + OPTIONS.historicalMaps.defaultMap).prop("checked", "checked")
}
function togglehistoricalMap(e) {
    if (PROCESS.historicalMap.current != e) {
        for (lName in historicalMaps)
            if (lName == e)
                historicalMaps[lName].layer.setOpacity(OPTIONS.historicalMaps.opacity),
                e in historicalMaps && (historicalMaps[e].tileSize ? map.overlayMapTypes.push(historicalMaps[e].layer) : historicalMaps[e].layer.setMap(map));
            else if (historicalMaps[lName].tileSize) {
                for (i = 0; i < map.overlayMapTypes.getLength(); i++)
                    if (map.overlayMapTypes.getAt(i).name == lName) {
                        map.overlayMapTypes.removeAt(i);
                        break
                    }
            } else
                historicalMaps[lName].layer.setMap(null);
        PROCESS.historicalMap.current = e
    }
}
function setHistoricalMapOpacity(e) {
    let t = PROCESS.historicalMap.current;
    if (t in historicalMaps) {
        let a = historicalMaps[t].layer.getOpacity() + e;
        a <= 0 ? (a = 0,
        $("#mapOpacityLess").hasClass("disabled") || $("#mapOpacityLess").addClass("disabled")) : $("#mapOpacityLess").hasClass("disabled") && $("#mapOpacityLess").removeClass("disabled"),
        a >= 1 ? (a = 1,
        $("#mapOpacityMore").hasClass("disabled") || $("#mapOpacityMore").addClass("disabled")) : $("#mapOpacityMore").hasClass("disabled") && $("#mapOpacityMore").removeClass("disabled"),
        historicalMaps[t].layer.setOpacity(a)
    }
}
function zoomMap(e) {
    map.setZoom(map.getZoom() + e);
    let t = map.getZoom();
    t <= OPTIONS.map.zoom.min ? $("#mapZoomOut").hasClass("disabled") || $("#mapZoomOut").addClass("disabled") : $("#mapZoomOut").hasClass("disabled") && $("#mapZoomOut").removeClass("disabled"),
    t >= OPTIONS.map.zoom.max ? $("#mapZoomIn").hasClass("disabled") || $("#mapZoomIn").addClass("disabled") : $("#mapZoomIn").hasClass("disabled") && $("#mapZoomIn").removeClass("disabled")
}
function prepareKml() {
    for (layerName in kmlLayers)
        chkId = "chkKml" + layerName,
        kmlLayers[layerName].checkboxId = chkId,
        btn = '<div><input id="' + chkId + '" type="checkbox" value="' + layerName + '" onclick="toggleKmlLayer(this)"><label for="' + chkId + '">' + kmlLayers[layerName].displayName + "</label></div>",
        $("#kmlItems").append(btn),
        kmlLayers[layerName].layer = new google.maps.KmlLayer({
            url: kmlLayers[layerName].url,
            suppressInfoWindow: !0,
            preserveViewport: !1
        })
}
function toggleKmlLayer(e) {
    layerName = e.value,
    layerName in kmlLayers && kmlLayers[layerName].layer.setMap(e.checked ? map : null)
}
function prepareEventButtons() {
    for (eventDates = {},
    i = 0; i < events.length; i++)
        eventSeq = i + 1,
        eventType = "A",
        events[i].date in eventDates ? eventType = "B" : eventDates[events[i].date] = !0,
        events[i].type = eventType,
        dateLabel = "",
        OPTIONS.eventDateLabel.show.indexOf(events[i].id) >= 0 && (dateLabel = ' data-dateLabel="' + formatDisplayTime(new Date(events[i].date + "T" + events[i].startTime), LOCALE.datetimeMaskMin) + '"'),
        dateTime = formatDisplayTime(new Date(events[i].date + "T" + events[i].startTime), LOCALE.datetimeMaskShort),
        btn = '<div id="eventSpot' + i.toString() + '" class="eventSpot type' + eventType + '" onclick="eventBtn_click(' + i + ')"' + dateLabel + ' data-datetime="' + dateTime + '"></div>',
        $("#eventTimeline").append(btn)
}
function prepareUnitTransitions(e) {
    for (numOfEvents = units[e].events.length,
    currentEvent = 0; currentEvent < numOfEvents; currentEvent++)
        if (nextEvent = currentEvent + 1,
        units[e].events[currentEvent] && units[e].events[nextEvent] && currentEvent != numOfEvents && nextEvent != numOfEvents)
            if (currentPos = units[e].events[currentEvent].pos,
            nextPos = units[e].events[nextEvent].pos,
            currentPos.lat != nextPos.lat || currentPos.lng != nextPos.lng)
                for (latFrac = (nextPos.lat - currentPos.lat) / OPTIONS.transition.frames,
                lngFrac = (nextPos.lng - currentPos.lng) / OPTIONS.transition.frames,
                units[e].transitframes[currentEvent] = [],
                frame = 0; frame < OPTIONS.transition.frames; frame++)
                    lat = currentPos.lat + latFrac * (frame + 1),
                    lng = currentPos.lng + lngFrac * (frame + 1),
                    units[e].transitframes[currentEvent][frame] = {
                        lat: lat,
                        lng: lng
                    };
            else
                units[e].transitframes[currentEvent] = null;
        else
            units[e].transitframes[currentEvent] = null
}
function prepareUnits() {
    let e = parseInt(getCssVar("--zIndexUnitIcons"));
    for (unit in units)
        marker = new google.maps.Marker({
            map: map,
            zIndex: e,
            opacity: OPTIONS.units.opacity,
            label: markerLabel("", "unit"),
            draggerable: !1,
            visible: !1,
            info: null
        }),
        marker.info = getUnitInfo(unit),
        marker.addListener("click", function(e) {
            infoPanelForceExpand(!0),
            html = this.info ? this.info : null,
            displayInfo(html || UI.text.noInfo, !0)
        }),
        units[unit].marker = marker,
        units[unit].timer = null,
        units[unit].transitframes = [],
        prepareUnitTransitions(unit);
    prepareUnitItems()
}
function prepareUnitItems() {
    let e = "";
    for (i in UI.iconSet)
        item = i - 1,
        "QEF" == SUB_DIVISION && 1 == i || (e += '<div title="' + UI.iconSet[i].title + '"><input id="showUnit' + item + '" type="radio" name="showUnit" value="0" onclick="showUnit(' + item + ')" /><label for="showUnit' + item + '">' + _t(UI.iconSet[i].name) + "</label></div>");
    $("#unitItems").html(e),
    PROCESS.units.iconSet = OPTIONS.units.defaultIconSet,
    $("#showUnit" + PROCESS.units.iconSet).prop("checked", "checked")
}
function showUnit(e) {
    PROCESS.units.iconSet != e && (PROCESS.units.iconSet = e,
    triggerEvent(PROCESS.event.current))
}
function getUnitInfo(e) {
    return e
}
function getUnitIcon(e) {
    return currentIconSet = PROCESS.units.iconSet,
    currentIconSet < 0 || !e ? null : (uiOptionIndex = currentIconSet + 1,
    {
        url: UI.iconSet[uiOptionIndex].path + e[currentIconSet],
        scaledSize: UI.iconSet[uiOptionIndex].scaledSize
    })
}
function startTransition(e) {
    stopTransition(),
    PROCESS.transition.current = 0,
    PROCESS.transition.timer = setInterval(doTransition, PROCESS.transition.intervalTime),
    PROCESS.event.clock.tick({
        start: new Date(events[e].date + "T" + events[e].startTime),
        end: new Date(events[e].endDatetime.replace(/\s/, "T"))
    })
}
function stopTransition() {
    PROCESS.transition.timer && (clearInterval(PROCESS.transition.timer),
    PROCESS.transition.timer = null,
    PROCESS.event.clock.pause(),
    PROCESS.event.playing && showTime(new Date(events[PROCESS.event.current].endDatetime.replace(/\s/, "T"))))
}
function doTransition() {
    for (unit in event = PROCESS.event.current,
    units)
        units[unit].transitframes && units[unit].transitframes[event] && units[unit].marker.setPosition(units[unit].transitframes[event][PROCESS.transition.current]);
    PROCESS.transition.current++,
    PROCESS.transition.current >= OPTIONS.transition.frames && (stopTransition(),
    PROCESS.transition.current = 0)
}
function startEvent() {
    stopEvent(),
    next = PROCESS.event.current + 1,
    $("#eventButton").hasClass("play") && $("#eventButton").removeClass("play"),
    $("#eventButton").addClass("pause"),
    PROCESS.event.playing = !0,
    PROCESS.event.current >= events.length ? stopEvent() : PROCESS.event.current >= 0 && triggerEvent(PROCESS.event.current),
    next < events.length - 1 && (PROCESS.event.timer = setInterval(triggerNextEvent, OPTIONS.event.intervalTime))
}
function stopEvent() {
    PROCESS.event.timer && (clearInterval(PROCESS.event.timer),
    PROCESS.event.timer = null,
    stopTransition()),
    PROCESS.event.playing = !1,
    $("#eventButton").hasClass("pause") && $("#eventButton").removeClass("pause"),
    $("#eventButton").addClass("play")
}
function triggerEvent(e) {
    if (!(e < 0 || e >= events.length)) {
        for (unit in PROCESS.event.previous = PROCESS.event.current,
        PROCESS.event.current = e,
        showTime(new Date(events[e].date + "T" + events[e].startTime)),
        PROCESS.event.playing && startTransition(PROCESS.event.current),
        "inf"in events[PROCESS.event.current] ? $("#eventDescriptionPanel .content").html(events[PROCESS.event.current].inf) : $("#eventDescriptionPanel .content").html(UI.text.noEventDescription),
        units)
            units[unit].events[e] ? (units[unit].marker.setPosition(units[unit].events[e].pos),
            units[unit].marker.setLabel(markerLabel(units[unit].events[e].unitCodeDisp, "unit")),
            units[unit].marker.setIcon(getUnitIcon(units[unit].events[e].icon)),
            units[unit].marker.info = formUnitInfo(unit, e),
            units[unit].marker.setVisible(PROCESS.units.iconSet >= 0)) : units[unit].marker.setVisible(!1);
        PROCESS.event.autoZoom && (map.setZoom(events[e].zoom),
        events[e].ctrPt && map.setCenter(events[e].ctrPt)),
        $("#eventSpot" + PROCESS.event.current).removeClass("type" + events[PROCESS.event.current].type),
        $("#eventSpot" + PROCESS.event.current).addClass("type" + events[PROCESS.event.current].type + "active"),
        PROCESS.event.previous >= 0 && PROCESS.event.previous != PROCESS.event.current && ($("#eventSpot" + PROCESS.event.previous).removeClass("type" + events[PROCESS.event.previous].type + "active"),
        $("#eventSpot" + PROCESS.event.previous).addClass("type" + events[PROCESS.event.previous].type))
    }
}
function triggerNextEvent() {
    nextEvent = PROCESS.event.current + 1;
    let e = events.length;
    nextEvent == e && OPTIONS.event.stopAtLast ? stopEvent() : ((nextEvent < 0 || nextEvent == e) && (nextEvent = 0),
    triggerEvent(nextEvent, !0))
}
$(document).ready(function() {
    displayInfo(null, !1),
    prepareMapIcons(),
    prepareHistoricalMaps(),
    prepareUnits(),
    prepareEventButtons(),
    prepareStructures(),
    prepareAdditionalLayers(),
    triggerEvent(0, !1),
    window.innerWidth < 960 && collapseOptionPanel(),
    repositionLeftPanels()
});
var structureDisplays = {}
  , warrecordDisplays = {};
function formMedia(e, t) {
    if (!t)
        return "";
    let a = MEDIA_SERVER_PATH + "media/gallery/"
      , n = "";
    if (a && t) {
        n += '<div class="photoAlbum"><div class="images">',
        t.toString().split(",").forEach(e=>{
            (e = e.trim()) && (re.video.test(e) ? n += '<img src="../media/ui/movie-icon.png" onclick="showMedia(\'' + a + e + "')\" />" : re.image.test(e) && (n += '<img src="' + a + e + '" onclick="showMedia(this.src)" />'))
        }
        ),
        n += "</div></div>"
    }
    return n
}
function formDescription(e) {
    let t = "";
    if (e) {
        e.split("\n").forEach(e=>{
            let a = e.trim();
            a && (t += "<p>" + a + "</p>")
        }
        )
    }
    return t
}
function prepareStructures() {
    function e(e, t) {
        return media = "",
        "media"in structures[e][t] && (media = formMedia(e, structures[e][t].media)),
        "<div><h1>" + structures[e][t].name + "</h1>" + media + formatInfo(_t("Type"), getStructureGroupName(e)) + formatInfo(_t("Built Year"), structures[e][t].builtYear) + formatInfo(_t("Location"), structures[e][t].loc) + formatInfo(_t("Description"), formDescription(structures[e][t].desc)) + formatInfo(_t("Source"), structures[e][t].src) + "</div>"
    }
    structureSeq = 0;
    let t = parseInt(getCssVar("--zIndexStructures"));
    for (type in structures) {
        for (structureDisplays[type] = {},
        structureDisplays[type].visible = !1,
        chkId = "chkStructure" + structureSeq,
        structureDisplays[type].checkboxId = chkId,
        html = '<div><input id="' + chkId + '" type="checkbox" onclick="toggleStructure(this)" value="' + type + '" /><label for="' + chkId + '">' + getStructureGroupName(type) + "</label></div>",
        $("#structureItems").append(html),
        i = 0; i < structures[type].length; i++) {
            if (mapObject = null,
            structures[type][i].mapObj) {
                switch (structures[type][i].mapObj.type) {
                case "LineString":
                    mapObject = new google.maps.Polyline({
                        map: map,
                        path: structures[type][i].mapObj.path,
                        strokeColor: structures[type][i].mapObj.styles.color,
                        strokeWeight: OPTIONS.structure.styles.normal.strokeWeight,
                        visible: !1,
                        info: e(type, i)
                    });
                    break;
                case "Polygon":
                    mapObject = new google.maps.Polygon({
                        map: map,
                        paths: structures[type][i].mapObj.path,
                        fillColor: structures[type][i].mapObj.styles.color,
                        fillOpacity: OPTIONS.structure.styles.normal.fillOpacity,
                        strokeColor: structures[type][i].mapObj.styles.color,
                        strokeWeight: OPTIONS.structure.styles.normal.strokeWeight,
                        visible: !1,
                        info: e(type, i)
                    })
                }
                mapObject && mapObject.addListener("click", function(e) {
                    infoPanelForceExpand(!0),
                    displayInfo(this.info, !0)
                })
            } else
                mapObject = new google.maps.Marker({
                    position: structures[type][i].pos,
                    map: map,
                    label: markerLabel(structures[type][i].iconName, "structure"),
                    title: structures[type][i].name,
                    icon: {
                        url: MEDIA_SERVER_PATH + "media/structures/" + structures[type][i].icon,
                        scaledSize: new google.maps.Size(40,40)
                    },
                    zIndex: t,
                    visible: structureDisplays[type].visible,
                    info: e(type, i)
                }),
                mapObject.addListener("click", function(e) {
                    infoPanelForceExpand(!0),
                    displayInfo(this.info, !0)
                });
            mapObject && (structures[type][i].mapObject = mapObject)
        }
        structureSeq++
    }
}
function toggleStructure(e) {
    for (type in structures)
        if (e.value == type)
            for (i = 0; i < structures[type].length; i++)
                structures[type][i].mapObject.setVisible(e.checked)
}
function prepareAdditionalLayers() {
    function e(e, t) {
        return media = "",
        "media"in warrecords[e][t] && (media = formMedia(type, warrecords[e][t].media)),
        "<div><h1>" + warrecords[e][t].name + "</h1>" + media + formatInfo(_t("Type"), getWarrecordGroupName(e)) + formatInfo(_t("Built Year"), warrecords[e][t].builtYear) + formatInfo(_t("Location"), warrecords[e][t].loc) + formatInfo(_t("Born"), warrecords[e][t].born) + formatInfo(_t("Death"), warrecords[e][t].death) + formatInfo(_t("Branch/Service"), warrecords[e][t].branch_services) + formatInfo(_t("Unit/Organization"), warrecords[e][t].unit_organization) + formatInfo(_t("Service Number"), warrecords[e][t].service_no) + formatInfo(_t("Date of Induction/Enlistment"), warrecords[e][t].date_of_induction) + formatInfo(_t("Rank/Post"), warrecords[e][t].rank_post) + formatInfo(_t("War Station"), warrecords[e][t].war_station) + formatInfo(_t("More Info"), warrecords[e][t].more_info) + formatInfo(_t("Pre-war"), warrecords[e][t].pre_war) + formatInfo(_t("Wartime"), warrecords[e][t].wartime) + formatInfo(_t("Post-war"), warrecords[e][t].post_war) + formatInfo(_t("Awards (other than the campaign medals)"), warrecords[e][t].awards) + formatInfo(_t("Further Reading"), warrecords[e][t].further_readings) + formatInfo(_t("Occurance Time"), warrecords[e][t].occurance_time) + formatInfo(_t("Casualties"), warrecords[e][t].casualties) + formatInfo(_t("First Hand Accounts"), warrecords[e][t].first_hand_accounts) + formatInfo(_t("Calibre"), warrecords[e][t].calibre) + formatInfo(_t("Projectile Weight"), warrecords[e][t].protectile_weight) + formatInfo(_t("Range"), warrecords[e][t].range) + formatInfo(_t("Rate of Fire"), warrecords[e][t].rate_of_fire) + formatInfo(_t("Description"), formDescription(warrecords[e][t].desc)) + formatInfo(_t("Source"), warrecords[e][t].src) + "</div>"
    }
    warrecordsSeq = 0;
    let t = parseInt(getCssVar("--zIndexStructures"));
    for (group in warrecords) {
        warrecordDisplays[group] = {},
        warrecordDisplays[group].visible = !1,
        chkId = "chkAdditionalLayer" + warrecordsSeq,
        warrecordDisplays[group].checkboxId = chkId,
        group in AdditionalLayerOptions && "show"in AdditionalLayerOptions[group] && "list" === AdditionalLayerOptions[group].show ? html = '<div class="storyList" onclick="gotoDataPage(\'' + group + "')\">" + getWarrecordGroupName(group) + "</div>" : html = '<div><input id="' + chkId + '" type="checkbox" onclick="toggleAdditionalLayers(this)" value="' + group + '" /><label for="' + chkId + '">' + getWarrecordGroupName(group) + "</label></div>",
        $("#warrecordsItems").append(html);
        for (i = 0; i < warrecords[group].length; i++)
            "pos"in warrecords[group][i] && (mapObject = new google.maps.Marker({
                position: warrecords[group][i].pos,
                map: map,
                label: markerLabel(warrecords[group][i].iconName, "warrecord"),
                title: warrecords[group][i].name,
                icon: {
                    url: MEDIA_SERVER_PATH + "media/structures/" + warrecords[group][i].icon,
                    scaledSize: new google.maps.Size(40,40)
                },
                zIndex: t,
                visible: warrecordDisplays[group].visible,
                info: e(group, i)
            }),
            mapObject.addListener("click", function(e) {
                infoPanelForceExpand(!0),
                displayInfo(this.info, !0)
            }),
            warrecords[group][i].mapObject = mapObject);
        warrecordsSeq++
    }
}
function toggleAdditionalLayers(e) {
    for (group in warrecords)
        if (e.value == group)
            for (i = 0; i < warrecords[group].length; i++)
                "mapObject"in warrecords[group][i] && warrecords[group][i].mapObject.setVisible(e.checked)
}
function displayInfo(e, t) {
    t && e ? $("#infoPanel .content").html(e) : PROCESS.panels.infoPanel.doExpand || $("#infoPanel .content").html(UI.text.iconNotSelected),
    t || PROCESS.panels.infoPanel.doExpand ? ($("#infoPanel").removeClass("collapse"),
    $("#infoPanelFlap").removeClass("collapse")) : PROCESS.panels.infoPanel.doExpand || ($("#infoPanel").addClass("collapse"),
    $("#infoPanelFlap").addClass("collapse")),
    load_href()
}
function togglePlayButtonOld(e) {
    playing = "Play" != $(e).html(),
    playing ? stopEvent() : (triggerEvent(PROCESS.event.current, !0),
    startEvent())
}
function togglePlayButton(e) {
    PROCESS.event.playing ? stopEvent() : (triggerEvent(PROCESS.event.current, !0),
    startEvent())
}
function eventBtn_click(e) {
    PROCESS.event.playing && (stopEvent(),
    startEvent()),
    triggerEvent(e)
}
function toggleTransition(e) {
    PROCESS.transition.timer ? (stopTransition(),
    PROCESS.transition.autoPlay = !1) : (PROCESS.transition.autoPlay = !0,
    startTransition(0))
}
function isDataReady() {
    return events && units && structures
}
function triggerAutoZoom() {
    $("#mapAutoZoom").hasClass("disabled") ? ($("#mapAutoZoom").removeClass("disabled"),
    PROCESS.event.autoZoom = !0) : ($("#mapAutoZoom").addClass("disabled"),
    PROCESS.event.autoZoom = !1)
}
function formatInfo(e, t) {
    return t ? "<div><h2>" + e + '</h2><div class="text">' + t + "</div></div>" : ""
}
function formUnitInfo(e, t) {
    function a(e, t, a) {
        return value = units[e].events[a][t],
        "number" == typeof value ? units[e].events[value][t] ? value = units[e].events[value][t] : value = "" : "string" == typeof value || (value = ""),
        value
    }
    return "<div><h1>" + units[e].events[t].unitName + "</h1>" + formatInfo(_t("Description"), a(e, "desc", t)) + formatInfo(_t("Source"), a(e, "src", t)) + "</div>"
}
function repositionLeftPanels() {
    $("#eventDescriptionPanel").css({
        left: $("#optionPanel").outerWidth()
    }),
    $("#eventDescriptionPanelFlap").css({
        left: $("#optionPanel").outerWidth() + $("#eventDescriptionPanel").outerWidth()
    })
}
function collapseOptionPanel() {
    $("#optionPanel").addClass("collapse"),
    $("#optionPanelFlap").addClass("collapse"),
    $("#clock").addClass("panelCollapse"),
    $("#logoPane").addClass("small")
}
function expandOptionPanel() {
    $("#optionPanel").removeClass("collapse"),
    $("#optionPanelFlap").removeClass("collapse"),
    $("#clock").removeClass("panelCollapse"),
    $("#logoPane").removeClass("small")
}
function toggleOptionPanel() {
    $("#optionPanel").hasClass("collapse") ? expandOptionPanel() : collapseOptionPanel(),
    repositionLeftPanels()
}
function toggleEventDescriptionPanel() {
    $("#eventDescriptionPanel").hasClass("collapse") ? ($("#eventDescriptionPanel").removeClass("collapse"),
    $("#eventDescriptionPanelFlap").removeClass("collapse")) : ($("#eventDescriptionPanel").addClass("collapse"),
    $("#eventDescriptionPanelFlap").addClass("collapse")),
    repositionLeftPanels()
}
function infoPanelForceExpand(e) {
    PROCESS.panels.infoPanel.doExpand = e
}
function infoPanelFlap_click() {
    PROCESS.panels.infoPanel.doExpand = $("#infoPanel").hasClass("collapse"),
    toggleInfoPanel()
}
function toggleInfoPanel() {
    $("#infoPanel").hasClass("collapse") ? ($("#infoPanel").removeClass("collapse"),
    $("#infoPanelFlap").removeClass("collapse")) : PROCESS.panels.infoPanel.doExpand || ($("#infoPanel").addClass("collapse"),
    $("#infoPanelFlap").addClass("collapse"))
}
function showMapInfo() {
    let e = map.getZoom()
      , t = map.getCenter();
    $("#txtZoomLevel").val(e);
    matches = t.toString().match(/^\((\d+\.?\d*)\s*,\s*(\d+\.?\d*)\)$/i),
    $("#txtCenterPoint").val("(" + matches[1] + ", " + matches[2] + ")")
}
function markerLabel(e, t) {
    return {
        text: e,
        className: t + "Marker",
        fontWeight: "bold",
        fontSize: "10pt"
    }
}
function showModalScreen(e, t) {
    e
}
function hideModalScreen(e) {}
function initMedia() {
    $("#mediaPanel").hide(),
    $("#mediaImg").hide().src(""),
    $("#mediaVideo").hide().src("")
}
function showMedia(e) {
    if (!e)
        return;
    let t = !1;
    re.image.test(e) ? ($("#mediaPanel .context").html('<img src="' + e + '" onclick="hideMedia()" oncontextmenu="return false;" />'),
    t = !0) : re.video.test(e) && ($("#mediaPanel .context").html('<video controls controlsList="nodownload" autoplay oncontextmenu="return false;"><source src="' + e + '" /></video>'),
    t = !0),
    t && ($("#mediaPanel").hasClass("hide") && $("#mediaPanel").removeClass("hide"),
    $("#mediaPanel").show())
}
function hideMedia() {
    $("#mediaPanel").hide(),
    $("#mediaPanel .context").html("")
}
function getStructureAndStoryInfoHtml(e, t) {
    if (!e)
        return "";
    return ""
}
function showStory(e, a) {
    let n = e || null
      , r = null;
    if (n in structures) {
        for (i in structures[n])
            if ("id"in structures[n][i] && structures[n][i].id === a) {
                r = structures[n][i];
                break
            }
    } else
        for (t in structures)
            for (i in structures[t])
                if ("id"in structures[t][i] && structures[t][i].id === a) {
                    n = t,
                    r = structures[t][i];
                    break
                }
    let o = "";
    r && "name"in r && (o += "<h1>" + r.name + "</h1>",
    o += "media"in r ? formMedia(e, r.media) : "",
    o += "desc"in r ? "<h2>" + _t("Description") + "</h2><div class='text'>" + r.desc + "</div>" : "",
    o += "src"in r ? "<h2>" + _t("Source") + "</h2><div class='text'>" + r.src + "</div>" : ""),
    displayInfo(o += "<hr /><a onclick='showStoryList(\"" + n + "\")'><img src='../media/ui/list4.png' /> " + UI.text.backTo + "<strong>" + getStructureGroupName(n) + "</strong></a>", !0)
}
function showStoryList(e) {
    if (!e in warrecords)
        return;
    let t = "<h1>" + getStructureGroupName(e) + "</h1>";
    for (item in t += "<ul>",
    warrecords[e])
        t += "<li><a onclick='showStory(\"" + e + '", "' + warrecords[e][item].id + "\")'>" + warrecords[e][item].name + "</a></li>";
    displayInfo(t += "</ul>", !0)
}
function gotoDataPage(e) {
    location.href = SEARCH_PAGE_PATH + "?show=list&find-in=" + e
}
function formInfoLinkHtml(e) {
    if (!e)
        return "";
    for (item in html = "",
    e)
        "url"in e[item] && "desc"in e[item] && (html += "<li><a onclick=\"showStory(null, '" + e[item].url + "')\">" + e[item].desc + "</a></li>");
    return html && (html = "<ul>" + html + "</ul>"),
    html
}
function getStructureGroupName(e) {
    try {
        return e && e in structures && structures[e] && structures[e][0] && "groupName"in structures[e][0] ? structures[e][0].groupName : e
    } catch (t) {
        return e
    }
}
function getWarrecordGroupName(e) {
    try {
        return e && e in warrecords && warrecords[e] && warrecords[e][0] && "groupName"in warrecords[e][0] ? warrecords[e][0].groupName : e
    } catch (t) {
        return e
    }
}
function formLink(e) {
    if (!e || !Array.isArray(e))
        return "";
    for (i in html = "",
    e)
        try {
            mask = '<li><a href="{URL}">{DESC}</a></li>',
            url = e[i].url,
            isValidId(url) && (url = formItemLink(url)),
            desc = e[i].desc,
            html += mask.replace("{URL}", url).replace("{DESC}", desc)
        } catch (e) {}
    return html && (html = '<ul class="link">' + html + "</ul>"),
    html
}
