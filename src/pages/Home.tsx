import { useEffect, useState } from 'react'
import { getBlogs, addBlog, updateBlog, deleteBlog } from '../api/blog'
import type { ResponseProps, BlogProps } from '../api/blog'

export default function Home() {
  const [blogs, setBlogs] = useState([]) // 存储博客列表
  const [newBlog, setNewBlog] = useState<BlogProps>({
    title: '',
    content: '',
    tags: '',
  }) // 存储新博客的输入

  const fetchData = async () => {
    const response: ResponseProps = await getBlogs()
    setBlogs(response.data)
  }

  const handleAddBlog = async () => {
    const response = await addBlog(newBlog)
    setBlogs([...blogs, response])
    setNewBlog({ title: '', content: '', tags: '' }) // 清空输入
  }

  const handleUpdateBlog = async (id, updatedBlog) => {
    const response = await updateBlog(id, updatedBlog)
    setBlogs(blogs.map((blog) => (blog.id === id ? response : blog)))
  }

  const handleDeleteBlog = async (id) => {
    await deleteBlog(id)
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Home Page: List of technical blogs</h1>
      <input
        type="text"
        placeholder="Title"
        value={newBlog.title}
        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={newBlog.content}
        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tags"
        value={newBlog.tags}
        onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
      />
      <button onClick={handleAddBlog}>Add Blog</button>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <h2>{blog.title}</h2>
            <button
              onClick={() =>
                handleUpdateBlog(blog.id, {
                  title: 'Updated Title',
                  content: 'Updated Content',
                  tags: 'Update Tags',
                })
              }
            >
              Update
            </button>
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
