import React from 'react';
import styles from './Posts.module.scss';
import Post from '@/components/post/Post';
import SwiperWrapper from '@/components/swiperWrapper/swiperWrapper';
import {useMediaQuery} from 'react-responsive';

export const FIRST_POST = 'first';
export const SECOND_POST = 'second';

const Posts = ({allPosts}) => {
    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 660px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1260px)' });

    return (
        <>
            <div className={styles.block}>
                {allPosts.at(0) &&
                    <div className={styles.item}>
                        <Post {...allPosts.at(0)} classPost={FIRST_POST}/>
                    </div>
                }
                {isTabletOrDesktop && allPosts.length > 1 &&
                    <div className={styles.item}>
                        {allPosts.slice(1, 3).map((post) => <Post key={post.id} {...post} classPost={SECOND_POST}/>)}
                    </div>
                }
            </div>
            {isTabletOrDesktop
                ?
                <div className={styles.block}>
                    {allPosts.length > 3 && allPosts.slice(3, isDesktop ? 8 : 9).map((post) => {
                        return <Post key={post.id} {...post}/>
                    })}
                </div>
                :
                <SwiperWrapper data={allPosts.slice(1)}/>
            }
        </>
    );
};

export default Posts;