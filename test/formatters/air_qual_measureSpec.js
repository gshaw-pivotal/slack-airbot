var expect = require('chai').expect;

require('../../src/formatters/air_qual_measure');

describe("air quality measure", function () {
    describe("given a quality measure data point", function () {
       describe("that is less than or equal to 50", function () {
           it("returns the color code for green", function () {
              expect(determineQualityMeasureColorCode(5)).to.equal(qualMeaureColorEnum.GREEN.valueOf());
              expect(determineQualityMeasureColorCode(5)).to.equal('#009966');
           });
       });

        describe("that is between 50 and 100", function () {
            it("returns the color code for yellow", function () {
                expect(determineQualityMeasureColorCode(77)).to.equal(qualMeaureColorEnum.YELLOW.valueOf());
                expect(determineQualityMeasureColorCode(77)).to.equal('#ffde33');
            });
        });

        describe("that is between 100 and 150", function () {
            it("returns the color code for orange", function () {
                expect(determineQualityMeasureColorCode(135)).to.equal(qualMeaureColorEnum.ORANGE.valueOf());
                expect(determineQualityMeasureColorCode(135)).to.equal('#ff9933');
            });
        });

        describe("that is between 150 and 200", function () {
            it("returns the color code for red", function () {
                expect(determineQualityMeasureColorCode(190)).to.equal(qualMeaureColorEnum.RED.valueOf());
                expect(determineQualityMeasureColorCode(190)).to.equal('#cc0033');
            });
        });

        describe("that is between 200 and 300", function () {
            it("returns the color code for purple", function () {
                expect(determineQualityMeasureColorCode(249)).to.equal(qualMeaureColorEnum.PURPLE.valueOf());
                expect(determineQualityMeasureColorCode(249)).to.equal('#660099');
            });
        });

        describe("that is greater than 300", function () {
            it("returns the color code for dark red", function () {
                expect(determineQualityMeasureColorCode(335)).to.equal(qualMeaureColorEnum.DARK_RED.valueOf());
                expect(determineQualityMeasureColorCode(335)).to.equal('#7e0023');
            });
        });

        describe("that is not numerical", function () {
           it("returns no color", function () {
               expect(determineQualityMeasureColorCode('N/A')).to.equal('');
           });
        });
    });
});
