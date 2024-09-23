var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lgendedesoccupationsdusol_1 = new ol.format.GeoJSON();
var features_Lgendedesoccupationsdusol_1 = format_Lgendedesoccupationsdusol_1.readFeatures(json_Lgendedesoccupationsdusol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgendedesoccupationsdusol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgendedesoccupationsdusol_1.addFeatures(features_Lgendedesoccupationsdusol_1);
var lyr_Lgendedesoccupationsdusol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgendedesoccupationsdusol_1, 
                style: style_Lgendedesoccupationsdusol_1,
                popuplayertitle: "Légende des occupations du sol",
                interactive: true,
    title: 'Légende des occupations du sol<br />\
    <img src="styles/legend/Lgendedesoccupationsdusol_1_0.png" /> eau<br />\
    <img src="styles/legend/Lgendedesoccupationsdusol_1_1.png" /> empreinte urbaine<br />\
    <img src="styles/legend/Lgendedesoccupationsdusol_1_2.png" /> sol nu<br />\
    <img src="styles/legend/Lgendedesoccupationsdusol_1_3.png" /> végétation<br />'
        });
var lyr_Projectiondeloccupationdesolen2050sanscontraintes_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Projection de l'occupation de sol en 2050 sans contraintes",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Projectiondeloccupationdesolen2050sanscontraintes_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953723.317563, 1641026.100998, -1905700.109427, 1676961.700237]
                            })
                        });
var lyr_Projectiondeloccupationdesolen2050aveccontraintes_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Projection de l'occupation de sol en 2050 avec contraintes",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Projectiondeloccupationdesolen2050aveccontraintes_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953723.317563, 1641026.100998, -1905700.109427, 1676961.700237]
                            })
                        });
var format_Localits_4 = new ol.format.GeoJSON();
var features_Localits_4 = format_Localits_4.readFeatures(json_Localits_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_4.addFeatures(features_Localits_4);
var lyr_Localits_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_4, 
                style: style_Localits_4,
                popuplayertitle: "Localités",
                interactive: true,
                title: '<img src="styles/legend/Localits_4.png" /> Localités'
            });
var format_Limitesdesdpartements_5 = new ol.format.GeoJSON();
var features_Limitesdesdpartements_5 = format_Limitesdesdpartements_5.readFeatures(json_Limitesdesdpartements_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdesdpartements_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdesdpartements_5.addFeatures(features_Limitesdesdpartements_5);
var lyr_Limitesdesdpartements_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdesdpartements_5, 
                style: style_Limitesdesdpartements_5,
                popuplayertitle: "Limites des départements",
                interactive: true,
                title: '<img src="styles/legend/Limitesdesdpartements_5.png" /> Limites des départements'
            });
var format_DlimitationduSngal_6 = new ol.format.GeoJSON();
var features_DlimitationduSngal_6 = format_DlimitationduSngal_6.readFeatures(json_DlimitationduSngal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DlimitationduSngal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DlimitationduSngal_6.addFeatures(features_DlimitationduSngal_6);
var lyr_DlimitationduSngal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DlimitationduSngal_6, 
                style: style_DlimitationduSngal_6,
                popuplayertitle: "Délimitation du Sénégal",
                interactive: true,
                title: '<img src="styles/legend/DlimitationduSngal_6.png" /> Délimitation du Sénégal'
            });

lyr_Positronretina_0.setVisible(true);lyr_Lgendedesoccupationsdusol_1.setVisible(true);lyr_Projectiondeloccupationdesolen2050sanscontraintes_2.setVisible(true);lyr_Projectiondeloccupationdesolen2050aveccontraintes_3.setVisible(true);lyr_Localits_4.setVisible(true);lyr_Limitesdesdpartements_5.setVisible(true);lyr_DlimitationduSngal_6.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Lgendedesoccupationsdusol_1,lyr_Projectiondeloccupationdesolen2050sanscontraintes_2,lyr_Projectiondeloccupationdesolen2050aveccontraintes_3,lyr_Localits_4,lyr_Limitesdesdpartements_5,lyr_DlimitationduSngal_6];
lyr_Lgendedesoccupationsdusol_1.set('fieldAliases', {'DN': 'DN', });
lyr_Localits_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'Nom': 'Nom', });
lyr_Limitesdesdpartements_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'Nom', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'area': 'area', });
lyr_DlimitationduSngal_6.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_Lgendedesoccupationsdusol_1.set('fieldImages', {'DN': 'Hidden', });
lyr_Localits_4.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'population': 'Hidden', 'Nom': 'TextEdit', });
lyr_Limitesdesdpartements_5.set('fieldImages', {'GID_2': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', 'area': 'Hidden', });
lyr_DlimitationduSngal_6.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_Lgendedesoccupationsdusol_1.set('fieldLabels', {});
lyr_Localits_4.set('fieldLabels', {'Nom': 'inline label - always visible', });
lyr_Limitesdesdpartements_5.set('fieldLabels', {'NAME_2': 'inline label - always visible', });
lyr_DlimitationduSngal_6.set('fieldLabels', {});
lyr_DlimitationduSngal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});