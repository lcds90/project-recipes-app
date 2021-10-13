import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import Button from '../Button';
import shareIcon from '../../images/shareIcon.svg';
import style from './Share.module.css';

const Share = ({ dataTestId, destinationUrl }) => {
  const [showCopied, setShowCopied] = useState(false);
  return (
    <article className={ style.article }>
      <Button
        onClick={ () => copy(destinationUrl).then(() => {
          setShowCopied(true);
        }) }
      >
        <img
          data-testid={ dataTestId }
          src={ shareIcon }
          alt="share icon"
        />
        {showCopied && 'Link copiado!'}
      </Button>
    </article>
  );
};

Share.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  destinationUrl: PropTypes.string.isRequired,
};

export default Share;
