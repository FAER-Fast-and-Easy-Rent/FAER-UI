import useSWR from 'swr'
import axios from './axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { userState as us } from './states'

export const useAuth = () => {
    const router = useRouter();
    const [userState, setUserState] = useRecoilState(us);
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        fetch("/api/user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST"
        })
            .then((response) => response.json())
            .catch((err) => {
                setUserState({})
            }
            )
    )
    useEffect(() => {
        setUserState(user)
    }, [userState, user])

    const config = {
        headers: {
            Authorization: "Bearer " + user?.access,
        },
    };

    const register = async ({ setErrors, ...props }) => {
        setErrors([])

        axios.post('/api/v1/auth/user/register', props)
            .then((res) => {
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
                if ("detail" in data) {
                    setErrors(data)
                }

                if ("user" in data) {
                    setUserState(data)
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
                setUserState({})
                router.push('/login')
            })
            .catch((res) => console.log(res));

    }

    return {
        register,
        config,
        login,
        logout
    }

}