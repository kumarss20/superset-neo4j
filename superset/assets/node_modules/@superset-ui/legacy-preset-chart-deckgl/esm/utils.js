/* eslint-disable no-magic-numbers */ /* eslint-disable no-negated-condition */ /**
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
 */import{extent}from"d3-array";import{scaleThreshold}from"d3-scale";import{getSequentialSchemeRegistry,SequentialScheme}from"@superset-ui/color";import{hexToRGB}from"./utils/colors";var DEFAULT_NUM_BUCKETS=10;export function getBreakPoints(a,b,c){var d=a.break_points,e=a.num_buckets;if(!b)return[];if(void 0===d||0===d.length){// compute evenly distributed break points based on number of buckets
var f=e?parseInt(e,10):DEFAULT_NUM_BUCKETS,g=extent(b,c),h=g[0],i=g[1];if(void 0===h)return[];var j=(i-h)/f,k=0===j?0:Math.max(0,Math.ceil(Math.log10(1/j))),l=i>i.toFixed(k)?1:0;return Array(f+1+l).fill().map(function(a,b){return(h+b*j).toFixed(k)})}return d.sort(function(c,a){return parseFloat(c)-parseFloat(a)})}export function getBreakPointColorScaler(a,b,e){var f,g,h=a.break_points,i=a.num_buckets,j=a.linear_color_scheme,k=a.opacity,l=h||i?getBreakPoints({break_points:h,num_buckets:i},b,e):null,m=Array.isArray(j)?new SequentialScheme({colors:j,id:"custom"}):getSequentialSchemeRegistry().get(j);if(null!==l){// bucket colors into discrete colors
var o=l.length-1,c=1<o?m.getColors(o):[m.colors[m.colors.length-1]],d=c[0],n=c[c.length-1];c.unshift(d),c.push(n);var p=l.map(function(a){return parseFloat(a)});f=scaleThreshold().domain(p).range(c),g=function(a){return a>l[o]||a<l[0]}}else// interpolate colors linearly
f=m.createLinearScale(extent(b,e)),g=function(){return!1};return function(a){var b=e(a),d=hexToRGB(f(b));return d[3]=g(b)?0:255*(k/100),d}}export function getBuckets(a,b,c){var d=getBreakPoints(a,b,c),e=getBreakPointColorScaler(a,b,c),f={};return d.slice(1).forEach(function(b,c){var g,h=d[c]+" - "+d[c+1],i=.5*(parseFloat(d[c])+parseFloat(d[c+1])),j=a.metric?a.metric.label||a.metric:null;f[h]={color:e((g={},g[j||a.metric]=i,g)),enabled:!0}}),f}