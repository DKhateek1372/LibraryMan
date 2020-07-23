import React from 'react';
import { listItemData } from '../../data-for-testing';
import hackerNews from './hackerNews';
import { shallow } from 'enzyme';
const { author, hits, score, url, title, objectID, type, Comments } = listItemData;

it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const component = shallow(
    <hackerNews
      author={author}
      children={hits}
      points={score}
      url={url}
      title={title}
      id={objectID}
      type={type}
      Comments={Comments}
    />,
  );
});
