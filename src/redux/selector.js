export const selectors = {
    getAllPosts: (state) => state.posts.posts,
    postsLoading: (state) => state.posts.isLoading,
    getPostsError: (state) => state.posts.error,
};