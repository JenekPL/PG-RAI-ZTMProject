import dataStops from './data/stops'
import dataDelays from './data/delays'

const ZTMService = {
    getStops() {
        return new Promise((resolve) =>
            resolve(dataStops["2019-12-05"].stops.filter(item => item.stopName !== null))
        );
    },

    getDelays() {
        return new Promise((resolve) => {
            resolve(dataDelays.delay.slice(0, 5))
        })
    }
};

export default ZTMService;
