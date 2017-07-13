formatTextAirQual = function (airQualReport, location) {
    var reportData = airQualReport.data;

    return 'The current air quality in ' + location + ' is:\n' +
        'The current Carbon Monoxyde (CO) level is: *' + prepDataPointValue(reportData.iaqi.co) + '*\n' +
        'The current Nitrogen Dioxide (NO2) level is: *' + prepDataPointValue(reportData.iaqi.no2) + '*\n' +
        'The current Sulphur Dioxide (SO2) level is: *' + prepDataPointValue(reportData.iaqi.so2) + '*\n' +
        'The current Ozone (O3) level is: *' + prepDataPointValue(reportData.iaqi.o3) + '*\n' +
        'The current Particulate Matter 2.5μm (PM25) level is: *' + prepDataPointValue(reportData.iaqi.pm25) + '*\n' +
        'The current Particulate Matter 10μm (PM10) level is: *' + prepDataPointValue(reportData.iaqi.pm10) + '*\n' +
        'Report generated at: ' + reportData.time.s;
};

formatRichAirQual = function (airQualReport, location) {
    var reportData = airQualReport.data;

    return 'The current air quality in ' + location + ' is:\n' +
        'The current Carbon Monoxyde (CO) level is: *' + prepDataPointValue(reportData.iaqi.co) + '*\n' +
        'The current Nitrogen Dioxide (NO2) level is: *' + prepDataPointValue(reportData.iaqi.no2) + '*\n' +
        'The current Sulphur Dioxide (SO2) level is: *' + prepDataPointValue(reportData.iaqi.so2) + '*\n' +
        'The current Ozone (O3) level is: *' + prepDataPointValue(reportData.iaqi.o3) + '*\n' +
        'The current Particulate Matter 2.5μm (PM25) level is: *' + prepDataPointValue(reportData.iaqi.pm25) + '*\n' +
        'The current Particulate Matter 10μm (PM10) level is: *' + prepDataPointValue(reportData.iaqi.pm10) + '*\n' +
        'Report generated at: ' + reportData.time.s;
};

prepDataPointValue = function (dataPoint) {
    if (dataPoint != null) {
        return dataPoint.v;
    }
    else {
        return 'N/A';
    }
};