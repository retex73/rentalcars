export default class UrlGenerator {
    constructor(baseUrl, params) {
        this._baseUrl = baseUrl
        this._pickupLocation = params.pickupLocation
        this._numberResults = params.numberResults
    }

    get url() {
        return `${this._baseUrl}&solrRows=${this._numberResults}&solrTerm=${this._pickupLocation}`
    }
}
