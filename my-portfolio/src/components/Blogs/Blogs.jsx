import { useState, useEffect } from "react";
import { fetchBlogs, formatDate } from "../../misc/utils";
import "./Blogs.css"

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <a
                className="blog-link-wrapper"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="blog-title">{blog.title}</div>
                <div className="blog-meta">
                    <p>Read: {blog.readTimeInMinutes} min</p>
                    <p>Published On: {formatDate(blog.publishedAt)}</p>
                </div>
            </a>
        </div>
    )
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogData = async () => {
            setLoading(true)
            setError(null)
            try {
                const fetchedBlogs = await fetchBlogs()
                if (fetchedBlogs?.length > 0) {
                    setBlogs(fetchedBlogs)
                } else {
                    setBlogs([])
                }
            } catch (err) {
                setError('Failed to load blogs')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogData()
    }, []);

    return (
        <article id="blogs-container">
            {loading && <p>Loading blogs…</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && blogs.length === 0 && <p>No blogs found.</p>}
            {
                !loading && !error && blogs.map((blog, index) =>
                    <BlogCard key={blog.slug || blog.url || index} blog={blog} />
                )
            }
        </article>
    )
}

export default Blogs;
