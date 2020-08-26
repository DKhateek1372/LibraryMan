/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { libraryManagementAction } from '../store/home/actions';
import Searchbar from '../components/UiSearch/index';
import utils from '../utils/index';
import Icons from '../themes/icons';
import Images from '../themes/images';
import '../styles/index.css';
import 'antd/dist/antd.css'
import { Empty } from 'antd';

const booksList = (props) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => {
    return state.libraryManagement.loading;
  });

  const libraryData = useSelector((state) => {
    return state.libraryManagement.borrowedBooks;
  });
  const [state, setState] = React.useState([]);

  useEffect(() => {
     dispatch(libraryManagementAction.userBorrowedBooksListRequest());
    // eslint-disable-next-line
  }, []);

  const [search, setSearchState] = React.useState({
    searchText: "",
  });

  useEffect(() => {
    setState(
      libraryData && libraryData.flat()
    )
  }, [libraryData]);

  let { searchText } = search;

  const bookSearchHandler = (e) => {
    setSearchState(e.target.value);
    const text = e.target.value;
    const searchText = text.toLowerCase();
    const data =
      !!state &&
      Array.isArray(state) &&
      state.length > 0 &&
      state.filter(data =>
        data.volumeInfo.title.toLowerCase().includes(searchText) ||
        data.key.toString().includes(searchText)
      );
    searchText !== '' ? setState(data) : setState(libraryData && libraryData.items);
  }

  const getBookDetails = (key) => {
    props.history.push({
      pathname: 'bookDetails',
      state: key,
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Library Management System</h1>{' '}
            <hr className="border mtl-6"></hr>
            <Searchbar bookSearchHandler={bookSearchHandler} searchBar={searchText} />{' '}
            <div className="text-3xl items-center">My Books Cart</div>{' '}
          </Col>
          <Col lg={12} md={12} className="p-4 inFlex parent marginBooks">
         
            {
              loader ? (
                <div className="spinnerName">
                  <span className="spinner-b" />
                </div>
              ) :
                !!state &&
                  Array.isArray(state) &&
                  state.length > 0 ?
                  state.map((book, index) => (
                     <Col lg={4} md={4} key={index} className="BookShell">
                      <Col lg={6} md={6} className="width50">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                      </Col>
                      <Col lg={6} md={6} className="width50">
                        <h4>BookNumber: {book.key} </h4>
                        <h4>Name: {book.volumeInfo.title} </h4>
                        <h5>Publisher: {!!book.volumeInfo.publisher ? book.volumeInfo.publisher : 'NA' + ' ' + book.volumeInfo.publishedDate} </h5>
                        <h5>Category: {book.volumeInfo.categories} </h5>
                        <h5>Description: {utils.limitText(!!book.volumeInfo.description ? book.volumeInfo.description : book.volumeInfo.subtitle, 100)}</h5>
                        <button variant="primary" className="btnPreview" onClick={() => getBookDetails(book.key)}>Preview</button>{' '}
                      </Col>
                    </Col>
                  )
                  )
                  :
                  (
                    <Col lg={12} md={12} className="p-4 inFlex parent marginAuto" >
                    <Empty />
                    </Col>
                  )
            }
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

booksList.propTypes = {

};

export default booksList;
