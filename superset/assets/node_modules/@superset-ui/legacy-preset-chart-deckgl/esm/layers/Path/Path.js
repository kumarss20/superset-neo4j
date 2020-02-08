function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/* eslint-disable react/no-array-index-key */ /* eslint-disable no-magic-numbers */ /* eslint-disable sort-keys */ /**
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
 */import{PathLayer}from"deck.gl";import React from"react";import{commonLayerProps}from"../common";import sandboxedEval from"../../utils/sandbox";import{createDeckGLComponent}from"../../factory";import TooltipRow from"../../TooltipRow";function setTooltipContent(a){return a.object.extraProps&&React.createElement("div",{className:"deckgl-tooltip"},Object.keys(a.object.extraProps).map(function(b,c){return React.createElement(TooltipRow,{key:"prop-"+c,label:b+": ",value:""+a.object.extraProps[b]})}))}export function getLayer(a,b,d,e){var f=a,g=f.color_picker,c=[g.r,g.g,g.b,255*g.a],h=b.data.features.map(function(a){return _extends({},a,{path:a.path,width:f.line_width,color:c})});if(f.js_data_mutator){var i=sandboxedEval(f.js_data_mutator);h=i(h)}return new PathLayer(_extends({id:"path-layer-"+f.slice_id,data:h,rounded:!0,widthScale:1},commonLayerProps(f,e,setTooltipContent)))}function getPoints(a){var b=[];return a.forEach(function(a){b=b.concat(a.path)}),b}export default createDeckGLComponent(getLayer,getPoints);