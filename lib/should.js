var getPalette = require("../lib/getPalette");
assert = require("chai").should();

var fs = require("fs");

var configFile = precess.cwd() + "/config.json";

function writeConfig(config, callback) {
	fs.writeFile(configFile, JSON.stringify(config), callback);
}

describe("getPalette", function() {
	var config = {};

	before (function (done) {

		fs.readFile(configFile, function(err, contents) {
			config = JSON.parse(contents.toString());
			done();
		});

	});

	afterEach(function (done) {
		writeConfig(config, done);
	});

	it("should throw an error if the result is not an array", function(done) {

		writeConfig({ palette: "string" }, function(err) {

			assert.throws(getPalette, /is not an array/);
			done();

		});

	});

	it.only("should return an array with 3 items by default", function() {

		var palette = getPalette();
		assert.isArray(palette, "did not return an array");
		assert.lengthOf(palette, 3, "did not return 3 items");
	});

});