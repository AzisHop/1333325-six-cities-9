import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchComments, fetchNearHotels, fetchOffer} from '../../../store/api-actions';
import {getIsHotelLoad} from '../../../store/place-reducer/selectors';
import {setIsHotelLoad} from '../../../store/place-reducer/place-reducer';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getAuth} from '../../../store/user-reducer/selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import Room from './room';

export default function LoadRoom(): JSX.Element {
  const param = useParams();
  const roomId = Number(param.id);
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(getAuth);

  useEffect(() => {
    dispatch(setIsHotelLoad(false));
    dispatch(fetchOffer(roomId));
    dispatch(fetchComments(roomId));
    dispatch(fetchNearHotels(roomId));
  }, [roomId, dispatch, userAuth]);
  const isHotelLoad = useAppSelector(getIsHotelLoad);
  if (!isHotelLoad) {
    return <LoadingScreen />;
  }

  return <Room />;
}

