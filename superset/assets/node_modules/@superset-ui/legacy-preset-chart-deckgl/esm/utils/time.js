/* eslint-disable sort-keys */ /* eslint-disable babel/no-invalid-this */ /* eslint-disable no-eq-null */ /* eslint-disable no-negated-condition */ /* eslint-disable func-names */ /**
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
 */import moment from"moment";// array with the minimum values of each part of a timestamp -- note that
// months are zero-indexed in Javascript
var truncatePartTo=[1,// year
0,// month
1,// day
0,// hour
0,// minute
0,// second
0// millisecond
];export function truncate(a,b){/*
   * Truncate timestamp down to duration resolution.
   */var c=moment(a).subtract(b),d=a.toArray(),e=c.toArray(),f=d.map(function(a,b){return e[b]!==a}).indexOf(!0),g=d.map(function(a,b){if(b===f){// truncate down to closest `truncatePartTo[i] + n * step`
var c=a-e[b];return a-(a-truncatePartTo[b])%c}return b<f||-1===f?a:truncatePartTo[b]});return moment(g)}function getStepSeconds(a,b){/* Return number of seconds in a step.
   *
   * The step might be ambigous, eg, "1 month" has a variable number of
   * seconds, which is why we need to know the start time.
   */var c=parseInt(moment(b).format("x"),10),d=parseInt(moment(b).add(a).format("x"),10);return d-c}export function getPlaySliderParams(a,b){var c,d,e=moment(Math.min.apply(Math,a)),f=moment(Math.max.apply(Math,a));if(-1!==b.indexOf("/")){// Here, time grain is a time interval instead of a simple duration, either
// `reference/duration` or `duration/reference`. We need to parse the
// duration and make sure that start and end are in the right places. For
// example, if `reference` is a Saturday and `duration` is 1 week (P1W)
// then both start and end should be Saturdays.
var m=b.split("/",2);m[0].endsWith("Z")?(d=moment(m[0]),c=moment.duration(m[1])):(d=moment(m[1]),c=moment.duration(m[0]))}else c=moment.duration(b),d=truncate(e,c);// find the largest `reference + n * step` smaller than the minimum timestamp
var g,h=e.valueOf();for(g=d.clone();g.valueOf()<h;)g.add(c);for(;g.valueOf()>h;)g.subtract(c);// find the smallest `reference + n * step` larger than the maximum timestamp
var i,j=f.valueOf();for(i=d.clone();i.valueOf()>j;)i.subtract(c);for(;i.valueOf()<j;)i.add(c);var k=null==b?[g,i]:[g,g.clone().add(c)],l=a.every(function(a){return null===a});return{start:parseInt(g.format("x"),10),end:parseInt(i.format("x"),10),getStep:getStepSeconds.bind(this,c),values:k.map(function(a){return parseInt(a.format("x"),10)}),disabled:l}}