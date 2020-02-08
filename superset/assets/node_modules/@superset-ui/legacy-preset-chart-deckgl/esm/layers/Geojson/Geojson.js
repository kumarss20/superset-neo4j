function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/* eslint-disable no-magic-numbers */ /* eslint-disable react/forbid-prop-types */ /* eslint-disable react/no-array-index-key */ /* eslint-disable sort-keys */ /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */import React from"react";import PropTypes from"prop-types";import{GeoJsonLayer}from"deck.gl";// TODO import geojsonExtent from 'geojson-extent';
import DeckGLContainer from"../../DeckGLContainer";import{hexToRGB}from"../../utils/colors";import sandboxedEval from"../../utils/sandbox";import{commonLayerProps}from"../common";import TooltipRow from"../../TooltipRow";var features,propertyMap={fillColor:"fillColor",color:"fillColor",fill:"fillColor","fill-color":"fillColor",strokeColor:"strokeColor","stroke-color":"strokeColor","stroke-width":"strokeWidth"},alterProps=function(a,b){var c={};return Object.keys(a).forEach(function(b){b in propertyMap?c[propertyMap[b]]=a[b]:c[b]=a[b]}),"string"==typeof a.fillColor&&(c.fillColor=hexToRGB(a.fillColor)),"string"==typeof a.strokeColor&&(c.strokeColor=hexToRGB(a.strokeColor)),_extends({},c,{},b)},recurseGeoJson=function(a,b,c){if(a&&a.features&&a.features.forEach(function(d){recurseGeoJson(d,b,a.extraProps||c)}),a&&a.geometry){var d=_extends({},a,{properties:alterProps(a.properties,b)});d.extraProps||(d.extraProps=c),features.push(d)}};function setTooltipContent(a){return a.object.extraProps&&React.createElement("div",{className:"deckgl-tooltip"},Object.keys(a.object.extraProps).map(function(b,c){return React.createElement(TooltipRow,{key:"prop-"+c,label:b+": ",value:""+a.object.extraProps[b]})}))}export function getLayer(a,b,c,d){var e=a,f=e.fill_color_picker,g=e.stroke_color_picker,h=[f.r,f.g,f.b,255*f.a],i=[g.r,g.g,g.b,255*g.a],j={};0<h[3]&&(j.fillColor=h),0<i[3]&&(j.strokeColor=i),features=[],recurseGeoJson(b.data,j);var k;return e.js_data_mutator&&(k=sandboxedEval(e.js_data_mutator),features=k(features)),new GeoJsonLayer(_extends({id:"geojson-layer-"+e.slice_id,filled:e.filled,data:features,stroked:e.stroked,extruded:e.extruded,pointRadiusScale:e.point_radius_scale},commonLayerProps(e,d,setTooltipContent)))}var propTypes={formData:PropTypes.object.isRequired,payload:PropTypes.object.isRequired,setControlValue:PropTypes.func.isRequired,viewport:PropTypes.object.isRequired,onAddFilter:PropTypes.func,setTooltip:PropTypes.func},defaultProps={onAddFilter:function onAddFilter(){},setTooltip:function setTooltip(){}};function deckGeoJson(a){var b=a.formData,c=a.payload,d=a.setControlValue,e=a.onAddFilter,f=a.setTooltip,g=a.viewport,h=getLayer(b,c,e,f);// TODO get this to work
// if (formData.autozoom) {
//   viewport = common.fitViewport(viewport, geojsonExtent(payload.data.features));
// }
return React.createElement(DeckGLContainer,{mapboxApiAccessToken:c.data.mapboxApiKey,viewport:g,layers:[h],mapStyle:b.mapbox_style,setControlValue:d})}deckGeoJson.propTypes=propTypes,deckGeoJson.defaultProps=defaultProps;export default deckGeoJson;