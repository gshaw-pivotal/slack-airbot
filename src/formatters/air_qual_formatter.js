formatAirQual = function (airQualReport, location) {
    var reportData = airQualReport.data;

    return 'The current air quality in ' + location + ' is:\n' +
        'The current Carbon Monoxyde (CO) level is: ' + reportData.iaqi.co.v + '\n' +
        'The current Nitrogen Dioxide (NO2) level is: ' + reportData.iaqi.no2.v + '\n' +
        'The current Sulphur Dioxide (SO2) level is: ' + reportData.iaqi.so2.v + '\n' +
        'The current Ozone (O3) level is: ' + reportData.iaqi.o3.v + '\n' +
        'The current Particulate Matter 2.5μm (PM25) level is: ' + reportData.iaqi.pm25.v + '\n' +
        'The current Particulate Matter 10μm (PM10) level is: ' + reportData.iaqi.pm10.v + '\n' +
        'Report generated at: ' + reportData.time.s;
};