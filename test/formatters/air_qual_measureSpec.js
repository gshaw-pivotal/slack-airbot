var expect = require('chai').expect;

require('../../src/formatters/air_qual_measure');

describe("air quality measure", function () {
    describe("given a quality measure data point", function () {
       describe("that is less than or equal to 50", function () {
           it("returns the color code for green", function () {
              expect(determineQualityMeasureColorCode(5)).to.equal(qualMeaureColorEnum.GREEN.valueOf());
              expect(determineQualityMeasureColorCode(5)).to.equal('#009966');
           });

           it("returns the advice for green", function () {
               expect(determineQualityMeasureAdviceStatement(5)).to.equal(qualMeaureAdviceEnum.GREEN.valueOf());
           });
       });

        describe("that is between 50 and 100", function () {
            it("returns the color code for yellow", function () {
                expect(determineQualityMeasureColorCode(77)).to.equal(qualMeaureColorEnum.YELLOW.valueOf());
                expect(determineQualityMeasureColorCode(77)).to.equal('#ffde33');
            });

            it("returns the advice for yellow", function () {
                expect(determineQualityMeasureAdviceStatement(77)).to.equal(qualMeaureAdviceEnum.YELLOW.valueOf());
            });
        });

        describe("that is between 100 and 150", function () {
            it("returns the color code for orange", function () {
                expect(determineQualityMeasureColorCode(135)).to.equal(qualMeaureColorEnum.ORANGE.valueOf());
                expect(determineQualityMeasureColorCode(135)).to.equal('#ff9933');
            });

            it("returns the advice for orange", function () {
                expect(determineQualityMeasureAdviceStatement(135)).to.equal(qualMeaureAdviceEnum.ORANGE.valueOf());
            });
        });

        describe("that is between 150 and 200", function () {
            it("returns the color code for red", function () {
                expect(determineQualityMeasureColorCode(190)).to.equal(qualMeaureColorEnum.RED.valueOf());
                expect(determineQualityMeasureColorCode(190)).to.equal('#cc0033');
            });

            it("returns the advice for red", function () {
                expect(determineQualityMeasureAdviceStatement(190)).to.equal(qualMeaureAdviceEnum.RED.valueOf());
            });
        });

        describe("that is between 200 and 300", function () {
            it("returns the color code for purple", function () {
                expect(determineQualityMeasureColorCode(249)).to.equal(qualMeaureColorEnum.PURPLE.valueOf());
                expect(determineQualityMeasureColorCode(249)).to.equal('#660099');
            });

            it("returns the advice for purple", function () {
                expect(determineQualityMeasureAdviceStatement(249)).to.equal(qualMeaureAdviceEnum.PURPLE.valueOf());
            });
        });

        describe("that is greater than 300", function () {
            it("returns the color code for dark red", function () {
                expect(determineQualityMeasureColorCode(335)).to.equal(qualMeaureColorEnum.DARK_RED.valueOf());
                expect(determineQualityMeasureColorCode(335)).to.equal('#7e0023');
            });

            it("returns the advice for dark red", function () {
                expect(determineQualityMeasureAdviceStatement(335)).to.equal(qualMeaureAdviceEnum.DARK_RED.valueOf());
            });
        });

        describe("that is not numerical", function () {
           it("returns no color", function () {
               expect(determineQualityMeasureColorCode('N/A')).to.equal('');
           });

           it("returns no advice", function () {
               expect(determineQualityMeasureAdviceStatement('N/A')).to.equal('');
           });
        });
    });
});
