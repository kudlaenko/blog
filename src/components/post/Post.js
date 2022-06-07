import React from 'react';
import styles from './Post.module.scss';
import {FIRST_POST, SECOND_POST} from '@/components/posts/Posts';

const MAX_CHARS = 73;

const Post = ({ url, title, description, tag, classPost = '' }) => {
    const classesPost = [styles.post];
    if (styles[classPost]) {
        classesPost.push(styles[classPost]);
    }

    return (
        <article className={classesPost.join(' ')}>
            <a className={styles.image} href='#'>
                <img src={url} alt=''/>
            </a>
            <div className={styles.context}>
                <a href='#'>
                    <span className={styles.title}>{title}</span>
                    {classPost === FIRST_POST ? <br/> : ' '}
                    {(classPost === FIRST_POST || classPost === SECOND_POST) &&
                        <span className={styles.text}>
                            {description && description.length > MAX_CHARS ?
                                `${description.substring(0, MAX_CHARS)}...` : description
                            }
                        </span>
                    }
                </a>
                {tag && tag.name &&
                    <div className={styles.tag}>
                        <a href={tag.url ?? '#'}>{tag.name}</a>
                    </div>
                }
            </div>
        </article>
    );
};

export default Post;