import { hashednodeUsername, hashnodeURL } from "./constants";
import { GET_USER_BLOGS } from "./queries";

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

async function gql(query, variables = {}) {
    const data = await fetch(hashnodeURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

export async function fetchBlogs() {
    try {
        const pageSize = 10;
        let pageNo = 1;
        let allBlogs = [];
        let totalDocuments = Infinity;

        while (allBlogs.length < totalDocuments) {
            const response = await gql(GET_USER_BLOGS, {
                pageNo,
                pageSize,
                userName: hashednodeUsername
            });

            const nodes = response?.data?.user?.posts?.nodes || [];
            totalDocuments = response?.data?.user?.posts?.totalDocuments ?? nodes.length;

            // If no nodes returned, break to avoid infinite loop
            if (!nodes.length) break;

            allBlogs = allBlogs.concat(nodes);
            pageNo += 1;

            // Safety limit to avoid accidental infinite loops
            if (pageNo > 50) break;
        }

        return allBlogs;
    } catch (err) {
        console.error('fetchBlogs error:', err);
        return []; // graceful fallback
    }
}