import blogData from "@/data/blogData.json";
import Link from "next/link";
import styles from './blog.module.css';
const page = () => {
  return (


    <div className={styles.container}>


    <div className={styles.allPost}>
    {blogData.map((blog) => (
        <div className={styles.post} key={blog.id} >
            <Link href={`/blog/${blog.id}`}>
                <h3>{blog.title}</h3>
                <div className={styles.author}>
                    <div >
                        <p>{blog.date}</p>
                    </div>
                </div>
            </Link>
        </div>
          ))}

    </div>
</div>
  );
};

export default page;
