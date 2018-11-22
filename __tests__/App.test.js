import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/App';
import Store from "../src/stores/Store";
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//TDD for testing the App rendering and App title component

let testStore = new Store();
testStore.initialiseStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={testStore}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component testing', function() {
  it('renders title message', function() {
    const wrapper = shallow(<App />); 
    const welcome = <h1 align="center" className='App-title'>Fizz Buzz App</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});