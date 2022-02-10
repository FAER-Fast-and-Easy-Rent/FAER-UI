import useSWR from 'swr'
import axios from './axios'


export const get_vehicles = () => {

    const { data, error } = useSWR('/api/v1/vehicles', axios)
    return { data, error }
}