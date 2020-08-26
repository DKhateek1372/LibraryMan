/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';
import { libraryManagementAction } from '../store/home/actions';
import utils from '../utils/index';
import '../styles/index.css';

const bookDetails = (props) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => {
    return state;
  });

  const booksData = useSelector((state) => {
    return state.libraryManagement.libraryData;
  });

  const libraryData = useSelector((state) => {
    return state.libraryManagement.bookDetails;
  });
  const [state, setState] = React.useState([]);

  const getBooks = React.useCallback(
    () => dispatch(libraryManagementAction.fetchBooksDataRequest()),
    [dispatch]
  );

  React.useEffect(() => {
    getBooks();
  }, [getBooks]);
  
  const dispatchMyAction = React.useCallback(
    (params) => dispatch(libraryManagementAction.fetchBookDetailsRequest(params)),
    [dispatch]
  );

  React.useEffect(() => {
    const params = { key: props.location.state , booksData: booksData};
    dispatchMyAction(params);
  }, [booksData, dispatchMyAction, props.location.state]);

  useEffect(() => {
    setState(
      libraryData
    )
  }, [libraryData]);

  const myCart = () => {
    props.history.push({
      pathname: '/my-book-list',
    })
  };

  const myLibrary = () =>{
    props.history.push({
      pathname: '/',
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Library Management System</h1>{' '}
            <div className="flex flex-row">
              <div className="myCart items-start width50 ml-1">
                <button  className="btn_Button btnPreview" onClick={() => myLibrary()}>Go To Library</button>{' '}
              </div>
              <div className="myCart items-end width50 mr-1">
                <button  className="btn_Button btn-cart" onClick={() => myCart()}> My Book Cart</button>{' '}
              </div>
            </div>
            <hr className="border mtl-6"></hr>
            <div className="text-3xl items-center">Books Detail</div>{' '}
          </Col>
          <Col lg={12} md={12} className="text-hn-orange items-center justify-between">
           
            {
              !!state &&
              Array.isArray(state) &&
              state.length > 0 &&
              state.map((book, index) => (
                <Col lg={4} md={4} key={index} className="BookShell">
                  <Col lg={6} md={6} className="width50">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                  </Col>
                  <Col lg={6} md={6} className="width50">
                    <h4>BookNumber: {book.key} </h4>
                    <h4>Name: {book.volumeInfo.title} </h4>
                    <h5>Category: {book.volumeInfo.categories} </h5>
                    <h5>Average Rating: {book.volumeInfo.averageRating} </h5>
                    <h5>Publisher: {!!book.volumeInfo.publisher ? book.volumeInfo.publisher : 'NA' + ' ' + book.volumeInfo.publishedDate} </h5>
                    <h5> saleability: { book.saleInfo.saleability=== "NOT_FOR_SALE" ? book.saleInfo.saleability : book.saleInfo.retailPrice.amount + ' '+book.saleInfo.retailPrice.currencyCode } </h5>
                    <h5>Description: {book.volumeInfo.description}</h5>
                  </Col>
                </Col>
              )
              )
            }
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default bookDetails;
