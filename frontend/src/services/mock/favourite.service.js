import data from './data/favourites'

const FavouriteService = {
    getStops() {
        return new Promise((resolve) =>
            resolve(data)
        );
    }
};

export default FavouriteService;
