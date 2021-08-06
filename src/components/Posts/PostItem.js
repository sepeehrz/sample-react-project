import styles from './postItem.module.scss';
import Card from '../common/card';
function PostItem(props) {
  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.description}>{props.title}</div>
        <div className={styles.description}>{props.body}</div>
        <div className={styles.actions}>
          <button> view Article</button>
        </div>
      </div>
    </Card>
  );
}

export default PostItem;
