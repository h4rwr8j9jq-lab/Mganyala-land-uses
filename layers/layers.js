var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Mganyala_1 = new ol.format.GeoJSON();
var features_Mganyala_1 = format_Mganyala_1.readFeatures(json_Mganyala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mganyala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mganyala_1.addFeatures(features_Mganyala_1);
var lyr_Mganyala_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mganyala_1, 
                style: style_Mganyala_1,
                popuplayertitle: 'Mganyala',
                interactive: true,
                title: '<img src="styles/legend/Mganyala_1.png" /> Mganyala'
            });
var format_Mganyala_Boundary_2 = new ol.format.GeoJSON();
var features_Mganyala_Boundary_2 = format_Mganyala_Boundary_2.readFeatures(json_Mganyala_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mganyala_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mganyala_Boundary_2.addFeatures(features_Mganyala_Boundary_2);
var lyr_Mganyala_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mganyala_Boundary_2, 
                style: style_Mganyala_Boundary_2,
                popuplayertitle: 'Mganyala_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Mganyala_Boundary_2.png" /> Mganyala_Boundary'
            });
var format_Mganyala_Land_Use_3 = new ol.format.GeoJSON();
var features_Mganyala_Land_Use_3 = format_Mganyala_Land_Use_3.readFeatures(json_Mganyala_Land_Use_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mganyala_Land_Use_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mganyala_Land_Use_3.addFeatures(features_Mganyala_Land_Use_3);
var lyr_Mganyala_Land_Use_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mganyala_Land_Use_3, 
                style: style_Mganyala_Land_Use_3,
                popuplayertitle: 'Mganyala_Land_Use',
                interactive: true,
    title: 'Mganyala_Land_Use<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_0.png" /> Bwawa la matambiko<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_1.png" /> Eneo la Kilimo<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_2.png" /> Eneo la Kilimo Umwagiliaji<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_3.png" /> Eneo la Madini Ntumba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_4.png" /> Eneo la Makazi<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_5.png" /> Eneo la Makazi Ming\'ongoni<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_6.png" /> Eneo la Makazi Mnyagala A & B<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_7.png" /> Eneo la Malisho<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_8.png" /> Eneo la Mnada<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_9.png" /> Eneo la Viwanda<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_10.png" /> Eneo Shule ya Sekondari<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_11.png" /> Machinjio<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_12.png" /> Makaburi Ming\'ongoni<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_13.png" /> Makaburi Mnyagala A<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_14.png" /> Makaburi Mnyagala A1<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_15.png" /> Makaburi Mnyagala B<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_16.png" /> Makaburi Ntumba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_17.png" /> Makazi Mashamba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_18.png" /> Makazi na Mashamba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_19.png" /> Mlima wa madini<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_20.png" /> Mlima wa Madini<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_21.png" /> Msitu wa Hifadhi<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_22.png" /> Msitu wa Kupanda<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_23.png" /> Msitu wa Matumizi<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_24.png" /> Ofisi ya Kijiji<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_25.png" /> Shule ya Msingi Mnyagala<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_26.png" /> Shule ya Msingi Ntumba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_27.png" /> Soko Ntumba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_28.png" /> Zahanati<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_29.png" /> Zahanati Kitongoji cha Ntumba<br />\
    <img src="styles/legend/Mganyala_Land_Use_3_30.png" /> <br />' });
var format_Roads_Mganyala_4 = new ol.format.GeoJSON();
var features_Roads_Mganyala_4 = format_Roads_Mganyala_4.readFeatures(json_Roads_Mganyala_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_Mganyala_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_Mganyala_4.addFeatures(features_Roads_Mganyala_4);
var lyr_Roads_Mganyala_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_Mganyala_4, 
                style: style_Roads_Mganyala_4,
                popuplayertitle: 'Roads_Mganyala',
                interactive: true,
                title: '<img src="styles/legend/Roads_Mganyala_4.png" /> Roads_Mganyala'
            });
var format_River_Katuma_5 = new ol.format.GeoJSON();
var features_River_Katuma_5 = format_River_Katuma_5.readFeatures(json_River_Katuma_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_Katuma_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_Katuma_5.addFeatures(features_River_Katuma_5);
var lyr_River_Katuma_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_Katuma_5, 
                style: style_River_Katuma_5,
                popuplayertitle: 'River_Katuma',
                interactive: true,
                title: '<img src="styles/legend/River_Katuma_5.png" /> River_Katuma'
            });
