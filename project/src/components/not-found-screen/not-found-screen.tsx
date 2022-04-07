import {Link} from 'react-router-dom';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';
import {getAuth} from '../../store/user-reducer/selectors';
import {AuthorizationStatus} from '../../types/types';

export default function NotFoundScreen(): JSX.Element {
  const auth = useAppSelector(getAuth);
  return (
    <div className="page">
      <Header isAuth={auth === AuthorizationStatus.AUTH} />
      <main className="page__main container">
        <section style={{width: '100%'}}>
          <h1>404. Page not found</h1>
          <Link to="/">Back to Home page</Link>
        </section>
      </main>
    </div>
  );
}
