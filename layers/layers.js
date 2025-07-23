var wms_layers = [];


        var lyr_CartoVoyagerLabels_0 = new ol.layer.Tile({
            'title': 'Carto Voyager Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_finalfishininfrastructure_1 = new ol.format.GeoJSON();
var features_finalfishininfrastructure_1 = format_finalfishininfrastructure_1.readFeatures(json_finalfishininfrastructure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_finalfishininfrastructure_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_finalfishininfrastructure_1.addFeatures(features_finalfishininfrastructure_1);
var lyr_finalfishininfrastructure_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_finalfishininfrastructure_1, 
                style: style_finalfishininfrastructure_1,
                popuplayertitle: 'final fishin infrastructure',
                interactive: true,
    title: 'final fishin infrastructure<br />\
    <img src="styles/legend/finalfishininfrastructure_1_0.png" /> Fish Landing Site<br />\
    <img src="styles/legend/finalfishininfrastructure_1_1.png" /> Fish Market<br />\
    <img src="styles/legend/finalfishininfrastructure_1_2.png" /> Fishery Harbour<br />\
    <img src="styles/legend/finalfishininfrastructure_1_3.png" /> Fishery Harbour & Market<br />\
    <img src="styles/legend/finalfishininfrastructure_1_4.png" /> Fishing Jetty<br />' });
var format_FinalfishingCommunities_2 = new ol.format.GeoJSON();
var features_FinalfishingCommunities_2 = format_FinalfishingCommunities_2.readFeatures(json_FinalfishingCommunities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalfishingCommunities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalfishingCommunities_2.addFeatures(features_FinalfishingCommunities_2);
var lyr_FinalfishingCommunities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalfishingCommunities_2, 
                style: style_FinalfishingCommunities_2,
                popuplayertitle: 'Final fishing Communities',
                interactive: true,
                title: '<img src="styles/legend/FinalfishingCommunities_2.png" /> Final fishing Communities'
            });

lyr_CartoVoyagerLabels_0.setVisible(true);lyr_finalfishininfrastructure_1.setVisible(true);lyr_FinalfishingCommunities_2.setVisible(true);
var layersList = [lyr_CartoVoyagerLabels_0,lyr_finalfishininfrastructure_1,lyr_FinalfishingCommunities_2];
lyr_finalfishininfrastructure_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'District': 'District', });
lyr_FinalfishingCommunities_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'district': 'district', });
lyr_finalfishininfrastructure_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'District': 'TextEdit', });
lyr_FinalfishingCommunities_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'district': 'TextEdit', });
lyr_finalfishininfrastructure_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'District': 'inline label - always visible', });
lyr_FinalfishingCommunities_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'district': 'no label', });
lyr_FinalfishingCommunities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});