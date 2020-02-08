"use strict";var _d3Color=require("d3-color");exports.__esModule=!0,exports.hexToRGB=hexToRGB;/* eslint-disable no-magic-numbers */ /**
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
 */ // eslint-disable-next-line import/prefer-default-export
function hexToRGB(a,c){if(void 0===c&&(c=255),!a)return[0,0,0,c];var d=(0,_d3Color.rgb)(a),e=d.r,f=d.g,g=d.b;return[e,f,g,c]}