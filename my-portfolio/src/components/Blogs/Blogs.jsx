import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";
import { fetchBlogs, formatDate } from "../../misc/utils";

const BlogCard = ({ blog }) => {
    return (
        <div className="border text-zinc-900 border-zinc-900 px-2 py-2 bg-amber-200! rounded-xl shadow-sm">
            <a
                className="blog-link-wrapper"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="font-bold mb-2">{blog.title}</div>
                <div className="flex gap-5">
                    <div>
                        <Calendar className="inline-block w-3.5 h-3.5 -mt-0.5"/> {formatDate(blog.publishedAt)}
                    </div>
                    <div>
                        <Clock className="inline-block w-3.5 h-3.5 -mt-0.5"/> {blog.readTimeInMinutes} min read
                    </div>
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
        <section id="blogs-container">
            <div className="grid sm:grid-cols-2 gap-4">
                {loading && <p>Loading blogs…</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && blogs.length === 0 && <p>No blogs found.</p>}
                {
                    !loading && !error && blogs.map((blog, index) =>
                        <BlogCard 
                            key={blog.slug || blog.url || index} 
                            blog={blog} 
                        />
                    )
                }
            </div>
        </section>
    )
}

export default Blogs;
