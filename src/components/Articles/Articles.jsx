import React, { useEffect, useState } from "react";
import styles from './Articles.module.scss'

const Articles = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json();
                setPosts(data);

            } catch (error) {
                console.log('error');
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Articles</h1>

            {posts.map((post) => {
                <div className={styles.card}>
                    <img src="" ></img>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <a href="/">Learn now</a>
                </div>
            }
            )}
        </div>
    )
}

export default Articles;