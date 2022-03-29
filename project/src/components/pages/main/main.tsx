import PlacesList from '../../place/places-list';
import {Options, TypePage, Hotel, AuthorizationStatus, Cities} from '../../../types/types';
import SortingCities from '../../sorting-cities/sorting-cities';
import MainTabs from '../../main-tabs/main-tabs';
import MainEmpty from './main-empty';

import {setCurrentCity, setSortOption} from '../../../store/main-reducer/mainReducer';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {getCity, getOrderedPlaces, getPlaces, getSortOption} from '../../../store/main-reducer/selectors';
import {useEffect} from 'react';
import {fetchHotelsAction} from '../../../store/api-actions';
import Header from '../../header/header';
import {getAuth, getAvatarUrl, getEmail} from '../../../store/user-reducer/selectors';

export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotelsAction());
  }, [dispatch]);
  const auth = useAppSelector(getAuth);
  const email = useAppSelector(getEmail);
  const avatarUrl =useAppSelector(getAvatarUrl);
  const currentCity = useAppSelector(getCity);
  const sortOption = useAppSelector(getSortOption);
  const places = useAppSelector(getOrderedPlaces)

  const handleClickCity = (name: string) => {
    dispatch(setCurrentCity(name));
  };
  const handleSortClick = (option: Options) => {
    dispatch(setSortOption(option));
  };
  return (
    <div className="page page--gray page--main">
      <Header isAuth={auth === AuthorizationStatus.AUTH} email={email} avatarUrl={avatarUrl}/>
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
