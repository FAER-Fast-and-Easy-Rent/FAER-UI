import useSWR from 'swr'
import axios from './axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();
    const register = async ({ setErrors, ...props }) => {
        setErrors([])

        axios.post('/api/v1/auth/user/register', props)
            .then((res) => {
                // console.log(res.data);
                router.push('/login')
            })
            .catch((err) => {
                if (err.response) {
                    setErrors(err.response.data)
                }
            }
            )
    }

    const login = async ({ setErrors, ...props }) => {
        setErrors([])
        fetch("/api/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(props),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                if ("detail" in data) {
                    setErrors(data)
                }

                if ("user" in data) {
                    router.push('/dashboard')
                }
            })
            .catch((res) => console.log(res));


    }

    const logout = async () => {
        fetch("/api/logout", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                router.push('/login')
            })
            .catch((res) => console.log(res));


    }

    return {
        register,
        login,
        logout
    }

}