import { useState, useEffect } from "react";
import { fetchBlogs, formatDate } from "../../misc/utils";
import "./Blogs.css"

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <a className="blog-link-wrapper" href={blog.url} target="_blank">
                <div className="blog-title">{blog.title}</div>
                <div className="blog-meta">
                    <p>Read: {blog.readTimeInMinutes} min</p>
                    <p>PublishedOn: {formatDate(blog.publishedAt)}</p>
                </div>
            </a>
        </div>
    )
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogData = async () => {
            const fetchedBlogs = await fetchBlogs()

            if(fetchedBlogs?.length > 0)
                setBlogs(fetchedBlogs)
        }
    
        fetchBlogData()
      }, []);
      
    return (
        <article id="blogs-container">
            {
                blogs.map((blog, index) =>
                    <BlogCard key={index} blog={blog} />
                )
            }
        </article>
    )
}

export default Blogs;