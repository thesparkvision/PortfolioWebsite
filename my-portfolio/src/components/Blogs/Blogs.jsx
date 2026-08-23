import { formatDate } from "../../misc/utils";
import { PageHeading } from "../utils";
import blogs from "../../data/blogs.json";

const BlogCard = ({ blog }) => {
    return (
        <li className="border-b border-[var(--color-text)]/20 py-6 last:border-b-0">
            <a
                className="grid gap-2 no-underline md:grid-cols-[minmax(14rem,0.4fr)_minmax(0,1fr)_auto] md:items-start md:gap-8"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="font-bold text-lg text-[var(--color-link)] underline underline-offset-2">{blog.title}</h3>
                <p className="body-copy">{blog.brief}</p>
                <div className="flex flex-wrap gap-x-2 text-sm text-[var(--color-text)]/70 md:justify-end">
                    <span>{formatDate(blog.publishedAt)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{blog.readTimeInMinutes} min read</span>
                </div>
            </a>
        </li>
    )
}

const Blogs = () => {
    return (
        <section id="blogs-container">
            <PageHeading className="mb-2">Writing</PageHeading>
            <p className="mb-6 body-copy">Writing about engineering, learning, and ideas.</p>
            <ul className="content-list">
                {blogs?.length === 0 && <p>No blogs found.</p>}
                {
                    blogs?.map((blog, index) =>
                        <BlogCard 
                            key={blog.slug || blog.url || index} 
                            blog={blog} 
                        />
                    )
                }
            </ul>
        </section>
    )
}

export default Blogs;
