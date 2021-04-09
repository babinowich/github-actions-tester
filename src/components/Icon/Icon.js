
import React from 'react';
import { propTypes } from './Icon.props';
import iconMap from './icon-map';

const EmptyIcon = () => <div />; // throw an error

const Icon = ({ name, size, stroke, ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return <Icon stroke={stroke} style={{ width: size, height: size }} {...rest} />;
};

Icon.propTypes = propTypes;

Icon.defaultProps = {
  size: '24px',
  stroke: 'black',
};

export default Icon;