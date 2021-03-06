import PlacesList from '../../place/places-list';
import {TypePage, AuthorizationStatus} from '../../../types/types';
import SortingCities from '../../sorting-cities/sorting-cities';
import MainTabs from '../../main-tabs/main-tabs';
import MainEmpty from './main-empty';

import {setCurrentCity} from '../../../store/main-reducer/main-reducer';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {getActiveHotelId, getCity, getOrderedHotels, getSortOption} from '../../../store/main-reducer/selectors';
import {useEffect} from 'react';
import {fetchHotelsAction} from '../../../store/api-actions';
import Header from '../../header/header';
import {getAuth} from '../../../store/user-reducer/selectors';
import Map from '../../map/map';
import {CitiesLocation} from '../../../utils/utils';
import cn from 'classnames';

export default function Main(): JSX.Element {
  ('MAIN');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotelsAction());
  }, [dispatch]);
  const auth = useAppSelector(getAuth);
  const currentCity = useAppSelector(getCity);
  const sortOption = useAppSelector(getSortOption);
  const places = useAppSelector(getOrderedHotels);
  const cityLocation = CitiesLocation.filter((city) => city.name === currentCity)[0];
  const activePlace = useAppSelector(getActiveHotelId);

  const mainBlockClass = cn({
    'page__main page__main--index': true,
    'page__main--index-empty': !places.length,
  });

  const handleClickCity = (name: string) => {
    dispatch(setCurrentCity(name));
  };

  return (
    <div className="page page--gray page--main">
      <Header isAuth={auth === AuthorizationStatus.AUTH} />
      <main className={mainBlockClass}>
        <h1 className="visually-hidden">{'Cities'}</h1>
        <MainTabs onCityClick={handleClickCity} currentCity={currentCity}/>
        <div className="cities">{!places.length ? (<MainEmpty city={currentCity}/>) : (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">{'Places'}</h2>
              <b className="places__found">{places.length} places to stay in {currentCity}</b>
              <SortingCities sortOption={sortOption} />
              <PlacesList places={places} typePage={TypePage.MAIN} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map location={cityLocation} hotels={places} activePlace={activePlace}/>
              </section>
            </div>
          </div>
        )}

        </div>
      </main>
    </div>
  );
}

