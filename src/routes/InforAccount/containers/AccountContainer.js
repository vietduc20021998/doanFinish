import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import InforAccount from '../components/InforAccount'
import ChangePassword from '../components/ChangePassword'
import ListBooked from '../components/ListBooked'
import { inforAccount } from '../redux/actions'
import '../assets/InforAccount.scss'

function AccountContainer({ location }) {
  const history = useHistory()

  const dispatch = useDispatch()

  const inforCustomer = useSelector(state => state.user.credential)
  const inforUser = useSelector(state => state.inforAccountReducer.credentialInfomation)

  useEffect(() => {
    dispatch(inforAccount(inforCustomer.taiKhoan))
  }, [dispatch, inforCustomer.taiKhoan])

  const hdTabClick = useCallback(
    activeKey => {
      history.push('/AccountContainer' + activeKey)
    }, [history]
  )

  return (
    <div>
      <div className="accCon row">
        <div className="accCon__nav nav flex-column nav-pills col-lg-2" id="v-pills-tab" role="tablist" aria-orientation="vertical" activeKey={location.hash || 'InforAccount'} onChange={hdTabClick}>
          <a className="accCon__nav-link nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#InforAccount" role="tab">
            Thông tin tài khoản
          </a>
          <a className="accCon__nav-link nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#ChangePassword" role="tab" >
            Đổi mật khẩu
          </a>
          <a className="accCon__nav-link nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#ListBooked" role="tab">
            Danh sách đặt vé
          </a>
        </div>

        <div className="tab-content col-lg-10" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="InforAccount" role="tabpanel" aria-labelledby="v-pills-home-tab" >
            <InforAccount
              inforCustomer={inforCustomer}
              inforUser={inforUser}
            />
          </div>
          <div className="tab-pane fade" id="ChangePassword" role="tabpanel" aria-labelledby="v-pills-profile-tab" >
            <ChangePassword
              inforCustomer={inforCustomer}
              inforUser={inforUser}
            />
          </div>
          <div className="tab-pane fade" id="ListBooked" role="tabpanel" aria-labelledby="v-pills-messages-tab" >
            <ListBooked
              inforCustomer={inforCustomer}
              inforUser={inforUser}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AccountContainer)