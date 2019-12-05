const ZTMService = {
    getStops() {
        return new Promise((resolve, reject) =>
            resolve([
                {
                    stopId: 0,
                    stopName: "Miszewskiego",
                    zoneName: "Gdańak"
                },
                {
                    stopId: 1,
                    stopName: "Dąbrowa Centrum",
                    zoneName: "Gdynia"
                },
                {
                    stopId: 2,
                    stopName: "Brama Wyżynna",
                    zoneName: "Gdańak"
                }
            ])
        );
    }
};

export default ZTMService;
