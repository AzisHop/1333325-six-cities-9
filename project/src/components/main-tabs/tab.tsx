import cn from 'classnames';
interface TabProps {
  active: boolean;
  name: string;
  onCityClick: (name: string) => void;
}

export default function Tab({active, name, onCityClick} : TabProps): JSX.Element {
  const linkClass = cn({
    'locations__item-link tabs__item': true,
    'tabs__item--active': active,
  });
  return (
    <li className="locations__item" onClick={() => onCityClick(name)}>
      <a className={linkClass} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}
