import { useState, useEffect } from "react";

const useFetch = (url) => {

    //custom hook para recolher os dados da base de dados JSON

    const [data, setData] = useState(null)
    const [error, setError] = useState(true)
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('não pude recuperar esses dados')
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setError(null)
            setIsPending(false)
        })
        .catch(err => {
            setError(err.message)
        })
    }, [url])

    return { data, error , isPending};
}
 
export default useFetch;