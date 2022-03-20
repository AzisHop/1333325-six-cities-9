import {Cities} from '../../types/types';
import Tab from './tab';

interface MainTabsProps {
  handleClickCity: (name: string) => void;
  currentCity: string;
}
export default function MainTabs({handleClickCity, currentCity} : MainTabsProps): JSX.Element {
  const cities = [Cities.HAMBURG, Cities.DUSSELDORF, Cities.AMSTERDAM, Cities.COLOGNE, Cities.BRUSSELS, Cities.PARIS];
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((nameCity) => (
            <Tab
              key={nameCity}
              name={nameCity}
              active={currentCity === nameCity}
              handleClickCity={handleClickCity}
            />
          ),
          )}
        </ul>
      </section>
    </div>
  );
}
