function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/**
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
 */var NOOP=function(){};export default function transformProps(a){var b=a.width,c=a.height,d=a.rawFormData,e=a.queryData,f=a.hooks,g=f.onAddFilter,h=void 0===g?NOOP:g,i=f.setControlValue,j=void 0===i?NOOP:i,k=f.setTooltip,l=void 0===k?NOOP:k;return{formData:d,onAddFilter:h,payload:e,setControlValue:j,setTooltip:l,viewport:_extends({},d.viewport,{height:c,width:b})}}