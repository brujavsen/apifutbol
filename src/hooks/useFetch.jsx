import { useState, useEffect } from "react";

const useFetch = (urls) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                setLoading(true);
                const promises = urls.map(url => fetch(url).then((response) => response.json()));
                const response = await Promise.all(promises);
                setData(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchData();
    },[]);
  return {data, loading}
}

export default useFetch