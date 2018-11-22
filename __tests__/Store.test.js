import Store from "../src/stores/Store";

//TDD for testing the store functionality

describe("Test Store", () => {
	
	
	let testStore;
 	const multiples_3 = "Fizz"
 	const multiples_5 = "Buzz"
 	const multiples_3_5 = "FizzBuzz"

 	it("Store creates 100 elements to print", () => {
		testStore = new Store();
		testStore.initialiseStore();
		expect(testStore.numbers.length).toEqual(100);
	});

	it("Store creates new Numbers", () => {
		testStore = new Store();
		testStore.addCounter(1);
		testStore.addCounter(2);
		expect(testStore.numbers.length).toEqual(2);
		expect(testStore.numbers[0].value).toEqual(1);
		expect(testStore.numbers[1].value).toEqual(2);
	});

	it("Store creates Fizz for multiples of 3", () => {
		testStore = new Store();
		testStore.addCounter(3);
		testStore.addCounter(6);
		testStore.addCounter(9);
		expect(testStore.numbers.length).toEqual(3);
		expect(testStore.numbers[0].value).toEqual(multiples_3);
		expect(testStore.numbers[1].value).toEqual(multiples_3);
		expect(testStore.numbers[1].value).toEqual(multiples_3);
	});

	it("Store creates Buzz for multiples of 5", () => {
		testStore = new Store();
		testStore.addCounter(5);
		testStore.addCounter(10);
		testStore.addCounter(15);
		expect(testStore.numbers.length).toEqual(3);
		expect(testStore.numbers[0].value).toEqual(multiples_5);
		expect(testStore.numbers[1].value).toEqual(multiples_5);
		expect(testStore.numbers[1].value).toEqual(multiples_5);
	});

	it("Store creates FizzBuzz for multiples of 3 and 5", () => {
		testStore = new Store();
		testStore.addCounter(15);
		testStore.addCounter(30);
		testStore.addCounter(45);
		expect(testStore.numbers.length).toEqual(3);
		expect(testStore.numbers[0].value).toEqual(multiples_3_5);
		expect(testStore.numbers[1].value).toEqual(multiples_3_5);
		expect(testStore.numbers[1].value).toEqual(multiples_3_5);
	});


 });