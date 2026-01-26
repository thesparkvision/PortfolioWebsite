import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";
import { fetchBlogs, formatDate } from "../../misc/utils";
import blogs from "../../data/blogs.json";

const BlogCard = ({ blog }) => {
    return (
        <div 
            className="border text-zinc-900 border-zinc-900 px-2 py-2 bg-amber-200! rounded-xl shadow-sm hover:bg-amber-500!"
        >
            <a
                className="flex flex-col h-full"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="font-bold mb-2">{blog.title}</div>
                <p className="flex-1 mb-2">{blog.brief}</p>
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
    return (
        <section id="blogs-container">
            <h2 className="font-bold text-2xl mb-2">Blogs</h2>
            <p className="mb-6">My thoughts and musings.</p>
            <div className="grid sm:grid-cols-2 gap-4">
                {blogs?.length === 0 && <p>No blogs found.</p>}
                {
                    blogs?.map((blog, index) =>
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
