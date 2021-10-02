import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SettingsIcon from '@material-ui/icons/Settings';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import '../../../assets/listFilm.scss';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles2 = makeStyles({
  table: {
    minWidth: 700,
  },
  imgTable: {
    width: 100,
  },
  maPhimTable: {
    width: 100,
  },
  tenPhimTable: {
    width: 300,
  }
});

export default function ListFilm({ listFilm, onDeleteMovie, searchMovie }) {
  const history = useHistory()

  const toCreate = () => {
    history.push('/admin/listFilm/create')
  }

  const classes = useStyles2();

  return (
    <div className="listFilm__format">
      <h1  className="text-center">phim</h1>
      <button className="btn btn-outline-dark" onClick={toCreate}>Thêm phim</button><br/>
      <input type="text" placeholder="Nhập phim cần tìm" onChange={e => searchMovie(e.target.value)} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Mã phim</StyledTableCell>
              <StyledTableCell align="left">Tên phim</StyledTableCell>
              <StyledTableCell align="left">Ngày khởi chiếu</StyledTableCell>
              <StyledTableCell align="right">Hình ảnh</StyledTableCell>
              <StyledTableCell align="right"><SettingsIcon /></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(listFilm, (film, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell className={classes.maPhimTable} component="th" scope="row">
                  {film.maPhim}
                </StyledTableCell>
                <StyledTableCell className={classes.tenPhimTable} align="left">{film.tenPhim}</StyledTableCell>
                <StyledTableCell align="left">{moment(film.ngayKhoiChieu).format('DD/MM')} - {moment(film.ngayKhoiChieu).format('hh:mm')}</StyledTableCell>
                <StyledTableCell className={classes.imgTable} align="right">
                  <div className="list__film_img">
                    <img src={film.hinhAnh} alt={film.tenPhim} />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={() => { history.push(`/admin/${film.maPhim}/editFilm`) }}><EditIcon /></button>
                  <button onClick={() => { onDeleteMovie(film.maPhim) }}><DeleteSweepIcon /></button>
                  <button onClick={() => { history.push(`/admin/${film.maPhim}/addSchedule`) }}><PlaylistAddIcon /></button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
