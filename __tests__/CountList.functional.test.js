import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import React from "react"
import Adapter from 'enzyme-adapter-react-16';

import CountList from "../src/components/CountList"
import Store from "../src/stores/Store";

//TDD for testing the functional aspects of CountList

Enzyme.configure({ adapter: new Adapter() });

describe("CountList.functional", () => {

	it("Create list with 2 numbers", () => {
		const store = new Store();

		store.addCounter(1);
		store.addCounter(2);
		const wrapper = shallow(<CountList store={store} />);

		expect(wrapper.find("li").length).toEqual(2);
		expect(wrapper.find("li span").at(0).text()).toBe("1");
		expect(wrapper.find("li span").at(1).text()).toBe("2");
	});

	it("Create list with Fizz numbers", () => {
		const store = new Store();

		store.addCounter(3);
		store.addCounter(6);
		store.addCounter(9);

		const wrapper = shallow(<CountList store={store} />)

		expect(wrapper.find("li").length).toEqual(3)
		expect(wrapper.find("li span").at(0).text()).toBe("Fizz")
		expect(wrapper.find("li span").at(1).text()).toBe("Fizz")
		expect(wrapper.find("li span").at(2).text()).toBe("Fizz")
	});

	it("Create list with Buzz numbers", () => {
	const store = new Store();

	store.addCounter(5)
	store.addCounter(10)
	store.addCounter(50)

	const wrapper = shallow(<CountList store={store} />)

	expect(wrapper.find("li").length).toEqual(3)
	expect(wrapper.find("li span").at(0).text()).toBe("Buzz")
	expect(wrapper.find("li span").at(1).text()).toBe("Buzz")
	expect(wrapper.find("li span").at(2).text()).toBe("Buzz")
	});

	it("Create list with FizzBuzz numbers", () => {
	const store = new Store();

	store.addCounter(15)
	store.addCounter(30)
	store.addCounter(90)

	const wrapper = shallow(<CountList store={store} />)

	expect(wrapper.find("li").length).toEqual(3)
	expect(wrapper.find("li span").at(0).text()).toBe("FizzBuzz")
	expect(wrapper.find("li span").at(1).text()).toBe("FizzBuzz")
	expect(wrapper.find("li span").at(2).text()).toBe("FizzBuzz")
	});


});