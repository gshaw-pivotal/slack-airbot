require('./air_qual_measure');

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

    return {
        attachments:[
            {
                pretext: 'The current air quality in ' + location + ' is:'
            },
            buildQualityMeasurementAttachment('The current Carbon Monoxyde (CO) level is:', prepDataPointValue(reportData.iaqi.co)),
            buildQualityMeasurementAttachment('The current Nitrogen Dioxide (NO2) level is:', prepDataPointValue(reportData.iaqi.no2)),
            buildQualityMeasurementAttachment('The current Sulphur Dioxide (SO2) level is:', prepDataPointValue(reportData.iaqi.so2)),
            buildQualityMeasurementAttachment('The current Ozone (O3) level is:', prepDataPointValue(reportData.iaqi.o3)),
            buildQualityMeasurementAttachment('The current Particulate Matter 2.5μm (PM25) level is:', prepDataPointValue(reportData.iaqi.pm25)),
            buildQualityMeasurementAttachment('The current Particulate Matter 10μm (PM10) level is:', prepDataPointValue(reportData.iaqi.pm10)),
            buildTimestampAttachment(reportData.time.s)
        ]
    };
};

buildQualityMeasurementAttachment = function (measureText, dataPoint) {
    return {
        fallback: measureText + ' ' + dataPoint,
        color: determineQualityMeasureColorCode(dataPoint),
        text: measureText,
        fields: [
            {
                title: dataPoint + ' - ' + determineQualityMeasureAdviceStatement(dataPoint)
            }
        ]
    };
};

buildTimestampAttachment = function (reportTimeStamp) {
    return {
        fallback: 'Report generated at: ' + reportTimeStamp,
        text: 'Report generated at: ' + reportTimeStamp
    };
};

prepDataPointValue = function (dataPoint) {
    if (dataPoint != null) {
        return dataPoint.v;
    }
    else {
        return 'N/A';
    }
};