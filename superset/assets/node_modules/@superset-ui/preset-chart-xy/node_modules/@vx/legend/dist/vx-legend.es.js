import cx from 'classnames';
import { Group } from '@vx/group';
import React from 'react';
import PropTypes from 'prop-types';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

LegendItem.propTypes = {
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any
};
function LegendItem(_ref) {
  var _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '0' : _ref$margin,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'flex' : _ref$display,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["flexDirection", "alignItems", "margin", "display", "children"]);

  return React.createElement("div", _extends({
    className: "vx-legend-item",
    style: {
      display: display,
      alignItems: alignItems,
      flexDirection: flexDirection,
      margin: margin
    }
  }, restProps), children);
}

LegendLabel.propTypes = {
  align: PropTypes.string,
  label: PropTypes.any,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any
};
function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '1' : _ref$flex,
      label = _ref.label,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children;
  return React.createElement("div", {
    className: "vx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, children || label);
}

ShapeRect.propTypes = {
  fill: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object
};
function ShapeRect(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  return React.createElement("div", {
    style: _objectSpread({
      width: width,
      height: height,
      background: fill
    }, style)
  });
}

ShapeCircle.propTypes = {
  fill: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object
};
function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  var size = Math.max(width, height);
  var radius = size / 2;
  return React.createElement("svg", {
    width: size,
    height: size
  }, React.createElement(Group, {
    top: radius,
    left: radius
  }, React.createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}

function valueOrIdentity(x) {
  if (x && x.value) return x.value;
  return x;
}

function renderShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'rect' : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? valueOrIdentity : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? valueOrIdentity : _ref$size,
      width = _ref.width,
      height = _ref.height,
      label = _ref.label,
      _ref$shapeStyle = _ref.shapeStyle,
      shapeStyle = _ref$shapeStyle === void 0 ? function (x) {
    return undefined;
  } : _ref$shapeStyle;
  var props = {
    width: width,
    height: height,
    label: label,
    fill: fill(_objectSpread({}, label)),
    size: size(_objectSpread({}, label)),
    style: shapeStyle(_objectSpread({}, label))
  };

  if (typeof shape === 'string') {
    if (shape === 'rect') {
      return React.createElement(ShapeRect, props);
    }

    return React.createElement(ShapeCircle, props);
  }

  if (React.isValidElement(shape)) {
    return React.cloneElement(shape, props);
  }

  return React.createElement(shape, props);
}

LegendShape.propTypes = {
  shape: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  margin: PropTypes.any,
  label: PropTypes.any,
  fill: PropTypes.any,
  size: PropTypes.any,
  shapeStyle: PropTypes.any
};
function LegendShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? ShapeRect : _ref$shape,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      label = _ref.label,
      fill = _ref.fill,
      size = _ref.size,
      shapeStyle = _ref.shapeStyle;
  return React.createElement("div", {
    className: "vx-legend-shape",
    style: {
      display: 'flex',
      width: !!size ? size(_objectSpread({}, label)) : width,
      height: !!size ? size(_objectSpread({}, label)) : height,
      margin: margin
    }
  }, renderShape({
    shape: shape,
    label: label,
    width: width,
    height: height,
    fill: fill,
    shapeStyle: shapeStyle
  }));
}