var format_Mganyala_Boundary_6 = new ol.format.GeoJSON();
var features_Mganyala_Boundary_6 = format_Mganyala_Boundary_6.readFeatures(json_Mganyala_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mganyala_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mganyala_Boundary_6.addFeatures(features_Mganyala_Boundary_6);
var lyr_Mganyala_Boundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mganyala_Boundary_6, 
                style: style_Mganyala_Boundary_6,
                popuplayertitle: 'Mganyala_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Mganyala_Boundary_6.png" /> Mganyala_Boundary'
            });
var format_TZwards_7 = new ol.format.GeoJSON();
var features_TZwards_7 = format_TZwards_7.readFeatures(json_TZwards_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TZwards_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TZwards_7.addFeatures(features_TZwards_7);
var lyr_TZwards_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TZwards_7, 
                style: style_TZwards_7,
                popuplayertitle: 'TZwards',
                interactive: true,
                title: '<img src="styles/legend/TZwards_7.png" /> TZwards'
            });
var format_River_Katuma_8 = new ol.format.GeoJSON();
var features_River_Katuma_8 = format_River_Katuma_8.readFeatures(json_River_Katuma_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_Katuma_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_Katuma_8.addFeatures(features_River_Katuma_8);
var lyr_River_Katuma_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_Katuma_8, 
                style: style_River_Katuma_8,
                popuplayertitle: 'River_Katuma',
                interactive: true,
                title: '<img src="styles/legend/River_Katuma_8.png" /> River_Katuma'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Mganyala_1.setVisible(true);lyr_Mganyala_Boundary_2.setVisible(true);lyr_Mganyala_Land_Use_3.setVisible(true);lyr_Roads_Mganyala_4.setVisible(true);lyr_River_Katuma_5.setVisible(true);lyr_Mganyala_Boundary_6.setVisible(true);lyr_TZwards_7.setVisible(true);lyr_River_Katuma_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Mganyala_1,lyr_Mganyala_Boundary_2,lyr_Mganyala_Land_Use_3,lyr_Roads_Mganyala_4,lyr_River_Katuma_5,lyr_Mganyala_Boundary_6,lyr_TZwards_7,lyr_River_Katuma_8];
lyr_Mganyala_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Mganyala_Boundary_2.set('fieldAliases', {'id': 'id', });
lyr_Mganyala_Land_Use_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Matumizi': 'Matumizi', 'Area_Ha': 'Area_Ha', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Roads_Mganyala_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Jina': 'Jina', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_River_Katuma_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Jina': 'Jina', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Mganyala_Boundary_6.set('fieldAliases', {'id': 'id', });
lyr_TZwards_7.set('fieldAliases', {'id': 'id', });
lyr_River_Katuma_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Jina': 'Jina', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Mganyala_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mganyala_Boundary_2.set('fieldImages', {'id': '', });
lyr_Mganyala_Land_Use_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Matumizi': 'TextEdit', 'Area_Ha': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Roads_Mganyala_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Jina': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_River_Katuma_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Jina': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Mganyala_Boundary_6.set('fieldImages', {'id': '', });
lyr_TZwards_7.set('fieldImages', {'id': '', });
lyr_River_Katuma_8.set('fieldImages', {'OBJECTID': '', 'Jina': '', 'SHAPE_Leng': '', });
lyr_Mganyala_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'reg_code': 'inline label - always visible', 'reg_name': 'inline label - always visible', 'dist_code': 'inline label - always visible', 'dist_name': 'inline label - always visible', 'counc_code': 'inline label - always visible', 'counc_name': 'inline label - always visible', 'const_code': 'inline label - always visible', 'const_name': 'inline label - always visible', 'div_code': 'inline label - always visible', 'div_name': 'inline label - always visible', 'ward_code': 'inline label - always visible', 'ward_name': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Mganyala_Boundary_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Mganyala_Land_Use_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Matumizi': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Roads_Mganyala_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Jina': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_River_Katuma_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Jina': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_Mganyala_Boundary_6.set('fieldLabels', {'id': 'no label', });
lyr_TZwards_7.set('fieldLabels', {'id': 'no label', });
lyr_River_Katuma_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Jina': 'header label - visible with data', 'SHAPE_Leng': 'inline label - always visible', });
lyr_River_Katuma_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});