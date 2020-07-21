import React from 'react';
import { listItemData } from '../../data-for-testing';
import { shallow } from 'enzyme';
import hackerNews from './hackerNews';
const { author, children, score, url, title, objectID, type, Comments } = listItemData;

it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const component = shallow(
    <hackerNews
      author={author}
      children={children}
      points={score}
      url={url}
      title={title}
      id={objectID}
      type={type}
      Comments={Comments}
    />,
  );
});
