qualMeaureColorEnum = {
    GREEN: '#009966',
    YELLOW: '#ffde33',
    ORANGE: '#ff9933',
    RED: '#cc0033',
    PURPLE: '#660099',
    DARK_RED: '#7e0023'
};

qualMeaureAdviceEnum = {
    GREEN: 'Good',
    YELLOW: 'Moderate',
    ORANGE: 'Unhealthy for Sensitive Groups',
    RED: 'Unhealthy',
    PURPLE: 'Very Unhealthy',
    DARK_RED: 'Hazardous'
};

determineQualityMeasureColorCode = function (dataPoint) {
    switch (true) {
        case (dataPoint <= 50):
            return qualMeaureColorEnum.GREEN;
            break;
        case (50 < dataPoint && dataPoint <= 100):
            return qualMeaureColorEnum.YELLOW;
            break;
        case (100 < dataPoint && dataPoint <= 150):
            return qualMeaureColorEnum.ORANGE;
            break;
        case (150 < dataPoint && dataPoint <= 200):
            return qualMeaureColorEnum.RED;
            break;
        case (200 < dataPoint && dataPoint <= 300):
            return qualMeaureColorEnum.PURPLE;
            break;
        case (300 < dataPoint):
            return qualMeaureColorEnum.DARK_RED;
            break;
        default:
            return '';
            break;
    }
};

determineQualityMeasureAdviceStatement = function (dataPoint) {
    switch (true) {
        case (dataPoint <= 50):
            return qualMeaureAdviceEnum.GREEN;
            break;
        case (50 < dataPoint && dataPoint <= 100):
            return qualMeaureAdviceEnum.YELLOW;
            break;
        case (100 < dataPoint && dataPoint <= 150):
            return qualMeaureAdviceEnum.ORANGE;
            break;
        case (150 < dataPoint && dataPoint <= 200):
            return qualMeaureAdviceEnum.RED;
            break;
        case (200 < dataPoint && dataPoint <= 300):
            return qualMeaureAdviceEnum.PURPLE;
            break;
        case (300 < dataPoint):
            return qualMeaureAdviceEnum.DARK_RED;
            break;
        default:
            return '';
            break;
    }
};
