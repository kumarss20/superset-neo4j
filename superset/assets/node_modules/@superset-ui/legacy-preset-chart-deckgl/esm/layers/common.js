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
 */import{fitBounds}from"viewport-mercator-project";import*as d3array from"d3-array";import sandboxedEval from"../utils/sandbox";var PADDING=.25,GEO_BOUNDS={LAT_MAX:90,LAT_MIN:-90,LNG_MAX:180,LNG_MIN:-180};/**
 * Get the latitude bounds if latitude is a single coordinate
 * @param latExt Latitude range
 */function getLatBoundsForSingleCoordinate(a){var b=a[0]-PADDING<GEO_BOUNDS.LAT_MIN?GEO_BOUNDS.LAT_MIN:a[0]-PADDING,c=a[1]+PADDING>GEO_BOUNDS.LAT_MAX?GEO_BOUNDS.LAT_MAX:a[1]+PADDING;return[b,c]}/**
 * Get the longitude bounds if longitude is a single coordinate
 * @param lngExt Longitude range
 */function getLngBoundsForSingleCoordinate(a){var b=a[0]-PADDING<GEO_BOUNDS.LNG_MIN?GEO_BOUNDS.LNG_MIN:a[0]-PADDING,c=a[1]+PADDING>GEO_BOUNDS.LNG_MAX?GEO_BOUNDS.LNG_MAX:a[1]+PADDING;return[b,c]}export function getBounds(a){var b=d3array.extent(a,function(a){return a[1]}),c=d3array.extent(a,function(a){return a[0]}),d=b[0]===b[1]?getLatBoundsForSingleCoordinate(b):b,e=c[0]===c[1]?getLngBoundsForSingleCoordinate(c):c;return[[e[0],d[0]],[e[1],d[1]]]}export function fitViewport(a,b,c){void 0===c&&(c=10);try{var d=getBounds(b);return _extends({},a,{},fitBounds({bounds:d,height:a.height,padding:c,width:a.width}))}catch(b){return console.error("Could not auto zoom",b),a}}export function commonLayerProps(a,b,c,d){var e,f=a,g=c;f.js_tooltip&&(g=sandboxedEval(f.js_tooltip)),g&&(e=function(a){a.picked?b({content:g(a),x:a.x,y:a.y+30}):b(null)});var h;return f.js_onclick_href?h=function(a){var b=sandboxedEval(f.js_onclick_href)(a);window.open(b)}:f.table_filter&&void 0!==d&&(h=function(a){return d(a.object[f.line_column])}),{onClick:h,onHover:e,pickable:!!e}}var percentiles={p1:.01,p5:.05,p95:.95,p99:.99};/* Get an a stat function that operates on arrays, aligns with control=js_agg_function  */export function getAggFunc(a,b){if(void 0===a&&(a="sum"),void 0===b&&(b=null),"count"===a)return function(a){return a.length};var c;return c=a in percentiles?function(c,d){var e;return e=b?c.sort(function(a,c){return d3array.ascending(b(a),b(c))}):c.sort(d3array.ascending),d3array.quantile(e,percentiles[a],d)}:d3array[a],b?function(a){return c(a.map(b))}:function(a){return c(a)}}