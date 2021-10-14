import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { Header, FilterRecipes, Share, Liked } from '../../components';
import style from './ReceitasFavoritas.module.css';

const ReceitasFavoritas = () => {
  const { appState: { favoriteRecipes } } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const renderCards = (recipesArray) => (
    recipesArray
      .filter((recipe) => (recipe.type.includes(selectedCategory)))
      .map((recipe, index) => (
        <article key={ index } className={ style.card }>
          <Link
            to={ recipe.type === 'comida'
              ? `/comidas/${recipe.id}`
              : `/bebidas/${recipe.id}` }
            className={ style.imgCard }
          >
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ `receita ${index}` }
            />
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { recipe.type === 'comida' ? `${recipe.area} - ${recipe.category}`
              : recipe.alcoholicOrNot }
          </p>

          <Share
            type={ recipe.type }
            id={ recipe.id }
            dataTestId={ `${index}-horizontal-share-btn` }
            destinationUrl={
              window.location.href.split(window.location.pathname)[0]
              + (recipe.type === 'comida'
                ? `/comidas/${recipe.id}`
                : `/bebidas/${recipe.id}`)
            }
          />

          <Liked recipe={ recipe } dataTestId={ `${index}-horizontal-favorite-btn` } />
        </article>
      ))
  );

  if (!favoriteRecipes) return <div>Carregando</div>;

  return (
    <>
      <Header title="Receitas Favoritas" displaySearchBtn={ false } />
      <FilterRecipes onClick={ ({ target: { name } }) => filterByCategory(name) } />
      <section className={ style.section }>
        { renderCards(favoriteRecipes) }
      </section>
    </>
  );
};

export default ReceitasFavoritas;