Legend.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
  domain: PropTypes.array,
  scale: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  shapeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shapeHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shapeMargin: PropTypes.any,
  labelAlign: PropTypes.string,
  labelFlex: PropTypes.string,
  labelMargin: PropTypes.string,
  itemMargin: PropTypes.string,
  direction: PropTypes.string,
  itemDirection: PropTypes.string,
  fill: PropTypes.any,
  size: PropTypes.any,
  shape: PropTypes.any,
  shapeStyle: PropTypes.any,
  labelFormat: PropTypes.func,
  labelTransform: PropTypes.func,
  children: PropTypes.func
};
var defaultStyle = {
  display: 'flex'
};
function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? defaultStyle : _ref$style,
      shapeStyle = _ref.shapeStyle,
      scale = _ref.scale,
      shape = _ref.shape,
      domain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? valueOrIdentity : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? valueOrIdentity : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? valueOrIdentity : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
      _ref$labelFlex = _ref.labelFlex,
      labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "style", "shapeStyle", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "children"]);

  domain = domain || scale.domain();
  var labels = domain.map(labelTransform({
    scale: scale,
    labelFormat: labelFormat
  }));
  if (children) return children(labels);
  return React.createElement("div", {
    className: cx('vx-legend', className),
    style: _objectSpread({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    var text = label.text;
    return React.createElement(LegendItem, _extends({
      key: "legend-".concat(label, "-").concat(i),
      margin: itemMargin,
      flexDirection: itemDirection,
      label: label
    }, restProps), React.createElement(LegendShape, {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), React.createElement(LegendLabel, {
      label: text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }));
  }));
}

function defaultTransform(_ref2) {
  var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;
  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "".concat(labelFormat(d, i)),
      value: scale(d)
    };
  };
}

LegendQuantile.propTypes = {
  scale: PropTypes.func.isRequired,
  domain: PropTypes.array,
  labelFormat: PropTypes.func,
  labelTransform: PropTypes.func,
  labelDelimiter: PropTypes.string
};
function LegendQuantile(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      labelTransform = _ref.labelTransform,
      _ref$labelDelimiter = _ref.labelDelimiter,
      labelDelimiter = _ref$labelDelimiter === void 0 ? '-' : _ref$labelDelimiter,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "labelFormat", "labelTransform", "labelDelimiter"]);

  domain = domain || scale.range();
  labelTransform = labelTransform || defaultTransform$1({
    labelDelimiter: labelDelimiter
  });
  return React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform$1(_ref2) {
  var labelDelimiter = _ref2.labelDelimiter;
  return function (_ref3) {
    var scale = _ref3.scale,
        labelFormat = _ref3.labelFormat;
    return function (d, i) {
      var _scale$invertExtent = scale.invertExtent(d),
          _scale$invertExtent2 = _slicedToArray(_scale$invertExtent, 2),
          x0 = _scale$invertExtent2[0],
          x1 = _scale$invertExtent2[1];

      return {
        extent: [x0, x1],
        text: "".concat(labelFormat(x0, i), " ").concat(labelDelimiter, " ").concat(labelFormat(x1, i)),
        value: scale(x0),
        datum: d,
        index: i
      };
    };
  };
}

LegendLinear.propTypes = {
  scale: PropTypes.func.isRequired,
  domain: PropTypes.array,
  steps: PropTypes.number,
  labelFormat: PropTypes.func,
  labelTransform: PropTypes.func
};
function LegendLinear(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? 5 : _ref$steps,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform$2 : _ref$labelTransform,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "steps", "labelFormat", "labelTransform"]);

  domain = domain || defaultDomain({
    steps: steps,
    scale: scale
  });
  return React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultDomain(_ref2) {
  var steps = _ref2.steps,
      scale = _ref2.scale;
  var domain = scale.domain();
  var start = domain[0];
  var end = domain[domain.length - 1];
  var step = (end - start) / (steps - 1);
  return new Array(steps).fill(1).reduce(function (acc, cur, i) {
    acc.push(start + i * step);
    return acc;
  }, []);
}

function defaultTransform$2(_ref3) {
  var scale = _ref3.scale,
      labelFormat = _ref3.labelFormat;
  return function (d, i) {
    return {
      text: "".concat(labelFormat(d, i)),
      value: scale(d)
    };
  };
}

LegendOrdinal.propTypes = {
  scale: PropTypes.func.isRequired,
  domain: PropTypes.array,
  labelTransform: PropTypes.func,
  labelFormat: PropTypes.func
};
function LegendOrdinal(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform$3 : _ref$labelTransform,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? valueOrIdentity : _ref$labelFormat,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "labelTransform", "labelFormat"]);

  return React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform$3(_ref2) {
  var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;
  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "".concat(labelFormat(d, i)),
      value: scale(d)
    };
  };
}

