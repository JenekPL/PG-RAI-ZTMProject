import data from './data/stops'

const ZTMService = {
    getStops() {
        return new Promise((resolve) =>
            resolve(data["2019-12-05"].stops.filter(item => item.stopName !== null))
        );
    }
};

export default ZTMService;
