import axiosInstance from '../axiosInstance'

export type BlogProps = {
  id: string
  title: string
  content: string
  tags: string
}

export type ResponseProps = {
  data: BlogProps[]
}

export const getBlogs = async () => {
  try {
    const response: ResponseProps = await axiosInstance.get('/blogs')
    console.log('api response:', response)
    return response // 返回数据部分
  } catch (error) {
    console.error(error)
  }
}

export const addBlog = async (newBlog: BlogProps) => {
  // 接收新博客数据
  try {
    const response = await axiosInstance.post('/blogs', newBlog)
    console.log('api response:', response)
    return response // 返回数据部分
  } catch (error) {
    console.error(error)
  }
}

export const updateBlog = async (id: string, updatedBlog: string) => {
  // 接收博客ID和更新数据
  try {
    const response = await axiosInstance.put(`/blogs/${id}`, updatedBlog)
    console.log('api response:', response)
    return response // 返回数据部分
  } catch (error) {
    console.error(error)
  }
}

export const deleteBlog = async (id: string) => {
  // 接收博客ID
  try {
    const response = await axiosInstance.delete(`/blogs/${id}`)
    console.log('api response:', response)
    return response // 返回数据部分
  } catch (error) {
    console.error(error)
  }
}