LegendThreshold.propTypes = {
  scale: PropTypes.func.isRequired,
  domain: PropTypes.array,
  labelTransform: PropTypes.func,
  labelFormat: PropTypes.func,
  labelDelimiter: PropTypes.string,
  labelLower: PropTypes.string,
  labelUpper: PropTypes.string
};
function LegendThreshold(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      labelTransform = _ref.labelTransform,
      _ref$labelDelimiter = _ref.labelDelimiter,
      labelDelimiter = _ref$labelDelimiter === void 0 ? 'to' : _ref$labelDelimiter,
      _ref$labelLower = _ref.labelLower,
      labelLower = _ref$labelLower === void 0 ? 'Less than ' : _ref$labelLower,
      _ref$labelUpper = _ref.labelUpper,
      labelUpper = _ref$labelUpper === void 0 ? 'More than ' : _ref$labelUpper,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "labelFormat", "labelTransform", "labelDelimiter", "labelLower", "labelUpper"]);

  domain = domain || scale.range();
  labelTransform = labelTransform || defaultTransform$4({
    labelDelimiter: labelDelimiter,
    labelLower: labelLower,
    labelUpper: labelUpper
  });
  return React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform$4(_ref2) {
  var labelDelimiter = _ref2.labelDelimiter,
      labelLower = _ref2.labelLower,
      labelUpper = _ref2.labelUpper;
  return function (_ref3) {
    var scale = _ref3.scale,
        labelFormat = _ref3.labelFormat;

    function format(_labelFormat, value, i) {
      var formattedValue = _labelFormat(value, i);

      if (formattedValue === 0) return '0';
      return formattedValue || '';
    }

    return function (d, i) {
      var _scale$invertExtent = scale.invertExtent(d),
          _scale$invertExtent2 = _slicedToArray(_scale$invertExtent, 2),
          x0 = _scale$invertExtent2[0],
          x1 = _scale$invertExtent2[1];

      var delimiter = " ".concat(labelDelimiter, " ");
      var value;

      if (x0 !== 0 && !x0 && (x1 === 0 || !!x1)) {
        // lower threshold
        value = x1 - 1;
        delimiter = labelLower;
      } else if ((x0 === 0 || !!x0) && (x1 === 0 || !!x1)) {
        // threshold step
        value = x0;
      } else if (!x1 && (x0 === 0 || !!x0)) {
        // upper threshold
        value = x0 + scale.domain()[1];
        x1 = x0;
        x0 = undefined;
        delimiter = labelUpper;
      }

      return {
        extent: [x0, x1],
        text: "".concat(format(labelFormat, x0, i)).concat(delimiter).concat(format(labelFormat, x1, i)),
        value: scale(value),
        datum: d,
        index: i
      };
    };
  };
}

function LegendSize(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? 5 : _ref$steps,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform$5 : _ref$labelTransform,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "steps", "labelFormat", "labelTransform"]);

  domain = domain || defaultDomain$1({
    steps: steps,
    scale: scale
  });
  return React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultDomain$1(_ref2) {
  var steps = _ref2.steps,
      scale = _ref2.scale;
  var domain = scale.domain();
  var start = domain[0];
  var end = domain[domain.length - 1];
  var step = (end - start) / (steps - 1);
  return new Array(steps).fill(1).reduce(function (acc, cur, i) {
    acc.push(start + i * step);
    return acc;
  }, []);
}

function defaultTransform$5(_ref3) {
  var scale = _ref3.scale,
      labelFormat = _ref3.labelFormat;
  return function (d, i) {
    return {
      text: "".concat(labelFormat(d, i)),
      value: scale(d),
      datum: d,
      index: i
    };
  };
}

export { Legend, LegendQuantile, LegendLinear, LegendOrdinal, LegendThreshold, LegendSize, LegendItem, LegendLabel, LegendShape };
