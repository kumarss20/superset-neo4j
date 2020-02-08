function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/* eslint-disable no-magic-numbers */ /* eslint-disable sort-keys */ /**
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
 */import{ScatterplotLayer}from"deck.gl";import React from"react";import{t}from"@superset-ui/translation";import{commonLayerProps}from"../common";import{createCategoricalDeckGLComponent}from"../../factory";import TooltipRow from"../../TooltipRow";import{unitToRadius}from"../../utils/geo";function getPoints(a){return a.map(function(a){return a.position})}function setTooltipContent(a){return function(b){return React.createElement("div",{className:"deckgl-tooltip"},React.createElement(TooltipRow,{label:t("Longitude and Latitude")+": ",value:b.object.position[0]+", "+b.object.position[1]}),b.object.cat_color&&React.createElement(TooltipRow,{label:t("Category")+": ",value:""+b.object.cat_color}),b.object.metric&&React.createElement(TooltipRow,{label:a.point_radius_fixed.value.label+": ",value:""+b.object.metric}))}}export function getLayer(a,b,c,d){var e=a,f=b.data.features.map(function(a){var b=unitToRadius(e.point_unit,a.radius)||10;if(e.multiplier&&(b*=e.multiplier),a.color)return _extends({},a,{radius:b});var d=e.color_picker||{r:0,g:0,b:0,a:1},c=[d.r,d.g,d.b,255*d.a];return _extends({},a,{radius:b,color:c})});return new ScatterplotLayer(_extends({id:"scatter-layer-"+e.slice_id,data:f,fp64:!0,radiusMinPixels:e.min_radius||null,radiusMaxPixels:e.max_radius||null,outline:!1},commonLayerProps(e,d,setTooltipContent(e))))}export default createCategoricalDeckGLComponent(getLayer,getPoints);