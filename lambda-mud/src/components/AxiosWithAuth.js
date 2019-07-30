import axios from 'axios';

const AxiosWithAuth = () => {
    return axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Token caf8a7ba0f841d4c52ea7c6fe10a5259a1e50d63',
        }
    })
}

export default AxiosWithAuth;