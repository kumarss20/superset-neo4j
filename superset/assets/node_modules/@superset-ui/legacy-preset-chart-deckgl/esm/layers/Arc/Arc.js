function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/* eslint-disable no-magic-numbers */ /**
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
 */import{ArcLayer}from"deck.gl";import React from"react";import{t}from"@superset-ui/translation";import{commonLayerProps}from"../common";import{createCategoricalDeckGLComponent}from"../../factory";import TooltipRow from"../../TooltipRow";function getPoints(a){var b=[];return a.forEach(function(a){b.push(a.sourcePosition),b.push(a.targetPosition)}),b}function setTooltipContent(a){return function(b){return React.createElement("div",{className:"deckgl-tooltip"},React.createElement(TooltipRow,{label:t("Start (Longitude, Latitude)")+": ",value:b.object.sourcePosition[0]+", "+b.object.sourcePosition[1]}),React.createElement(TooltipRow,{label:t("End (Longitude, Latitude)")+": ",value:b.object.targetPosition[0]+", "+b.object.targetPosition[1]}),a.dimension&&React.createElement(TooltipRow,{label:a.dimension+": ",value:""+b.object.cat_color}))}}export function getLayer(a,b,c,d){var e=b.data.features,f=a.color_picker,g=a.target_color_picker;return new ArcLayer(_extends({data:e,getSourceColor:function getSourceColor(a){return a.sourceColor||a.color||[f.r,f.g,f.b,255*f.a]},getTargetColor:function getTargetColor(a){return a.targetColor||a.color||[g.r,g.g,g.b,255*g.a]},id:"path-layer-"+a.slice_id,strokeWidth:a.stroke_width?a.stroke_width:3},commonLayerProps(a,d,setTooltipContent(a))))}export default createCategoricalDeckGLComponent(getLayer,getPoints);