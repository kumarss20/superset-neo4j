function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}/* eslint-disable react/destructuring-assignment */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable sort-keys */ /* eslint-disable react/forbid-prop-types */ /**
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
 */import React from"react";import PropTypes from"prop-types";import{formatNumber}from"@superset-ui/number-format";import"./Legend.css";var categoryDelimiter=" - ",propTypes={categories:PropTypes.object,toggleCategory:PropTypes.func,showSingleCategory:PropTypes.func,format:PropTypes.string,position:PropTypes.oneOf([null,"tl","tr","bl","br"])},defaultProps={categories:{},toggleCategory:function toggleCategory(){},showSingleCategory:function showSingleCategory(){},format:null,position:"tr"},Legend=/*#__PURE__*/function(a){function b(){return a.apply(this,arguments)||this}_inheritsLoose(b,a);var c=b.prototype;return c.format=function format(a){if(!this.props.format)return a;var b=parseFloat(a);return formatNumber(this.props.format,b)},c.formatCategoryLabel=function formatCategoryLabel(a){if(!this.props.format)return a;if(a.includes(categoryDelimiter)){var b=a.split(categoryDelimiter);return this.format(b[0])+categoryDelimiter+this.format(b[1])}return this.format(a)},c.render=function render(){var a,b=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var c=Object.entries(this.props.categories).map(function(a){var c=a[0],d=a[1],e={color:"rgba("+d.color.join(", ")+")"},f=d.enabled?"\u25FC":"\u25FB";return React.createElement("li",{key:c},React.createElement("a",{href:"#",onClick:function onClick(){return b.props.toggleCategory(c)},onDoubleClick:function onDoubleClick(){return b.props.showSingleCategory(c)}},React.createElement("span",{style:e},f)," ",b.formatCategoryLabel(c)))}),d="t"===this.props.position.charAt(0)?"top":"bottom",e="r"===this.props.position.charAt(1)?"right":"left",f=(a={position:"absolute"},a[d]="0px",a[e]="10px",a);return React.createElement("div",{className:"legend",style:f},React.createElement("ul",{className:"categories"},c))},b}(React.PureComponent);export{Legend as default};Legend.propTypes=propTypes,Legend.defaultProps=defaultProps;