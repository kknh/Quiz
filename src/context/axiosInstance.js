import axios from 'axios'

const axiosInstance = (params) => {
	return axios.create({
		baseURL: process.env.REACT_APP_URL,
		params: params,
	})
}

export default axiosInstance
