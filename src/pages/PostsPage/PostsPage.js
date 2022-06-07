import React, {useEffect} from 'react';
import styles from './PostsPage.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '@/redux/actions';
import {selectors} from '@/redux/selector';
import Posts from '@/components/posts/Posts';
import Loading from "@/components/loading/Loading";

const PostsPage = () => {
    const allPosts = useSelector(selectors.getAllPosts);
    const isLoading = useSelector(selectors.postsLoading);
    const isError = useSelector(selectors.getPostsError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className={styles.wrapper}>
            {isLoading && <Loading />}
            {allPosts.length > 0 && <Posts allPosts={allPosts}/>}
            {isError &&
                <p>Произошла ошибка, скорей всего не доступен ресурс
                    <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a>.
                    Попробуйте отключить VPN
                </p>
            }
        </div>
    );
};

export default PostsPage;