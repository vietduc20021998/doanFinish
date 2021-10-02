import './App.css';
import 'antd/dist/antd.css';
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import { BrowserRouter as DuckRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './routes/Login/components/Login'
import Register from './routes/Register/components/Register'
import MainPage from './routes/Components/routers/Routers'
import TheaterDetailExistingContainer from './routes/TheaterInfoMovie/TheaterDetailExisting/containers/TheaterDetailExistingContainer'
import BookingPageContainer from './routes/BookingPage/containers/BookingPageContainer'
import AccountContainer from './routes/InforAccount/containers/AccountContainer'
import ListFilmContainer from './routes/Admin/modules/listFilm/containers/ListFilmContainer'
import CreateContainer from './routes/Admin/modules/FormatFilm/containers/CreateContainer'
import EditContainer from './routes/Admin/modules/FormatFilm/containers/EditContainer'
import AddScheduleContainer from './routes/Admin/modules/FormatFilm/containers/AddScheduleContainer'
import UsersList from './routes/Admin/modules/Users/containers/UsersListContainers'
import AddUsersContainer from './routes/Admin/modules/Users/containers/AddUsersContainer'
import EditUsersContainer from './routes/Admin/modules/Users/containers/EditUsersContainer'

import axios from 'helpers/axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const accessToken = useSelector(state => state.user.credential.accessToken)
  const maLoaiNguoiDung = useSelector(state => state.user.credential.maLoaiNguoiDung)
  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`
    }
  }, [accessToken])

  return (
    <DuckRouter>
      <Switch>
        <Route
          path='/admin'
          render={routeProps => {

            if (localStorage.getItem('access_token') && maLoaiNguoiDung === "QuanTri") {
              return (
                <>
                  <div className='text-center display-2'>Quản lý</div>
                  <Route path={`${routeProps.match.url}/listFilm`} component={ListFilmContainer} exact />
                  <Route path={`${routeProps.match.url}/listFilm/create`} component={CreateContainer} exact />
                  <Route path={`${routeProps.match.url}/:maPhim/editFilm`} component={EditContainer} exact />
                  <Route path={`${routeProps.match.url}/:maPhim/addSchedule`} component={AddScheduleContainer} exact />
                  <Route path={`${routeProps.match.url}/danhSachNguoiDung`} component={UsersList} exact />
                  <Route path={`${routeProps.match.url}/danhSachNguoiDung/themNguoiDung`} component={AddUsersContainer} exact />
                  <Route path={`${routeProps.match.url}/danhSachNguoiDung/:taiKhoan/editUsers`} component={EditUsersContainer} exact />
                  {/* <Route path={`${routeProps.match.url}/:id/edit`} component={Edit} exact /> */}
                </>
              )
            } else {
              return <Redirect to='/' />
            }
          }}
        />


        <Route
          path="/"
          render={routeProps => {
            return (
              <>
                <Header />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path="/" component={MainPage} exact />
                <Route path={`${routeProps.match.url}:maPhim/chiTietPhim`} component={TheaterDetailExistingContainer} />
                <Route path={`${routeProps.match.url}:maLichChieu/chiTietPhongVe`} component={BookingPageContainer} />
                <Route path={`${routeProps.match.url}AccountContainer`} component={AccountContainer} />
                <Footer />
              </>
            )
          }}
        />
      </Switch>
    </DuckRouter>
  );
}

export default App;
