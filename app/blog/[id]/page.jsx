import blogData from "@/data/blogData.json";
import styles from './singleBlog.module.css';
const page = ({params}) => {
    const id = params.id;
    const blog = blogData.find((blog) => blog.id === id);
    if (!blog) {
        return <div>Blog not found.</div>;
      }
    return (
        <div className={styles.container}>
           <article className={styles.articleFeatured}>
                    <h2 className={styles.articleTitle}> {blog.title}</h2>
                    <p className={styles.articleInfo}>{blog.date}</p>
                    <p className={styles.articleBody}>{blog.content}</p>
                </article>
        </div>
    );
};

export default page;