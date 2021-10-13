import PropTypes from 'prop-types';
import React from 'react';
import style from './Instruction.module.css';

const Instructions = ({ instruction }) => (
  <section className={ style.section } data-testid="instructions">
    {instruction}
  </section>
);

Instructions.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default Instructions;
