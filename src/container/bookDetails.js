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

  const libraryData = useSelector((state) => {
    return state.libraryManagement.libraryData;
  });
  const [state, setState] = React.useState([]);
  
  useEffect(() => {
    const params = { key: props.location.state }
    dispatch(libraryManagementAction.fetchBookDetailsRequest(params));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setState(
      libraryData
    )
  }, [libraryData]);
  
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Library Management System</h1>{' '}
            <hr className="border mtl-6"></hr>
          </Col>
          <Col lg={12} md={12} className="text-hn-orange items-center justify-between">
            <div className="text-3xl"> Books Details</div>{' '}
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
                    <h5>Publisher: {!!book.volumeInfo.publisher ? book.volumeInfo.publisher : 'NA' + ' ' + book.volumeInfo.publishedDate} </h5>
                    <h5>Category: {book.volumeInfo.categories} </h5>
                    <h5>Description: {utils.limitText(!!book.volumeInfo.description ? book.volumeInfo.description : book.volumeInfo.subtitle, 100)}</h5>
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
