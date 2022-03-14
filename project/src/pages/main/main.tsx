import {data} from '../../mock/mainPageMock';
import PlacesList from '../../components/place/placesList';
import {TypePage} from '../../types/types';
import SortingCities from '../../components/sorting-cities/sortingCities';
import MainTabs from '../../components/main-tabs/mainTabs';
import MainEmpty from './mainEmpty';

interface MainProps {
  place: number;
}
export default function Main({place} : MainProps): JSX.Element {
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
        <MainTabs />
        <div className="cities">{!place ? (<MainEmpty />) : (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">{'Places'}</h2>
              <b className="places__found">{place} places to stay in Amsterdam</b>
              <SortingCities />
              <PlacesList places={data.places} typePage={TypePage.MAIN} />
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

