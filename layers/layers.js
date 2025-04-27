var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> 8645.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> 16407.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> 16624.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> 17059.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> 19970.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> 24045.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> 27862.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> 35020.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> 38543.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> 44166.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> 51697.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> 53750.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> 54497.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> 60079.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> 64549.000<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> <br />' });
var format_patahan_2 = new ol.format.GeoJSON();
var features_patahan_2 = format_patahan_2.readFeatures(json_patahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_patahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_patahan_2.addFeatures(features_patahan_2);
var lyr_patahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_patahan_2, 
                style: style_patahan_2,
                popuplayertitle: 'patahan',
                interactive: true,
                title: '<img src="styles/legend/patahan_2.png" /> patahan'
            });
var format_jarak_buffer_15km_3 = new ol.format.GeoJSON();
var features_jarak_buffer_15km_3 = format_jarak_buffer_15km_3.readFeatures(json_jarak_buffer_15km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jarak_buffer_15km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarak_buffer_15km_3.addFeatures(features_jarak_buffer_15km_3);
var lyr_jarak_buffer_15km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarak_buffer_15km_3, 
                style: style_jarak_buffer_15km_3,
                popuplayertitle: 'jarak_buffer_15km',
                interactive: true,
                title: '<img src="styles/legend/jarak_buffer_15km_3.png" /> jarak_buffer_15km'
            });
var format_potongan_15km_4 = new ol.format.GeoJSON();
var features_potongan_15km_4 = format_potongan_15km_4.readFeatures(json_potongan_15km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potongan_15km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potongan_15km_4.addFeatures(features_potongan_15km_4);
var lyr_potongan_15km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_potongan_15km_4, 
                style: style_potongan_15km_4,
                popuplayertitle: 'potongan_15km',
                interactive: true,
                title: '<img src="styles/legend/potongan_15km_4.png" /> potongan_15km'
            });
var format_jarak_buffer_5km_5 = new ol.format.GeoJSON();
var features_jarak_buffer_5km_5 = format_jarak_buffer_5km_5.readFeatures(json_jarak_buffer_5km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jarak_buffer_5km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarak_buffer_5km_5.addFeatures(features_jarak_buffer_5km_5);
var lyr_jarak_buffer_5km_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarak_buffer_5km_5, 
                style: style_jarak_buffer_5km_5,
                popuplayertitle: 'jarak_buffer_5km',
                interactive: true,
                title: '<img src="styles/legend/jarak_buffer_5km_5.png" /> jarak_buffer_5km'
            });
var format_potongan_5km_6 = new ol.format.GeoJSON();
var features_potongan_5km_6 = format_potongan_5km_6.readFeatures(json_potongan_5km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potongan_5km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potongan_5km_6.addFeatures(features_potongan_5km_6);
var lyr_potongan_5km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_potongan_5km_6, 
                style: style_potongan_5km_6,
                popuplayertitle: 'potongan_5km',
                interactive: true,
                title: '<img src="styles/legend/potongan_5km_6.png" /> potongan_5km'
            });
var format_SARANAIBADAH_PT_50K_7 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_50K_7 = format_SARANAIBADAH_PT_50K_7.readFeatures(json_SARANAIBADAH_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_50K_7.addFeatures(features_SARANAIBADAH_PT_50K_7);
var lyr_SARANAIBADAH_PT_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_50K_7, 
                style: style_SARANAIBADAH_PT_50K_7,
                popuplayertitle: 'SARANAIBADAH_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_50K_7.png" /> SARANAIBADAH_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_8 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_8 = format_PENDIDIKAN_PT_50K_8.readFeatures(json_PENDIDIKAN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_8.addFeatures(features_PENDIDIKAN_PT_50K_8);
var lyr_PENDIDIKAN_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_8, 
                style: style_PENDIDIKAN_PT_50K_8,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_8.png" /> PENDIDIKAN_PT_50K'
            });
