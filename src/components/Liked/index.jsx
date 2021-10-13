import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Button from '../Button';
import style from './Liked.module.css';

const Liked = ({ recipe, dataTestId }) => {
  const { handleFavorites, appState: { favoriteRecipes } } = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);

  const verifyId = Object.keys(recipe).includes('idMeal')
    ? recipe.idMeal || recipe.id
    : recipe.idDrink || recipe.id;
  useEffect(() => {
    const verifyFavorite = favoriteRecipes.some((favorite) => favorite.id === verifyId);
    setIsFavorite(verifyFavorite);
  }, [recipe, favoriteRecipes, verifyId]);

  return (
    <article className={ style.article }>
      <Button onClick={ () => handleFavorites({ recipe, verifyId }) }>
        <img
          title="Favoritar"
          data-testid={ dataTestId }
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt={ isFavorite ? 'Favoritado' : 'Não favoritado' }
        />
      </Button>
    </article>
  );
};

Liked.propTypes = {
  recipe: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
  }),
}.isRequired;

export default Liked;
