import React from 'react';
import PropTypes from 'prop-types';

import {Link} from '@Shopify/polaris';

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return (
      <span>{children}</span>
    );
  }

  return (
    <Link
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </Link>
  );
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilterLink;
