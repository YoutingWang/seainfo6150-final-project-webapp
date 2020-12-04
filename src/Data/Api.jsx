import {
    APIURL,
    BEARERTOKEN
} from './ConfigureFile';
import queryString from 'query-string';

export function get(path, parameter) {
    const query = queryString.stringify(parameter);
    return fetch(`${APIURL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARERTOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}