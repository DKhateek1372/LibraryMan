import React from 'react';
import { listItemData } from '../../data-for-testing';
import books from './books';
import { shallow } from 'enzyme';
const {key,title, publisher, categories, description } = listItemData;

it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const component = shallow(
    <books
      publisher={publisher}
      title={title}
      key={key}
      categories={categories}
      description={description}
    />,
  );
});