var format_LAYANANKESEHATAN_PT_50K_9 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_9 = format_LAYANANKESEHATAN_PT_50K_9.readFeatures(json_LAYANANKESEHATAN_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_9.addFeatures(features_LAYANANKESEHATAN_PT_50K_9);
var lyr_LAYANANKESEHATAN_PT_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_9, 
                style: style_LAYANANKESEHATAN_PT_50K_9,
                popuplayertitle: 'LAYANANKESEHATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_9.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_PEMERINTAHAN_PT_50K_10 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_10 = format_PEMERINTAHAN_PT_50K_10.readFeatures(json_PEMERINTAHAN_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_10.addFeatures(features_PEMERINTAHAN_PT_50K_10);
var lyr_PEMERINTAHAN_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_10, 
                style: style_PEMERINTAHAN_PT_50K_10,
                popuplayertitle: 'PEMERINTAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_10.png" /> PEMERINTAHAN_PT_50K'
            });
var format_gempa_11 = new ol.format.GeoJSON();
var features_gempa_11 = format_gempa_11.readFeatures(json_gempa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gempa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gempa_11.addFeatures(features_gempa_11);
var lyr_gempa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gempa_11, 
                style: style_gempa_11,
                popuplayertitle: 'gempa',
                interactive: true,
                title: '<img src="styles/legend/gempa_11.png" /> gempa'
            });
var format_pendidikan_terdampak_15km_12 = new ol.format.GeoJSON();
var features_pendidikan_terdampak_15km_12 = format_pendidikan_terdampak_15km_12.readFeatures(json_pendidikan_terdampak_15km_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_terdampak_15km_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_terdampak_15km_12.addFeatures(features_pendidikan_terdampak_15km_12);
var lyr_pendidikan_terdampak_15km_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_terdampak_15km_12, 
                style: style_pendidikan_terdampak_15km_12,
                popuplayertitle: 'pendidikan_terdampak_15km',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_terdampak_15km_12.png" /> pendidikan_terdampak_15km'
            });
var format_pemerintahan_terdampak_15km_13 = new ol.format.GeoJSON();
var features_pemerintahan_terdampak_15km_13 = format_pemerintahan_terdampak_15km_13.readFeatures(json_pemerintahan_terdampak_15km_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_terdampak_15km_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_terdampak_15km_13.addFeatures(features_pemerintahan_terdampak_15km_13);
var lyr_pemerintahan_terdampak_15km_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemerintahan_terdampak_15km_13, 
                style: style_pemerintahan_terdampak_15km_13,
                popuplayertitle: 'pemerintahan_terdampak_15km',
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_terdampak_15km_13.png" /> pemerintahan_terdampak_15km'
            });
var format_layanan_kes_terdampak_15km_14 = new ol.format.GeoJSON();
var features_layanan_kes_terdampak_15km_14 = format_layanan_kes_terdampak_15km_14.readFeatures(json_layanan_kes_terdampak_15km_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layanan_kes_terdampak_15km_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layanan_kes_terdampak_15km_14.addFeatures(features_layanan_kes_terdampak_15km_14);
var lyr_layanan_kes_terdampak_15km_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layanan_kes_terdampak_15km_14, 
                style: style_layanan_kes_terdampak_15km_14,
                popuplayertitle: 'layanan_kes_terdampak_15km',
                interactive: true,
                title: '<img src="styles/legend/layanan_kes_terdampak_15km_14.png" /> layanan_kes_terdampak_15km'
            });
var format_sarana_ibadah_terdampak_15km_15 = new ol.format.GeoJSON();
var features_sarana_ibadah_terdampak_15km_15 = format_sarana_ibadah_terdampak_15km_15.readFeatures(json_sarana_ibadah_terdampak_15km_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sarana_ibadah_terdampak_15km_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sarana_ibadah_terdampak_15km_15.addFeatures(features_sarana_ibadah_terdampak_15km_15);
var lyr_sarana_ibadah_terdampak_15km_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sarana_ibadah_terdampak_15km_15, 
                style: style_sarana_ibadah_terdampak_15km_15,
                popuplayertitle: 'sarana_ibadah_terdampak_15km',
                interactive: true,
                title: '<img src="styles/legend/sarana_ibadah_terdampak_15km_15.png" /> sarana_ibadah_terdampak_15km'
            });
