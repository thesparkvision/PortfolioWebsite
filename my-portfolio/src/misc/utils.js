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
    let pageNo = 1
    let totalBlogs = 0

    while (true) {
        let response = await gql(GET_USER_BLOGS, {
            pageNo: pageNo,
            pageSize: 10,
            userName: hashednodeUsername
        });

        let blogNodesFragment = response?.data?.user?.posts?.nodes
        let totalDocuments = response?.data?.user?.posts?.totalDocuments || 0

        if (blogNodesFragment.length > 0) {
            totalBlogs += blogNodesFragment.length
            pageNo += 1
        }

        if (totalBlogs >= totalDocuments) {
            return blogNodesFragment
        }
    }
}