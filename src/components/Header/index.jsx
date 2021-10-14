import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import pusheenComputer from '../../images/pusheen-computer.gif';
import pusheenDrinking from '../../images/pusheen-drinking.gif';
import pusheenEating from '../../images/pusheen-eating.gif';
import pusheenExploring from '../../images/pusheen-searching.gif';
import pusheenWaiting from '../../images/pusheen-want-to-eat.gif';
import Input from '../Input';
import Button from '../Button';
import Context from '../../context/Context';
import style from './Header.module.css';

const Header = (props) => {
  const { title, displaySearchBtn } = props;
  const location = useLocation();
  const history = useHistory();
  const [search, setBySearch] = useState('');
  const [searchQuery, setBySearchQuery] = useState('');
  const { handleSearch } = useContext(Context);

  const redirectToProfile = () => {
    history.push('/perfil');
  };

  const getInfoFromSearch = () => {
    handleSearch({ query: search, typeSearch: searchQuery, location });
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarButton = () => (
    <button
      className={ style.searchBtn }
      onClick={ () => setShowSearchBar(!showSearchBar) }
      type="button"
      title="Pesquisar"
    >
      <img data-testid="search-top-btn" src={ searchIcon } alt="search-icon" />
    </button>
  );

  const searchBar = () => (
    <section className={ style.searchBar }>
      <div
        className={ style.background }
        onClickCapture={ () => setShowSearchBar(!showSearchBar) }
      />
      <Input
        dataTestId="search-input"
        name="search"
        onChange={ ({ target: { value } }) => setBySearch(value) }
        value={ search }
      />
      <section
        className={ style.options }
        onChange={ ({ target: { value } }) => setBySearchQuery(value) }
      >
        <Input
          value="byIngredient"
          name="searchQuery"
          type="radio"
          dataTestId="ingredient-search-radio"
          label="Buscar por ingrediente"
        />
        <Input
          value="byName"
          type="radio"
          name="searchQuery"
          dataTestId="name-search-radio"
          label="Buscar pelo nome"
        />
        <Input
          value="byFirstLetter"
          type="radio"
          name="searchQuery"
          dataTestId="first-letter-search-radio"
          label="Buscar por letra"
        />
      </section>

      <Button
        onClick={ getInfoFromSearch }
        dataTestId="exec-search-btn"
      >
        Buscar
      </Button>
    </section>
  );

  const verifyImgPath = () => {
    const objImg = {
      comidas: pusheenEating,
      bebidas: pusheenDrinking,
      explorar: pusheenExploring,
      perfil: pusheenWaiting,
      receitas: pusheenComputer,
    };

    const path = location.pathname.toLowerCase();

    if (path.includes('explorar')) {
      return <img className={ style.explorar } src={ objImg.explorar } alt="" />;
    }
    if (path.includes('comidas')) {
      return (<img
        className={ style.logo }
        src={ objImg.comidas }
        alt=""
      />);
    }
    if (path.includes('bebidas')) {
      return (<img
        className={ style.logo }
        src={ objImg.bebidas }
        alt=""
      />);
    }
    if (path.includes('perfil')) {
      return (<img
        className={ style.explorar }
        src={ objImg.perfil }
        alt=""
      />);
    }
    if (path.includes('receitas')) {
      return (<img
        className={ style.logo }
        src={ objImg.receitas }
        alt=""
      />);
    }
  };

  return (
    <header className={ style.header }>
      <Button onClick={ redirectToProfile }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
      </Button>
      <h1 data-testid="page-title">{title}</h1>
      <h2>{verifyImgPath()}</h2>
      {displaySearchBtn && searchBarButton()}
      {showSearchBar && searchBar()}
    </header>
  );
};

Header.propTypes = {
  displaySearchBtn: PropTypes.bool,
  title: PropTypes.string,
}.isRequired;

export default Header;
