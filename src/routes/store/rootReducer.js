import { combineReducers } from 'redux'
import userReducer from '../Login/redux/reducers'
import logoReducer from '../theaterList/redux/reducers'
import listReducer from '../theaterList/redux/reducers'
import movieReducer from '../theaterList/redux/reducers'
import movieExistingReducer from '../TheaterInfoMovie/TheaterExisting/redux/reducers'
import movieSlick from '../TheaterInfoMovie/TheaterExisting/redux/reducers'
import movieDetailReducer from '../TheaterInfoMovie/TheaterDetailExisting/redux/reducers'
import movieScheduleReducer from '../TheaterInfoMovie/TheaterDetailExisting/redux/reducers'
import bookingPageReducer from '../BookingPage/redux/reducers'
import inforAccountReducer from '../InforAccount/redux/reducers'
import inforListFilmReducer from '../Admin/redux/reducers'
import inforCreateScheduleReducer from '../Admin/redux/reducers'
import inforUsersListReducer from '../Admin/modules/Users/redux/reducers'

export default combineReducers({
  //user
  user: userReducer,
  logoReducer: logoReducer,
  listReducer: listReducer,
  movieReducer: movieReducer,
  movieExistingReducer: movieExistingReducer,
  movieSlick: movieSlick,
  movieDetailReducer: movieDetailReducer,
  movieScheduleReducer: movieScheduleReducer,
  bookingPageReducer: bookingPageReducer,
  inforAccountReducer: inforAccountReducer,
  //admin
  inforListFilmReducer: inforListFilmReducer,
  inforCreateScheduleReducer: inforCreateScheduleReducer,
  inforUsersListReducer: inforUsersListReducer,
  
})
