import {FormEvent, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks';
import {AppRoute, AuthData} from '../../../types/types';
import {loginAction} from '../../../store/api-actions';

export default function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleClick = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if ((emailRef.current !== null && passwordRef.current !== null)
      && (emailRef.current?.value.length && passwordRef.current?.value.length)) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.ROOT);
    }
  };
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">{'Sign in'}</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">{'E - mail'}</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef} required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">{'Password'}</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={handleClick}
              >
                {'Sign in'}
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Amsterdam'}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

