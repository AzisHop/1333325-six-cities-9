import RoomGallery from '../../room-gallery/room-gallery';
import {AppRoute, AuthorizationStatus, Hotel, TypePage} from '../../../types/types';
import Comments from '../../comments/comments';
import Place from '../../place/place';
import {useAppSelector} from '../../../hooks';
import {getComments, getNearbyHotels, getPlace} from '../../../store/place-reducer/selectors';
import {useParams} from 'react-router-dom';
import Header from '../../header/header';
import {getAuth} from '../../../store/user-reducer/selectors';
import CommentForm from '../../comment-form/comment-form';
import {getRatingInStar} from '../../../utils/utils';
import {BookmarkButton} from '../../bookmark-button/bookmark-button';
import Map from '../../map/map';
import NotFoundScreen from '../../not-found-screen/not-found-screen';

export default function Room(): JSX.Element {
  ('ROOOM');
  const param = useParams();
  const roomId = Number(param.id);
  const userAuth = useAppSelector(getAuth);
  const comments = useAppSelector(getComments);
  const nearbyHotels = useAppSelector(getNearbyHotels);
  const hotel: Hotel | null = useAppSelector(getPlace);

  if (hotel === null) {
    return (<NotFoundScreen />);
  }
  const mapPlaces = [...nearbyHotels, hotel];
  const ratingInStars = getRatingInStar(hotel.rating, 150);
  let images = hotel.images || [];

  if (images.length > 5) {
    images = images.slice(0, 6);
  }

  const places = nearbyHotels.map((place) => (
    <Place
      key={place.id}
      place={place}
      typePage={TypePage.HOTEL}
    />
  ));
  return (
    <div className="page">
      <Header isAuth={userAuth === AuthorizationStatus.AUTH}
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
                <BookmarkButton id={roomId} page={TypePage.HOTEL} isFavorite={hotel.isFavorite}/>
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
                  {hotel.goods?.map((good, index) =>
                    (
                      <li className="property__inside-item" key={index++}>
                        {good}
                      </li>
                    ),
                  )}
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
                {userAuth === AuthorizationStatus.AUTH ? <CommentForm roomId={roomId} /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map location={hotel.city} hotels={mapPlaces} activePlace={hotel.id}/>
          </section>
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

