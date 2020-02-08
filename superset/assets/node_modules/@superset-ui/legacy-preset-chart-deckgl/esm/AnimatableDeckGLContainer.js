function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}/* eslint-disable react/jsx-handler-names */ /* eslint-disable react/destructuring-assignment */ /* eslint-disable react/forbid-prop-types */ /* eslint-disable sort-keys */ /* eslint-disable react/require-default-props */ /**
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
 */import React from"react";import PropTypes from"prop-types";import DeckGLContainer from"./DeckGLContainer";import PlaySlider from"./components/PlaySlider";var PLAYSLIDER_HEIGHT=20,propTypes={getLayers:PropTypes.func.isRequired,start:PropTypes.number.isRequired,end:PropTypes.number.isRequired,getStep:PropTypes.func,values:PropTypes.array.isRequired,aggregation:PropTypes.bool,disabled:PropTypes.bool,viewport:PropTypes.object.isRequired,children:PropTypes.node,mapStyle:PropTypes.string,mapboxApiAccessToken:PropTypes.string.isRequired,setControlValue:PropTypes.func,onViewportChange:PropTypes.func,onValuesChange:PropTypes.func},defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:function setControlValue(){},onViewportChange:function onViewportChange(){},onValuesChange:function onValuesChange(){}},AnimatableDeckGLContainer=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,c.onViewportChange=c.onViewportChange.bind(_assertThisInitialized(c)),c}_inheritsLoose(b,a);var c=b.prototype;return c.onViewportChange=function onViewportChange(a){var b=this.props.disabled?_extends({},a):_extends({},a,{height:a.height+PLAYSLIDER_HEIGHT});this.props.onViewportChange(b)},c.render=function render(){var a=this.props,b=a.start,c=a.end,d=a.getStep,e=a.disabled,f=a.aggregation,g=a.children,h=a.getLayers,i=a.values,j=a.onValuesChange,k=a.viewport,l=a.setControlValue,m=a.mapStyle,n=a.mapboxApiAccessToken,o=h(i),p=_extends({},k,{height:e?k.height:k.height-PLAYSLIDER_HEIGHT});return React.createElement("div",null,React.createElement(DeckGLContainer,{viewport:p,layers:o,setControlValue:l,mapStyle:m,mapboxApiAccessToken:n,onViewportChange:this.onViewportChange}),!e&&React.createElement(PlaySlider,{start:b,end:c,step:d(b),values:i,range:!f,onChange:j}),g)},b}(React.Component);// px
export{AnimatableDeckGLContainer as default};AnimatableDeckGLContainer.propTypes=propTypes,AnimatableDeckGLContainer.defaultProps=defaultProps;