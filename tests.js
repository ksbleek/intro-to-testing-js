// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function()  {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed with sayHello("Jane")', function(){
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when executed with sayHello("Alex")', function(){
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when executed with sayHello("Pat")', function(){
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it('should return "Hello, world!" if undefined', function(){
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, world!" if undefined', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, world!" if undefined', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });

})

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it("returns true when the number is 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("returns false when the number is not 5", function() {
        expect(isFive(4)).toBe(false);
    });
    it("returns false when the argument is not a number", function() {
        expect(isFive("5")).toBe(false);
    });
})

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it("returns true for even numbers", function() {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven("8")).toBe(true);
    });
    it("returns false for odd numbers", function() {
        expect(isEven(1)).toBe(false);
        expect(isEven(3)).toBe(false);
    });
    it("returns false for non-numeric strings", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("returns false when called with Infinity", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("returns false when called with a Boolean", function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it("returns false when called without an argument", function() {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a Boolean', function () {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("A")).toBe(true);
        expect(isVowel("y")).toBe(false);
        expect(isVowel(4)).toBe(false);
    });
    it('returns false when called with a Boolean', function () {
        expect(isVowel("true")).toBe(false);
        expect(isVowel("false")).toBe(false);
    });
    it('returns false when called with a string of more than one character', function () {
        expect(isVowel("banana")).toBe(false);
        expect(isVowel("taco")).toBe(false);
    });
    it('returns false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
})
describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('Adding 2 and 3 equals 5', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('Adding -3 and -9 equals -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('Adding "5" and 6 equals 11', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('Adding "-4" and "10" equals "6"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('Adding "banana" and "split" equals NaN', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('Adding 2 and "apples" equals NaN', function () {
        expect(add(2, "apples")).toBe(NaN);
    });
    it('Giving no argument', function () {
        expect(add()).toBe(NaN);
    });
})
