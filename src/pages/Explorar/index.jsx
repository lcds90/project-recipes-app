import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Button } from '../../components';
import style from './Explorar.module.css';

const Explorar = () => (
  <>
    <Header title="Explorar" displaySearchBtn={ false } />
    <section className={ style.section }>
      <Link to="/explorar/comidas">
        <Button dataTestId="explore-food">
          Explorar Comidas
        </Button>
      </Link>
      <Link to="/explorar/bebidas">
        <Button dataTestId="explore-drinks">
          Explorar Bebidas
        </Button>
      </Link>
    </section>
    <Footer />
  </>
);

export default Explorar;
