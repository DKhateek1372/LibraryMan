/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataRequest, updateVoteCountRequest } from '../store/home/actions';
import { Container, Col, Row } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label , ResponsiveContainer} from 'recharts';
import Icons from '../themes/icons';
import Images from '../themes/images';
import '../styles/index.css';

const hackerNews = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);

  let hackerNewsData = useSelector((state) => {
    return state.hackerNews.hackerNewsData;
  });

  let loader = useSelector((state) => {
    return state.hackerNews.loading;
  });

  let hackerNewsGraphData = useSelector((state) => {
    return state.hackerNews.hackerNewsGraphData;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const indexOfLastTodo = pageNumber * dataPerPage;
    const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
    !!hackerNewsData &&
      hackerNewsData.hits &&
      hackerNewsData.hits.length > 0 &&
      hackerNewsData.hits.slice(indexOfFirstTodo, indexOfLastTodo);
  }, [dataPerPage, hackerNewsData, pageNumber]);

  const handleScroll = () => {
    window.scrollTo(0, 400);
  };

  const params = { id: pageNumber };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(fetchDataRequest(params));
    // eslint-disable-next-line
  }, []);

  const voteCount = (index) => {
    hackerNewsData.hits[index].points = hackerNewsData.hits[index].points + 1;
    const params = { hackerNewsData: hackerNewsData, key: index };
    dispatch(updateVoteCountRequest(params));
  };

  const GoToPrevious = () => {
    setNextActive(false);
    setPrevActive(true);
    setPageNumber(pageNumber - 1);
    setDataPerPage(10);
    const target = pageNumber <= 0 ? 1 : `${pageNumber}`;
    props.history.push({
      pathname: target,
    });
    const params = { id: target };
    dispatch(fetchDataRequest(params));
  };

  const GoToNext = () => {
    setPrevActive(false);
    setNextActive(true);
    setPageNumber(pageNumber + 1);
    setDataPerPage(10);
    const target = `${pageNumber}`;
    props.history.push({
      pathname: target,
    });
    const params = { id: target };
    dispatch(fetchDataRequest(params));
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="p-4 text-hn-orange flex items-center justify-between">
            <h1 className="text-3xl">Hacker News</h1>{' '}
            <div className="hackerMenu">
              <h3 className="text-xl" onClick={() => handleScroll()}>
                Chart
              </h3>
              <h3 className="text-xl">
                About Me
              </h3>
            </div>
          </Col>
          <Col lg={12} md={12} className="flex pt-0">
            <Col lg={6} md={6} className="totalPages">
              Total Pages: {hackerNewsData.nbPages}
            </Col>
            <Col lg={6} className="prevnext-right">
              <span
                className={`mr-2  ${prevActive ? 'opacity-25' : 'opacity-1'}`}
                onClick={() => GoToPrevious()}
              >
                Previous
              </span>
              <span>|</span>
              <span
                className={`mr-2  ${nextActive ? 'opacity-25' : 'opacity-1'}`}
                onClick={() => GoToNext()}
              >
                Next
              </span>
            </Col>
          </Col>
          <Col>
            <table responsive="xl md sm lg">
              <thead className="p-4  news-grid-header bg-hn-orange text-white mt-6">
                <tr>
                  <th>Comments</th>
                  <th>Vote Count</th>
                  <th>Up Vote</th>
                  <th>News Details</th>
                </tr>
              </thead>
              <tbody className="p-4  news-grid-header mt-6">
                {loader ? (
                  <tr className="spinnerName">
                    <td className="spinner-b" />
                  </tr>
                ) : !!hackerNewsData && !!hackerNewsData.hits && hackerNewsData.hits.length > 0 ? (
                  hackerNewsData.hits.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.num_comments}</td>
                        <td>{item.points}</td>
                        <td onClick={() => voteCount(index)}>
                          <img alt="upVote" src={Icons.vote} width="20px" height="20px" />
                        </td>
                        <td>
                          {`${item._highlightResult.title.value
                            .replace(/<\s*br[^>]?>/, '\n')
                            .replace(/(<([^>]+)>)/g, '')}
                                ${item.url}
                                ${'by '+ item._highlightResult.author.value}`}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                      <tr className="spinnerName">
                        <td>
                          <img src={Images.NoData} alt="nodata" className="NoDataImage" />
                        </td>
                      </tr>
                    )}
              </tbody>
            </table>
          </Col>
          <Col lg={12} md={12} className="flex pb-0">
            <Col lg={6} md={6} className="totalPages">
              Total Pages: {
                hackerNewsData.nbPages
              }
            </Col>
            <Col lg={6} className="prevnext-right">
              <span
                className={`mr-2  ${prevActive ? 'opacity-25' : 'opacity-1'}`}
                onClick={() => GoToPrevious()}
              >
                Previous
              </span>
              <span>|</span>
              <span
                className={`mr-2  ${nextActive ? 'opacity-25' : 'opacity-1'}`}
                onClick={() => GoToNext()}
              >
                Next
              </span>
            </Col>
          </Col>
        </Col>
      </Row>
      <hr className="border mtl-6"></hr>
      <Row>
        <Col className="p-4">
          <h1 className="text-hn-orange">Chart</h1>
        </Col>
        <Col lg={12}>
        {/* <ResponsiveContainer width={700} height="80%"> */}
        <LineChart
            width={1200}
            height={300}
            data={hackerNewsGraphData.length > 0 && hackerNewsGraphData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" margin={{ top: 5 }}>
              <Label value="ID" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'votes', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </Col>
      </Row>
    </Container>
  );
};


hackerNews.propTypes = {
  author: PropTypes.string,
  children: PropTypes.array,
  points: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
  Comments: PropTypes.number,
  hackerNewsGraphData: PropTypes.array,
  hackerNewsData: PropTypes.array
};

export default hackerNews;
