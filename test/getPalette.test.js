var getPalette = require("../lib/getPalette");
var expect = require("chai").expect;

var fs = require("fs");


describe("getPalette", function() {
	it.skip("should return an array with 3 items by default with node and chai", function() {

		var palette = getPalette();
		assert.equal(palette.length, 3, "did not return 3 items");
		assert(Array.isArray(palette), "did not return an array");

	});


	it("should return an array with 3 items with chai method", function() {

		var palette = getPalette();
		// palette.should.be.an("array").with.length(3);
		expect(palette).to.be.an("array").with.length(3);

	});

	it("should throw an error if the result if not an array", function(done) {
		var isArray = function() {
			throw new ReferenceError('this is not an array');
		}
		// should.Throw(getPalette, /is not an array/);
		expect(isArray).to.throw(/is not an array/);
		done();
	});

});