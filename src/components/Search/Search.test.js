import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import {Search} from './Search.jsx';

describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <Search>Search</Search>
    );
    expect(toJson(component)).toMatchSnapshot();
    // 
    // component.find('[name="toggle-preview"]').simulate('click');
    // expect(toJson(component)).toMatchSnapshot();
  });
});
