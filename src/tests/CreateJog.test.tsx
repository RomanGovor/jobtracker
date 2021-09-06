import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CreateJog from '../pages/CreateJog/CreateJog';

test('CreateJog', () => {
  const component = renderer.create(<CreateJog isSuccessSendJog={false} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

configure({ adapter: new Adapter() });

test('CreateJog changes the text after click', () => {
  const inputs = shallow(<CreateJog isSuccessSendJog={false} />);

  expect(inputs.text()).toEqual('0');

  expect(inputs.find('input').hasClass('create-jog__form-field__input')).toEqual(true);
});
