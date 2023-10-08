/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';

type FetchData = () => Promise<any>;

type UseFetchResult = [FetchData, boolean, string];

export default function useFetch(url: string): UseFetchResult {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        setError('');
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setError('Something went wrong!');
                return;
            }
            const data = await response.json();
            return data;
        } catch (err) {
            setError('An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    }, [url]);

    return [fetchData, loading, error];
}
