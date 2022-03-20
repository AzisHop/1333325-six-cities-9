import {data} from '../../../mock/main-mock';
import PlacesList from '../../place/places-list';
import {Options, TypePage, Hotel} from '../../../types/types';
import SortingCities from '../../sorting-cities/sorting-cities';
import MainTabs from '../../main-tabs/main-tabs';
import MainEmpty from './main-empty';

import {setCurrentCity, loadPlaces, setSortOption} from '../../../store/main-reducer/mainReducer';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {getCity, getPlaces, getSortOption} from '../../../store/main-reducer/selectors';
import {useEffect} from 'react';


// interface MainProps {
//   place: number;
// }
export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPlaces({places: data.places}));
  }, []);
  const currentCity = useAppSelector(getCity);
  const sortOption = useAppSelector(getSortOption);
  const places = getSortPlaces([...useAppSelector(getPlaces)], sortOption)
    .filter(({city}) => city.name === currentCity);

  const handleClickCity = (name: string) => {
    dispatch(setCurrentCity({city: name}));};
  const handleSortClick = (option: Options) => {
    dispatch(setSortOption({option: option}));
  };
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{'Oliver.conner@gmail.com'}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">{'Sign out'}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">{'Cities'}</h1>
        <MainTabs handleClickCity={handleClickCity} currentCity={currentCity}/>
        <div className="cities">{!places.length ? (<MainEmpty />) : (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">{'Places'}</h2>
              <b className="places__found">{places.length} places to stay in {currentCity}</b>
              <SortingCities handleSortClick={handleSortClick} sortOption={sortOption} />
              <PlacesList places={places} typePage={TypePage.MAIN} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        )}

        </div>
      </main>
    </div>
  );
}

function getSortPlaces(places: Hotel[], option: Options) {
  switch (option) {
    case Options.HIGH:
      return places.sort((place1, place2) => place2.price - place1.price);
    case Options.LOW:
      return places.sort((place1, place2) => place1.price - place2.price);
    case Options.TOP:
      return places.sort((place1, place2) => place2.rating - place1.rating);
    default:
      return places;
  }
}
