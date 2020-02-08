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
 */import{GridLayer}from"deck.gl";import React from"react";import{t}from"@superset-ui/translation";import{commonLayerProps,getAggFunc}from"../common";import sandboxedEval from"../../utils/sandbox";import{createDeckGLComponent}from"../../factory";import TooltipRow from"../../TooltipRow";function setTooltipContent(a){return React.createElement("div",{className:"deckgl-tooltip"},React.createElement(TooltipRow,{label:t("Longitude and Latitude")+": ",value:a.object.position[0]+", "+a.object.position[1]}),React.createElement(TooltipRow,{label:t("Height")+": ",value:""+a.object.elevationValue}))}export function getLayer(a,b,d,e){var f=a,g=f.color_picker,c=b.data.features.map(function(a){return _extends({},a,{color:[g.r,g.g,g.b,255*g.a]})});if(f.js_data_mutator){// Applying user defined data mutator if defined
var i=sandboxedEval(f.js_data_mutator);c=i(c)}var h=getAggFunc(f.js_agg_function,function(a){return a.weight});return new GridLayer(_extends({id:"grid-layer-"+f.slice_id,data:c,pickable:!0,cellSize:f.grid_size,minColor:[0,0,0,0],extruded:f.extruded,maxColor:[g.r,g.g,g.b,255*g.a],outline:!1,getElevationValue:h,getColorValue:h},commonLayerProps(f,e,setTooltipContent)))}function getPoints(a){return a.map(function(a){return a.position})}export default createDeckGLComponent(getLayer,getPoints);