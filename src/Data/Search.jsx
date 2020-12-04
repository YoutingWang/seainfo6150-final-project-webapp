import {
    useState,
    useEffect
} from 'react';
import * as api from './Api';

function useBusinessSearch(word, location) {
    const [search, setSearch] = useState([]);
    const [resultNum, setResultNum] = useState();
    const [searchParams, setSearchParams] = useState({
        word,
        location
    });

    useEffect(() => {
        setSearch([]);
        const fetchData = async () => {
            try {
                const response = await api.get('/businesses/search', searchParams);
                const responseJson = await response.json();
                setSearch(responseJson.businesses);
                setResultNum(responseJson.total);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [search, resultNum, searchParams, setSearchParams];
}
export default useBusinessSearch