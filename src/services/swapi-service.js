export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllDetails = async () => {
        const res = await this.getResource(`/details/`);
        return res.results.map(this._transformDetail);
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformDetail = (detail) => {
        return {
            id: this._extractId(detail),
            label: detail.label,
            article: detail.article,
            quantity: detail.quantity,
        }
    }
}
