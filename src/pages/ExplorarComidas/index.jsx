import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Header, Footer } from '../../components';
import fetchRandomRecipe from '../../services/fetchRandomRecipe';
import style from './ExplorarComidas.module.css';

const ExplorarComidas = () => {
  const location = useLocation();

  const urlLocation = location.pathname.includes('comidas')
    ? 'comidas'
    : 'bebidas';

  const mealOrDrink = urlLocation === 'comidas' ? 'meal' : 'cocktail';

  const [randomUrl, setRandomUrl] = useState('');

  useEffect(() => {
    const getRandomRecipe = async () => {
      const randomRecipe = await fetchRandomRecipe(mealOrDrink);
      setRandomUrl(
        `/${urlLocation}/${randomRecipe[0].idMeal || randomRecipe[0].idDrink}`,
      );
    };
    getRandomRecipe();
  }, []);

  return (
    <>
      <Header title="Explorar Comidas" displaySearchBtn={ false } />
      <section className={ style.section }>
        <Link to={ `/explorar/${urlLocation}/ingredientes` }>
          <Button dataTestId="explore-by-ingredient">
            Por Ingredientes
          </Button>
        </Link>
        {urlLocation === 'comidas' && (
          <Link to={ `/explorar/${urlLocation}/area` }>
            <Button dataTestId="explore-by-area">
              Por Local de Origem
            </Button>
          </Link>
        )}
        <Link to={ randomUrl }>
          <Button dataTestId="explore-surprise">
            Me Surpreenda!
          </Button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default ExplorarComidas;
