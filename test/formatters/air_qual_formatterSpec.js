var expect = require('chai').expect;

require('../../src/formatters/air_qual_formatter');

describe("air quality formatter", function () {

    describe("given an air quality response with no missing data points", function () {
       var airQualServiceData = {
           "status":"ok",
           "data":{
               "aqi":47,
               "idx":5115,
               "attributions":[
                   {
                       "url":"http://www.qld.gov.au/environment/pollution/monitoring/air/",
                       "name":"Air quality | Environment, land and water | Queensland Government"
                   }
               ],
               "city":{
                   "geo":[
                       -27.4625808,
                       153.0243736
                   ],
                   "name":"Brisbane CBD",
                   "url":"http://aqicn.org/city/australia/queensland/brisbane-cbd/"
               },
               "dominentpol":"pm25",
               "iaqi":{
                   "co":{
                       "v":0.1
                   },
                   "h":{
                       "v":100
                   },
                   "no2":{
                       "v":0.1
                   },
                   "o3":{
                       "v":0.1
                   },
                   "p":{
                       "v":1028.98
                   },
                   "pm10":{
                       "v":8
                   },
                   "pm25":{
                       "v":47
                   },
                   "so2":{
                       "v":0.1
                   },
                   "t":{
                       "v":15.2
                   },
                   "w":{
                       "v":0.1
                   },
                   "wd":{
                       "v":212
                   }
               },
               "time":{
                   "s":"2017-07-10 22:00:00",
                   "tz":"+10:00",
                   "v":1499724000
               }
           }
       };

       var location = 'brisbane';
       var expectation;

       describe("for the plain text response", function () {

           it("returns an air quality report header that indicates the location requested by the user", function () {
               expectation = 'The current air quality in ' + location + ' is:\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains the co (Carbon Monoxyde) level", function () {
               expectation = 'The current Carbon Monoxyde (CO) level is: *' + airQualServiceData.data.iaqi.co.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains no2 (Nitrogen Dioxide) level", function () {
               expectation = 'The current Nitrogen Dioxide (NO2) level is: *' + airQualServiceData.data.iaqi.no2.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains so2 (Sulphur Dioxide) level", function () {
               expectation = 'The current Sulphur Dioxide (SO2) level is: *' + airQualServiceData.data.iaqi.so2.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains o3 (Ozone) level", function () {
               expectation = 'The current Ozone (O3) level is: *' + airQualServiceData.data.iaqi.o3.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains pm25 (PM 2.5) level", function () {
               expectation = 'The current Particulate Matter 2.5μm (PM25) level is: *' + airQualServiceData.data.iaqi.pm25.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains pm10 (PM 10) level", function () {
               expectation = 'The current Particulate Matter 10μm (PM10) level is: *' + airQualServiceData.data.iaqi.pm10.v + '*\n';

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });

           it("returns an air quality report that contains the time the data was generated at as a report footer", function () {
               expectation = 'Report generated at: ' + airQualServiceData.data.time.s;

               expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
           });
       });

       describe("for the rich response", function () {

           it("returns an air quality report header that indicates the location requested by the user", function () {
               expectation = 'The current air quality in ' + location + ' is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[0].pretext).to.include(expectation);
           });

           it("returns an air quality report that contains the co (Carbon Monoxyde) level", function () {
               expectation = 'The current Carbon Monoxyde (CO) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[1].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[1].fields[0].title).to.include(airQualServiceData.data.iaqi.co.v);
           });

           it("returns an air quality report that contains the no2 (Nitrogen Dioxide) level", function () {
               expectation = 'The current Nitrogen Dioxide (NO2) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[2].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[2].fields[0].title).to.include(airQualServiceData.data.iaqi.no2.v);
           });

           it("returns an air quality report that contains the so2 (Sulphur Dioxide) level", function () {
               expectation = 'The current Sulphur Dioxide (SO2) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[3].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[3].fields[0].title).to.include(airQualServiceData.data.iaqi.so2.v);
           });

           it("returns an air quality report that contains the o3 (Ozone) level", function () {
               expectation = 'The current Ozone (O3) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[4].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[4].fields[0].title).to.include(airQualServiceData.data.iaqi.o3.v);
           });

           it("returns an air quality report that contains the pm25 (PM 2.5) level", function () {
               expectation = 'The current Particulate Matter 2.5μm (PM25) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[5].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[5].fields[0].title).to.include(airQualServiceData.data.iaqi.pm25.v);
           });

           it("returns an air quality report that contains the pm10 (PM 10) level", function () {
               expectation = 'The current Particulate Matter 10μm (PM10) level is:';

               expect(formatRichAirQual(airQualServiceData, location).attachments[6].text).to.include(expectation);
               expect(formatRichAirQual(airQualServiceData, location).attachments[6].fields[0].title).to.include(airQualServiceData.data.iaqi.pm10.v);
           });

           it("returns an air quality report that contains the time the data was generated at as a report footer", function () {
               expectation = 'Report generated at: ' + airQualServiceData.data.time.s;

               expect(formatRichAirQual(airQualServiceData, location).attachments[7].text).to.include(expectation);
           });
       });
   });

   describe("given an air quality response with a missing data point", function () {
       var airQualServiceData = {
           "status":"ok",
           "data":{
               "aqi":47,
               "idx":5115,
               "attributions":[
                   {
                       "url":"http://www.qld.gov.au/environment/pollution/monitoring/air/",
                       "name":"Air quality | Environment, land and water | Queensland Government"
                   }
               ],
               "city":{
                   "geo":[
                       -27.4625808,
                       153.0243736
                   ],
                   "name":"Brisbane CBD",
                   "url":"http://aqicn.org/city/australia/queensland/brisbane-cbd/"
               },
               "dominentpol":"pm25",
               "iaqi":{
                   "co":{
                       "v":0.1
                   },
                   "h":{
                       "v":100
                   },
                   "no2":{
                       "v":0.1
                   },
                   "o3":{
                       "v":0.1
                   },
                   "p":{
                       "v":1028.98
                   },
                   "pm25":{
                       "v":47
                   },
                   "so2":{
                       "v":0.1
                   },
                   "t":{
                       "v":15.2
                   },
                   "w":{
                       "v":0.1
                   },
                   "wd":{
                       "v":212
                   }
               },
               "time":{
                   "s":"2017-07-10 22:00:00",
                   "tz":"+10:00",
                   "v":1499724000
               }
           }
       };

       var location = 'brisbane';
       var expectation;

       describe("for the plain text response", function () {

           describe("for a data point present in the response", function () {
               it("it returns an air quality report that contains a value for that data point", function () {
                   expectation = 'The current Particulate Matter 2.5μm (PM25) level is: *' + airQualServiceData.data.iaqi.pm25.v + '*\n';

                   expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
               });
           });

           describe("for a data point not present in the response", function () {
               it("it returns an air quality report that contains a not available for that data point", function () {
                   expectation = 'The current Particulate Matter 10μm (PM10) level is: *N/A*\n';

                   expect(formatTextAirQual(airQualServiceData, location)).to.include(expectation);
               });
           });
       });

       describe("for the rich response", function () {

           describe("for a data point present in the response", function () {
               it("it returns an air quality report that contains a value for that data point", function () {
                   expectation = 'The current Particulate Matter 2.5μm (PM25) level is:';

                   expect(formatRichAirQual(airQualServiceData, location).attachments[5].text).to.include(expectation);
                   expect(formatRichAirQual(airQualServiceData, location).attachments[5].fields[0].title).to.include(airQualServiceData.data.iaqi.pm25.v);
               });
           });

           describe("for a data point not present in the response", function () {
               it("it returns an air quality report that contains a not available for that data point", function () {
                   expectation = 'The current Particulate Matter 10μm (PM10) level is:';

                   expect(formatRichAirQual(airQualServiceData, location).attachments[6].text).to.include(expectation);
                   expect(formatRichAirQual(airQualServiceData, location).attachments[6].fields[0].title).to.include('N/A');
               });
           });
       });
   });
});