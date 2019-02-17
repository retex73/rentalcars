import { API } from  "../js/consts.js"
import UrlGenerator from "../js/url-generator.js"

const clearResults = () => {
    document.getElementById('results').innerHTML = ''
}
// Listen for keypress on input
document.querySelector('input').addEventListener('keyup', e => {
    let params = {
        pickupLocation: e.target.value,
        numberResults: 6
    }
    let endpoint = new UrlGenerator(API, params)
    e.target.value.length > 1 ? getData(endpoint.url) : clearResults()
})

const appendToList = (row) => {
    console.log('hello')
    const {name, region, city, country} = row
    let template = name === 'No results found' ? `<li class="ui-menu-item" role="menuitem">${name}</li>` : `<li class="ui-menu-item" role="menuitem">
                        <a class="ui-corner-all" tabindex="-1">
                        <span class="autocomplete__tag autocomplete__tag--city">${name}</span>
                        <div class="SearchForm_FtsSuggestion_LocationText_Wrapper">
                        ${name}
                        <span>${region}, ${country}</span>
                        </div>
                        </a>
                        </li>`
    let li = document.createElement('li')
    li.innerHTML = template
    document.getElementById('results').append(li)
}

const populateList = data => {
    const {results} = data
    clearResults()
    results.docs.map(doc=>appendToList(doc))
}

const getData = async (url) => {
    let res = await axios.get(url)
    populateList(res.data)
}