var format_sarana_ibadah_5km_16 = new ol.format.GeoJSON();
var features_sarana_ibadah_5km_16 = format_sarana_ibadah_5km_16.readFeatures(json_sarana_ibadah_5km_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sarana_ibadah_5km_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sarana_ibadah_5km_16.addFeatures(features_sarana_ibadah_5km_16);
var lyr_sarana_ibadah_5km_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sarana_ibadah_5km_16, 
                style: style_sarana_ibadah_5km_16,
                popuplayertitle: 'sarana_ibadah_5km',
                interactive: true,
                title: '<img src="styles/legend/sarana_ibadah_5km_16.png" /> sarana_ibadah_5km'
            });
var format_pendidikan_5km_17 = new ol.format.GeoJSON();
var features_pendidikan_5km_17 = format_pendidikan_5km_17.readFeatures(json_pendidikan_5km_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_5km_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_5km_17.addFeatures(features_pendidikan_5km_17);
var lyr_pendidikan_5km_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_5km_17, 
                style: style_pendidikan_5km_17,
                popuplayertitle: 'pendidikan_5km',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_5km_17.png" /> pendidikan_5km'
            });
var format_pemerintahan_5km_18 = new ol.format.GeoJSON();
var features_pemerintahan_5km_18 = format_pemerintahan_5km_18.readFeatures(json_pemerintahan_5km_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_5km_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_5km_18.addFeatures(features_pemerintahan_5km_18);
var lyr_pemerintahan_5km_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemerintahan_5km_18, 
                style: style_pemerintahan_5km_18,
                popuplayertitle: 'pemerintahan_5km',
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_5km_18.png" /> pemerintahan_5km'
            });
var format_layanan_kesehatan_5km_19 = new ol.format.GeoJSON();
var features_layanan_kesehatan_5km_19 = format_layanan_kesehatan_5km_19.readFeatures(json_layanan_kesehatan_5km_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layanan_kesehatan_5km_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layanan_kesehatan_5km_19.addFeatures(features_layanan_kesehatan_5km_19);
var lyr_layanan_kesehatan_5km_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layanan_kesehatan_5km_19, 
                style: style_layanan_kesehatan_5km_19,
                popuplayertitle: 'layanan_kesehatan_5km',
                interactive: true,
                title: '<img src="styles/legend/layanan_kesehatan_5km_19.png" /> layanan_kesehatan_5km'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_patahan_2.setVisible(true);lyr_jarak_buffer_15km_3.setVisible(true);lyr_potongan_15km_4.setVisible(true);lyr_jarak_buffer_5km_5.setVisible(true);lyr_potongan_5km_6.setVisible(true);lyr_SARANAIBADAH_PT_50K_7.setVisible(true);lyr_PENDIDIKAN_PT_50K_8.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_9.setVisible(true);lyr_PEMERINTAHAN_PT_50K_10.setVisible(true);lyr_gempa_11.setVisible(true);lyr_pendidikan_terdampak_15km_12.setVisible(true);lyr_pemerintahan_terdampak_15km_13.setVisible(true);lyr_layanan_kes_terdampak_15km_14.setVisible(true);lyr_sarana_ibadah_terdampak_15km_15.setVisible(true);lyr_sarana_ibadah_5km_16.setVisible(true);lyr_pendidikan_5km_17.setVisible(true);lyr_pemerintahan_5km_18.setVisible(true);lyr_layanan_kesehatan_5km_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_patahan_2,lyr_jarak_buffer_15km_3,lyr_potongan_15km_4,lyr_jarak_buffer_5km_5,lyr_potongan_5km_6,lyr_SARANAIBADAH_PT_50K_7,lyr_PENDIDIKAN_PT_50K_8,lyr_LAYANANKESEHATAN_PT_50K_9,lyr_PEMERINTAHAN_PT_50K_10,lyr_gempa_11,lyr_pendidikan_terdampak_15km_12,lyr_pemerintahan_terdampak_15km_13,lyr_layanan_kes_terdampak_15km_14,lyr_sarana_ibadah_terdampak_15km_15,lyr_sarana_ibadah_5km_16,lyr_pendidikan_5km_17,lyr_pemerintahan_5km_18,lyr_layanan_kesehatan_5km_19];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'penduduk': 'penduduk', 'luas(km^2)': 'luas(km^2)', });
