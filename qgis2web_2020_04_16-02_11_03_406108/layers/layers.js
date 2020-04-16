var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Generalistescopier_1 = new ol.format.GeoJSON();
var features_Generalistescopier_1 = format_Generalistescopier_1.readFeatures(json_Generalistescopier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Generalistescopier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generalistescopier_1.addFeatures(features_Generalistescopier_1);
var lyr_Generalistescopier_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Generalistescopier_1, 
                style: style_Generalistescopier_1,
                interactive: true,
                title: '<img src="styles/legend/Generalistescopier_1.png" /> Generalistes copier'
            });
var format_Generalistes_2 = new ol.format.GeoJSON();
var features_Generalistes_2 = format_Generalistes_2.readFeatures(json_Generalistes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Generalistes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generalistes_2.addFeatures(features_Generalistes_2);
var lyr_Generalistes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Generalistes_2, 
                style: style_Generalistes_2,
                interactive: true,
                title: '<img src="styles/legend/Generalistes_2.png" /> Generalistes'
            });
var format_Infirmierscopier_3 = new ol.format.GeoJSON();
var features_Infirmierscopier_3 = format_Infirmierscopier_3.readFeatures(json_Infirmierscopier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infirmierscopier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infirmierscopier_3.addFeatures(features_Infirmierscopier_3);
var lyr_Infirmierscopier_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infirmierscopier_3, 
                style: style_Infirmierscopier_3,
                interactive: true,
                title: '<img src="styles/legend/Infirmierscopier_3.png" /> Infirmiers copier'
            });
var format_Infirmiers_4 = new ol.format.GeoJSON();
var features_Infirmiers_4 = format_Infirmiers_4.readFeatures(json_Infirmiers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infirmiers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infirmiers_4.addFeatures(features_Infirmiers_4);
var lyr_Infirmiers_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infirmiers_4, 
                style: style_Infirmiers_4,
                interactive: true,
                title: '<img src="styles/legend/Infirmiers_4.png" /> Infirmiers'
            });
var format_Kinescopier_5 = new ol.format.GeoJSON();
var features_Kinescopier_5 = format_Kinescopier_5.readFeatures(json_Kinescopier_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kinescopier_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kinescopier_5.addFeatures(features_Kinescopier_5);
var lyr_Kinescopier_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kinescopier_5, 
                style: style_Kinescopier_5,
                interactive: true,
                title: '<img src="styles/legend/Kinescopier_5.png" /> Kines copier'
            });
var format_Kines_6 = new ol.format.GeoJSON();
var features_Kines_6 = format_Kines_6.readFeatures(json_Kines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kines_6.addFeatures(features_Kines_6);
var lyr_Kines_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kines_6, 
                style: style_Kines_6,
                interactive: true,
                title: '<img src="styles/legend/Kines_6.png" /> Kines'
            });
var format_Dentistescopier_7 = new ol.format.GeoJSON();
var features_Dentistescopier_7 = format_Dentistescopier_7.readFeatures(json_Dentistescopier_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dentistescopier_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dentistescopier_7.addFeatures(features_Dentistescopier_7);
var lyr_Dentistescopier_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dentistescopier_7, 
                style: style_Dentistescopier_7,
                interactive: true,
                title: '<img src="styles/legend/Dentistescopier_7.png" /> Dentistes copier'
            });
var format_Dentistes_8 = new ol.format.GeoJSON();
var features_Dentistes_8 = format_Dentistes_8.readFeatures(json_Dentistes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dentistes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dentistes_8.addFeatures(features_Dentistes_8);
var lyr_Dentistes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dentistes_8, 
                style: style_Dentistes_8,
                interactive: true,
                title: '<img src="styles/legend/Dentistes_8.png" /> Dentistes'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Generalistescopier_1.setVisible(true);lyr_Generalistes_2.setVisible(true);lyr_Infirmierscopier_3.setVisible(true);lyr_Infirmiers_4.setVisible(true);lyr_Kinescopier_5.setVisible(true);lyr_Kines_6.setVisible(true);lyr_Dentistescopier_7.setVisible(true);lyr_Dentistes_8.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Generalistescopier_1,lyr_Generalistes_2,lyr_Infirmierscopier_3,lyr_Infirmiers_4,lyr_Kinescopier_5,lyr_Kines_6,lyr_Dentistescopier_7,lyr_Dentistes_8];
lyr_Generalistescopier_1.set('fieldAliases', {'Générali': 'Générali', });
lyr_Generalistes_2.set('fieldAliases', {'Générali': 'Générali', });
lyr_Infirmierscopier_3.set('fieldAliases', {'Infirmier': 'Infirmier', });
lyr_Infirmiers_4.set('fieldAliases', {'Infirmier': 'Infirmier', });
lyr_Kinescopier_5.set('fieldAliases', {'Kiné': 'Kiné', });
lyr_Kines_6.set('fieldAliases', {'Kiné': 'Kiné', });
lyr_Dentistescopier_7.set('fieldAliases', {'Dentiste': 'Dentiste', });
lyr_Dentistes_8.set('fieldAliases', {'Dentiste': 'Dentiste', });
lyr_Generalistescopier_1.set('fieldImages', {'Générali': '', });
lyr_Generalistes_2.set('fieldImages', {'Générali': '', });
lyr_Infirmierscopier_3.set('fieldImages', {'Infirmier': '', });
lyr_Infirmiers_4.set('fieldImages', {'Infirmier': '', });
lyr_Kinescopier_5.set('fieldImages', {'Kiné': '', });
lyr_Kines_6.set('fieldImages', {'Kiné': '', });
lyr_Dentistescopier_7.set('fieldImages', {'Dentiste': '', });
lyr_Dentistes_8.set('fieldImages', {'Dentiste': '', });
lyr_Generalistescopier_1.set('fieldLabels', {'Générali': 'no label', });
lyr_Generalistes_2.set('fieldLabels', {'Générali': 'no label', });
lyr_Infirmierscopier_3.set('fieldLabels', {'Infirmier': 'no label', });
lyr_Infirmiers_4.set('fieldLabels', {'Infirmier': 'inline label', });
lyr_Kinescopier_5.set('fieldLabels', {'Kiné': 'no label', });
lyr_Kines_6.set('fieldLabels', {'Kiné': 'inline label', });
lyr_Dentistescopier_7.set('fieldLabels', {'Dentiste': 'no label', });
lyr_Dentistes_8.set('fieldLabels', {'Dentiste': 'inline label', });
lyr_Dentistes_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});