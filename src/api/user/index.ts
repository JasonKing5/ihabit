import axiosInstance from '../axiosInstance'

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/users')
    console.log('api response:', response)
    return response
  } catch (error) {
    console.error(error)
  }
}
