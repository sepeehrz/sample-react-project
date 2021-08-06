import PostItem from './PostItem';
import styles from './Post.module.scss';
function Post(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxes}>
        {props.data.map((item) => (
          <PostItem title={item.title} body={item.body} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Post;
