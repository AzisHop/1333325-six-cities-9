import {FavoriteHotel, TypePage} from '../../types/types';
import {changeFavorite} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import cn from 'classnames';

interface BookmarkButtonProps {
  id: number;
  isFavorite: boolean;
  page?: TypePage;
}
export function BookmarkButton({id, isFavorite, page = TypePage.MAIN}: BookmarkButtonProps) : JSX.Element{
  const bookmarkClass = cn({
    'place-card__bookmark-button': page === TypePage.MAIN,
    'place-card__bookmark-button--active': isFavorite && (page === TypePage.MAIN),

    'property__bookmark-button': page === TypePage.HOTEL,
    'property__bookmark-button--active': isFavorite && (page === TypePage.HOTEL),

    'button': true,
  });
  const bookmarkIconClass = cn({
    'place-card__bookmark-icon': page === TypePage.MAIN,
    'property__bookmark-icon': page === TypePage.HOTEL,
  });

  const bookmarkSizeClass = {
    width: page === TypePage.MAIN ? '18px' : '31px',
    height: page === TypePage.MAIN ? '19px'  : '33px',
  };
  const dispatch = useAppDispatch();
  const onClickBookmark = () => {
    const favoriteChange: FavoriteHotel = {
      id: id,
      isFavorite: !isFavorite,
    };
    dispatch(changeFavorite(favoriteChange));
  };
  return (
    <button className={bookmarkClass} type="button" onClick={onClickBookmark}>
      <svg className={bookmarkIconClass} width={bookmarkSizeClass.width} height={bookmarkSizeClass.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{'To bookmarks'}</span>
    </button>
  );
}
