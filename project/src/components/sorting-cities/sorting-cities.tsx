import {Options} from '../../types/types';
import cn from 'classnames';
import {useState} from 'react';
import {setSortOption} from '../../store/main-reducer/main-reducer';
import {useAppDispatch} from '../../hooks';

const options = [Options.POPULAR, Options.HIGH, Options.LOW, Options.TOP];
interface SortingCitiesProps {
  sortOption: Options;
}
export default function SortingCities({sortOption}: SortingCitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<boolean>(false);
  const optionsClass = cn({
    'places__options places__options--custom': true,
    'places__options--opened': active,
  });
  const onClickActive = () => {
    setActive(!active);
  };
  const handleSortClick = (option: Options) => {
    dispatch(setSortOption(option));
    setActive(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">{'Sort by'}</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClickActive}>
        {sortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={optionsClass}>
        {options.map((option) => {
          const optionClass = cn({
            'places__option': true,
            'places__option--active': option === sortOption,
          });
          return (
            <li
              key={option}
              className={optionClass}
              onClick={() => handleSortClick(option)}
              tabIndex={0}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
