function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}/* eslint-disable sort-keys */ /* eslint-disable no-magic-numbers */ /**
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
 */ // A safe alternative to JS's eval
import vm from"vm";import _ from"underscore";import*as d3array from"d3-array";import*as colors from"./colors";// Objects exposed here should be treated like a public API
// if `underscore` had backwards incompatible changes in a future release, we'd
// have to be careful about bumping the library as those changes could break user charts
var GLOBAL_CONTEXT={console:console,_:_,colors:colors,d3array:d3array};// Copied/modified from https://github.com/hacksparrow/safe-eval/blob/master/index.js
export default function sandboxedEval(a,b,c){var d={},e="SAFE_EVAL_"+Math.floor(1e6*Math.random());d[e]={};var f=_extends({},GLOBAL_CONTEXT,{},b);Object.keys(f).forEach(function(a){d[a]=f[a]});try{return vm.runInNewContext(e+"="+a,d,c),d[e]}catch(a){return function(){return a}}}