lyr_patahan_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', });
lyr_jarak_buffer_15km_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', });
lyr_potongan_15km_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', 'penduduk': 'penduduk', 'luas': 'luas', 'luas_trmpk': 'luas_trmpk', 'pddk_trmpk': 'pddk_trmpk', });
lyr_jarak_buffer_5km_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', 'jarak_m': 'jarak_m', });
lyr_potongan_5km_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', 'jarak_m': 'jarak_m', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', 'penduduk': 'penduduk', 'luas': 'luas', 'luad_trmpk': 'luad_trmpk', 'pddk_trmpk': 'pddk_trmpk', });
lyr_SARANAIBADAH_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_LAYANANKESEHATAN_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_PEMERINTAHAN_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_gempa_11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'hari': 'hari', 'bulan': 'bulan', 'tahun': 'tahun', 'date': 'date', 'time__wib_': 'time__wib_', 'y': 'y', 'x': 'x', 'depth_km': 'depth_km', 'mag': 'mag', 'unit_m': 'unit_m', 'region': 'region', 'dirasakan': 'dirasakan', 'kelas_m': 'kelas_m', });
lyr_pendidikan_terdampak_15km_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_pemerintahan_terdampak_15km_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_layanan_kes_terdampak_15km_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_sarana_ibadah_terdampak_15km_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_sarana_ibadah_5km_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_pendidikan_5km_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_pemerintahan_5km_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_layanan_kesehatan_5km_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'penduduk': 'TextEdit', 'luas(km^2)': 'TextEdit', });
lyr_patahan_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'Id': 'TextEdit', 'LCLASSSTR': 'TextEdit', 'Type': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sliprate_1': 'TextEdit', 'Fault_Name': 'TextEdit', 'Segment_Na': 'TextEdit', 'LENGHT': 'TextEdit', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Fault': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'CLASSSTR': 'TextEdit', 'Seg_Name': 'TextEdit', 'lenght_km_': 'TextEdit', 'lenght_km': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'GM_LAYER_1': 'TextEdit', 'GM_TYPE_1': 'TextEdit', 'LCLASSSTR_': 'TextEdit', 'Fault_Na_1': 'TextEdit', 'Segment__1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'name_group': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_jarak_buffer_15km_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID': '', 'GM_LAYER': '', 'GM_TYPE': '', 'LAYER': '', 'Id': '', 'LCLASSSTR': '', 'Type': '', 'Mmax_d': '', 'Sliprate_1': '', 'Fault_Name': '', 'Segment_Na': '', 'LENGHT': '', 'Name': '', 'Segment': '', 'Fault': '', 'LENGTH_KM': '', 'CLASSSTR': '', 'Seg_Name': '', 'lenght_km_': '', 'lenght_km': '', 'OBJECTID_3': '', 'OBJECTID_4': '', 'GM_LAYER_1': '', 'GM_TYPE_1': '', 'LCLASSSTR_': '', 'Fault_Na_1': '', 'Segment__1': '', 'Shape_Leng': '', 'name_group': '', 'Shape_Le_1': '', });
lyr_potongan_15km_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'Id': 'TextEdit', 'LCLASSSTR': 'TextEdit', 'Type': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sliprate_1': 'TextEdit', 'Fault_Name': 'TextEdit', 'Segment_Na': 'TextEdit', 'LENGHT': 'TextEdit', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Fault': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'CLASSSTR': 'TextEdit', 'Seg_Name': 'TextEdit', 'lenght_km_': 'TextEdit', 'lenght_km': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'GM_LAYER_1': 'TextEdit', 'GM_TYPE_1': 'TextEdit', 'LCLASSSTR_': 'TextEdit', 'Fault_Na_1': 'TextEdit', 'Segment__1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'name_group': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'penduduk': 'TextEdit', 'luas': 'TextEdit', 'luas_trmpk': 'TextEdit', 'pddk_trmpk': 'TextEdit', });
lyr_jarak_buffer_5km_5.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID': '', 'GM_LAYER': '', 'GM_TYPE': '', 'LAYER': '', 'Id': '', 'LCLASSSTR': '', 'Type': '', 'Mmax_d': '', 'Sliprate_1': '', 'Fault_Name': '', 'Segment_Na': '', 'LENGHT': '', 'Name': '', 'Segment': '', 'Fault': '', 'LENGTH_KM': '', 'CLASSSTR': '', 'Seg_Name': '', 'lenght_km_': '', 'lenght_km': '', 'OBJECTID_3': '', 'OBJECTID_4': '', 'GM_LAYER_1': '', 'GM_TYPE_1': '', 'LCLASSSTR_': '', 'Fault_Na_1': '', 'Segment__1': '', 'Shape_Leng': '', 'name_group': '', 'Shape_Le_1': '', 'jarak_m': '', });
lyr_potongan_5km_6.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID': '', 'GM_LAYER': '', 'GM_TYPE': '', 'LAYER': '', 'Id': '', 'LCLASSSTR': '', 'Type': '', 'Mmax_d': '', 'Sliprate_1': '', 'Fault_Name': '', 'Segment_Na': '', 'LENGHT': '', 'Name': '', 'Segment': '', 'Fault': '', 'LENGTH_KM': '', 'CLASSSTR': '', 'Seg_Name': '', 'lenght_km_': '', 'lenght_km': '', 'OBJECTID_3': '', 'OBJECTID_4': '', 'GM_LAYER_1': '', 'GM_TYPE_1': '', 'LCLASSSTR_': '', 'Fault_Na_1': '', 'Segment__1': '', 'Shape_Leng': '', 'name_group': '', 'Shape_Le_1': '', 'jarak_m': '', 'NAMOBJ': '', 'REMARK': '', 'LCODE': '', 'WADMKK': '', 'WADMPR': '', 'SHAPE_Le_2': '', 'SHAPE_Area': '', 'penduduk': '', 'luas': '', 'luad_trmpk': '', 'pddk_trmpk': '', });
lyr_SARANAIBADAH_PT_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_LAYANANKESEHATAN_PT_50K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_PEMERINTAHAN_PT_50K_10.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_gempa_11.set('fieldImages', {'ogc_fid': 'Range', 'no': 'TextEdit', 'hari': 'TextEdit', 'bulan': 'TextEdit', 'tahun': 'TextEdit', 'date': 'DateTime', 'time__wib_': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'depth_km': 'TextEdit', 'mag': 'TextEdit', 'unit_m': 'TextEdit', 'region': 'TextEdit', 'dirasakan': 'TextEdit', 'kelas_m': 'TextEdit', });
lyr_pendidikan_terdampak_15km_12.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_pemerintahan_terdampak_15km_13.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_layanan_kes_terdampak_15km_14.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_sarana_ibadah_terdampak_15km_15.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_sarana_ibadah_5km_16.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_pendidikan_5km_17.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_pemerintahan_5km_18.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_layanan_kesehatan_5km_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'penduduk': 'no label', 'luas(km^2)': 'no label', });
lyr_patahan_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', });
lyr_jarak_buffer_15km_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', });
lyr_potongan_15km_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Le_2': 'no label', 'SHAPE_Area': 'no label', 'penduduk': 'no label', 'luas': 'no label', 'luas_trmpk': 'no label', 'pddk_trmpk': 'no label', });
lyr_jarak_buffer_5km_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', 'jarak_m': 'no label', });
lyr_potongan_5km_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', 'jarak_m': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Le_2': 'no label', 'SHAPE_Area': 'no label', 'penduduk': 'no label', 'luas': 'no label', 'luad_trmpk': 'no label', 'pddk_trmpk': 'no label', });
lyr_SARANAIBADAH_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_PEMERINTAHAN_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_gempa_11.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'hari': 'no label', 'bulan': 'no label', 'tahun': 'no label', 'date': 'no label', 'time__wib_': 'no label', 'y': 'no label', 'x': 'no label', 'depth_km': 'no label', 'mag': 'no label', 'unit_m': 'no label', 'region': 'no label', 'dirasakan': 'no label', 'kelas_m': 'no label', });
lyr_pendidikan_terdampak_15km_12.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_pemerintahan_terdampak_15km_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_layanan_kes_terdampak_15km_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_sarana_ibadah_terdampak_15km_15.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_sarana_ibadah_5km_16.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_pendidikan_5km_17.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_pemerintahan_5km_18.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_layanan_kesehatan_5km_19.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'FCODE': 'header label - visible with data', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_layanan_kesehatan_5km_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});