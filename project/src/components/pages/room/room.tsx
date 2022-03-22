import RoomGallery from '../../room-gallery/room-gallery';
import {AppRoute, AuthorizationStatus, Hotel, TypePage} from '../../../types/types';
import Comments from '../../comments/comments';
import Place from '../../place/place';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchComments, fetchNearOffers, fetchOffer} from '../../../store/api-actions';
import {getComments, getNearbyOffers, getPlace} from '../../../store/place-reducer/selectors';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../header/header';
import {getAuth, getEmail} from '../../../store/user-reducer/selectors';
import CommentForm from '../../comment-form/comment-form';
import {getRatingInStar} from '../../../utils/utils';
import {setFavoriteHotel} from '../../../store/place-reducer/place-reducer';
import {BookmarkButton} from '../../bookmark-button/bookmark-button';

export default function Room(): JSX.Element {
  const param = useParams();
  const roomId = Number(param.id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffer(roomId));
    dispatch(fetchComments(roomId));
    dispatch(fetchNearOffers(roomId));
    dispatch(setFavoriteHotel(false));
  }, [roomId, dispatch]);
  const userAuth = useAppSelector(getAuth);
  const email = useAppSelector(getEmail);
  const comments = useAppSelector(getComments);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const hotel: Hotel | null = useAppSelector(getPlace);

  if (hotel === null) {
    return (<div/>); // ToDo обработать нормально ошибку
  }

  const ratingInStars = getRatingInStar(hotel.rating, 150);
  let images = hotel.images || [];

  if (images.length > 5) {
    images = images.slice(0, 6);
  }

  const places = nearbyOffers.map((place) => (
    <Place
      key={place.id}
      place={place}
      typePage={TypePage.OFFER}
    />
  ));
  return (
    <div className="page">
      <Header isAuth={userAuth === AuthorizationStatus.AUTH}
        email={email}
        page={`${AppRoute.ROOM}/${roomId}`}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery images={images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                    Beautiful &amp; luxurious studio at great location
                </h1>
                <BookmarkButton id={roomId} page={TypePage.OFFER} isFavorite={hotel.isFavorite}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingInStars}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotel.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {hotel.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotel.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">{hotel.title}</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                      Wi-Fi
                  </li>
                  <li className="property__inside-item">
                      Washing machine
                  </li>
                  <li className="property__inside-item">
                      Towels
                  </li>
                  <li className="property__inside-item">
                      Heating
                  </li>
                  <li className="property__inside-item">
                      Coffee machine
                  </li>
                  <li className="property__inside-item">
                      Baby seat
                  </li>
                  <li className="property__inside-item">
                      Kitchen
                  </li>
                  <li className="property__inside-item">
                      Dishwasher
                  </li>
                  <li className="property__inside-item">
                      Cabel TV
                  </li>
                  <li className="property__inside-item">
                      Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={hotel?.host?.avatarUrl} width="74"
                      height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {hotel?.host?.name}
                  </span>
                  {hotel?.host?.isPro &&
                  (
                    <span className="property__user-status">
                    Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {hotel?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <Comments comments={comments}/>
                <CommentForm roomId={roomId} />
              </section>
            </div>
          </div>
          <section className="property__map map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {places}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

