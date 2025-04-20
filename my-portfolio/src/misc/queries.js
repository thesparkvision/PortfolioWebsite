export const GET_USER_BLOGS = `
    query GetUserArticles($pageSize: Int!, $pageNo: Int!, $userName: String!) {
        user(username: $userName) {
            posts(pageSize: $pageSize, page: $pageNo) {
                nodes {
                    title
                    url
                    brief
                    slug
                    readTimeInMinutes
                    publishedAt
                    coverImage {
                        url
                    }
                }
                totalDocuments
            }
        }
    }
`;