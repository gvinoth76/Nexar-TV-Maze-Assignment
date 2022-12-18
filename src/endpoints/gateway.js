import {
    fetchApi,
} from '../utils/fetch-api';


export function search(keyword) {
    return fetchApi(`search/shows?q=${keyword}`, {
        method: 'GET'
    });
}

export function details(id) {
    return fetchApi(`shows/${id}?embed=cast`, {
        method: 'GET'
    });
}
