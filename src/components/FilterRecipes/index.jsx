import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import style from './FilterRecipes.module.css';

const FilterRecipes = ({ onClick }) => (
  <header className={ style.header }>
    <Button
      dataTestId="filter-by-all-btn"
      onClick={ onClick }
      name=""
    >
      All
    </Button>
    <Button
      dataTestId="filter-by-food-btn"
      onClick={ onClick }
      name="comida"
    >
      Food
    </Button>
    <Button
      dataTestId="filter-by-drink-btn"
      onClick={ onClick }
      name="bebida"
    >
      Drinks
    </Button>
  </header>
);

FilterRecipes.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FilterRecipes;
