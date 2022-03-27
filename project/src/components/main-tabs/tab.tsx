import cn from 'classnames';
interface TabProps {
  active: boolean;
  name: string;
  handleClickCity: (name: string) => void;
}

export default function Tab({active, name, handleClickCity} : TabProps): JSX.Element {
  const linkClass = cn({
    'locations__item-link tabs__item': true,
    'tabs__item--active': active,
  });
  return (
    <li className="locations__item" onClick={() => handleClickCity(name)}>
      <a className={linkClass} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}
