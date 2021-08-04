/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Foooter has 3 anchors ', () => {
    expect(footer.find('a')).toHaveLength(3);
  });
});
