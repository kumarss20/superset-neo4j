/* eslint-disable no-restricted-properties */ /* eslint-disable no-magic-numbers */ /**
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
 */import{roundDecimal}from"./utils";export var defaultViewport={bearing:0,latitude:31.222656842808707,longitude:6.85236157047845,pitch:0,zoom:1};var METER_TO_MILE=1609.34;export function unitToRadius(a,b){if("square_m"===a)return Math.sqrt(b/Math.PI);return"radius_m"===a?b:"radius_km"===a?1e3*b:"radius_miles"===a?b*METER_TO_MILE:"square_km"===a?1e3*Math.sqrt(b/Math.PI):"square_miles"===a?Math.sqrt(b/Math.PI)*METER_TO_MILE:null}export var EARTH_CIRCUMFERENCE_KM=40075.16;export var MILES_PER_KM=1.60934;export function kmToPixels(a,b,c){// Algorithm from: https://wiki.openstreetmap.org/wiki/Zoom_levels
var d=b*(Math.PI/180),e=EARTH_CIRCUMFERENCE_KM*Math.cos(d)/Math.pow(2,c+9);// Seems like the zoomLevel is off by one
return roundDecimal(a/e,2)}