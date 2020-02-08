function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}/* eslint-disable react/jsx-handler-names */ /* eslint-disable react/destructuring-assignment */ /* eslint-disable sort-keys */ /* eslint-disable react/forbid-prop-types */ /**
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
 */import React from"react";import PropTypes from"prop-types";import MapGL from"react-map-gl";import DeckGL from"deck.gl";import"mapbox-gl/dist/mapbox-gl.css";import{isEqual}from"lodash";import"./css/deckgl.css";var TICK=2e3,propTypes={viewport:PropTypes.object.isRequired,layers:PropTypes.array.isRequired,setControlValue:PropTypes.func,mapStyle:PropTypes.string,mapboxApiAccessToken:PropTypes.string.isRequired,onViewportChange:PropTypes.func},defaultProps={mapStyle:"light",onViewportChange:function onViewportChange(){},setControlValue:function setControlValue(){}},DeckGLContainer=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,c.tick=c.tick.bind(_assertThisInitialized(c)),c.onViewportChange=c.onViewportChange.bind(_assertThisInitialized(c)),c.state={previousViewport:b.viewport,timer:setInterval(c.tick,TICK)},c}_inheritsLoose(b,a),b.getDerivedStateFromProps=function getDerivedStateFromProps(a,b){return a.viewport===b.viewport?null:{viewport:_extends({},a.viewport),previousViewport:b.viewport}};var c=b.prototype;return c.componentWillUnmount=function componentWillUnmount(){clearInterval(this.state.timer)},c.onViewportChange=function onViewportChange(a){var b=Object.assign({},a),c=_extends({},this.state.previousViewport,{},b);// delete vp.width;
// delete vp.height;
this.props.onViewportChange(c)},c.tick=function tick(){var a=this;// Limiting updating viewport controls through Redux at most 1*sec
// Deep compare is needed as shallow equality doesn't work here, viewport object
// changes id at every change
if(this.state&&!isEqual(this.state.previousViewport,this.props.viewport)){var b=this.props.setControlValue,c=this.props.viewport;b&&b("viewport",c),this.setState(function(){return{previousViewport:a.props.viewport}})}},c.layers=function layers(){// Support for layer factory
return this.props.layers.some(function(a){return"function"==typeof a})?this.props.layers.map(function(a){return"function"==typeof a?a():a}):this.props.layers},c.render=function render(){var a=this.props.viewport;return React.createElement(MapGL,_extends({},a,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),React.createElement(DeckGL,_extends({},a,{layers:this.layers(),initWebGLParameters:!0})))},b}(React.Component);// milliseconds
export{DeckGLContainer as default};DeckGLContainer.propTypes=propTypes,DeckGLContainer.defaultProps=defaultProps;