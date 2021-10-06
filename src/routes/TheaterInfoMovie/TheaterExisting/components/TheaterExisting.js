import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Pagination } from 'antd';
import PageviewIcon from '@material-ui/icons/Pageview';
import '../assets/TheaterExisting.scss'

export default function TheaterExisting({ movieExisting, getTotalCount }) {
  const history = useHistory()

  const [pageFormat, setPageFormat] = useState('')

  const changePage = (soTrang, soPhanTuTrenTrang) => {
    const start = (soTrang - 1) * soPhanTuTrenTrang
    const end = soTrang * soPhanTuTrenTrang

    setPageFormat(pageFormat.slice(start, end))
    getTotalCount(soTrang, soPhanTuTrenTrang)
  }

  return (
    <div id="phimChieuRap" className="container mt-3">
      <h1 className="existing-h1">Phim Chiếu Rạp</h1>
      <hr className="border-hr" />
      <div className="format d-flex">
        {
          movieExisting.map((item, index) => (
            <div className="format__film mr-3" key={index}>
              <img src={item.hinhAnh} alt={item.tenPhim} className="format__img" />
              <div>
                <p className="format__tenPhim" title={item.tenPhim}>{item.tenPhim}</p>
              </div>
              <button
                className="format__button"
                onClick={() => { history.push(`/${item.maPhim}/chiTietPhim`) }}><PageviewIcon />Chi Tiết</button>
            </div>
          ))
        }
      </div>
      <hr className="border-hr" />
      <Pagination
        defaultPageSize={10}
        defaultCurrent={1}
        total={59}
        showSizeChanger={true}
        pageSizeOptions={[10, 20, 30]}
        onChange={changePage}
      />
    </div>
  )
}