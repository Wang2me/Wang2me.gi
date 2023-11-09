var mapstyle = [
        
    {
        featureType:'road',
        elementType: "labels.icon",
        stylers: [{ visibility: 'off' }]
    },
    {
        featureType:'road',
        elementType: 'labels.text',
        stylers: [{ visibility: 'off' }]
    },
    {
        featureType:'road',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
    },
    {
        featureType: 'poi',
        elementType:'labels.text',
        stylers: [{ visibility: 'on' }]
    },
    {
        featureType: 'poi',
        elementType:'labels.icon',
        stylers: [{ visibility: 'off' }]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]

    },
    {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },

      {
        featureType: "administrative",
        
        elementType: "geometry",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "administrative.province",
        
        elementType: "geometry",
        stylers: [{ visibility: "on" }],
      },
      
// {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
// {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
// {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
{
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: "on" }]
},
{
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: "on" }]
},
{
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ visibility: "on" }]
},
{
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ visibility: "on" }]
},

{
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ visibility: "on" }]
},
{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ visibility: "on" }]
},
{
    featureType: 'landscape',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }] // 关闭山脉
},
];