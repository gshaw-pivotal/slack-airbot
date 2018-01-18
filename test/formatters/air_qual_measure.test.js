require('../../src/formatters/air_qual_measure');

describe("air quality measure", function () {
    describe("given a quality measure data point", function () {
       describe("that is less than or equal to 50", function () {
           it("returns the color code for green", function () {
              expect(determineQualityMeasureColorCode(5)).toBe(qualMeaureColorEnum.GREEN.valueOf());
           });

           it("returns the advice for green", function () {
               expect(determineQualityMeasureAdviceStatement(5)).toBe(qualMeaureAdviceEnum.GREEN.valueOf());
           });
       });

        describe("that is between 50 and 100", function () {
            it("returns the color code for yellow", function () {
                expect(determineQualityMeasureColorCode(77)).toBe(qualMeaureColorEnum.YELLOW.valueOf());
            });

            it("returns the advice for yellow", function () {
                expect(determineQualityMeasureAdviceStatement(77)).toBe(qualMeaureAdviceEnum.YELLOW.valueOf());
            });
        });

        describe("that is between 100 and 150", function () {
            it("returns the color code for orange", function () {
                expect(determineQualityMeasureColorCode(135)).toBe(qualMeaureColorEnum.ORANGE.valueOf());
            });

            it("returns the advice for orange", function () {
                expect(determineQualityMeasureAdviceStatement(135)).toBe(qualMeaureAdviceEnum.ORANGE.valueOf());
            });
        });

        describe("that is between 150 and 200", function () {
            it("returns the color code for red", function () {
                expect(determineQualityMeasureColorCode(190)).toBe(qualMeaureColorEnum.RED.valueOf());
            });

            it("returns the advice for red", function () {
                expect(determineQualityMeasureAdviceStatement(190)).toBe(qualMeaureAdviceEnum.RED.valueOf());
            });
        });

        describe("that is between 200 and 300", function () {
            it("returns the color code for purple", function () {
                expect(determineQualityMeasureColorCode(249)).toBe(qualMeaureColorEnum.PURPLE.valueOf());
            });

            it("returns the advice for purple", function () {
                expect(determineQualityMeasureAdviceStatement(249)).toBe(qualMeaureAdviceEnum.PURPLE.valueOf());
            });
        });

        describe("that is greater than 300", function () {
            it("returns the color code for dark red", function () {
                expect(determineQualityMeasureColorCode(335)).toBe(qualMeaureColorEnum.DARK_RED.valueOf());
            });

            it("returns the advice for dark red", function () {
                expect(determineQualityMeasureAdviceStatement(335)).toBe(qualMeaureAdviceEnum.DARK_RED.valueOf());
            });
        });

        describe("that is not numerical", function () {
           it("returns no color", function () {
               expect(determineQualityMeasureColorCode('N/A')).toBe('');
           });

           it("returns no advice", function () {
               expect(determineQualityMeasureAdviceStatement('N/A')).toBe('');
           });
        });
    });
});
