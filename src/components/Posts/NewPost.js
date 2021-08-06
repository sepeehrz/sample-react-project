import styles from './newPost.module.scss';
import Card from '../common/card';
import { useRef } from 'react';
function NewPost() {
  const titleInput = useRef();
  const imageInput = useRef();
  const textInput = useRef();
  let arrayOfData = [];
  let LocalData = localStorage.getItem('data');
  let LocalDataParsed = JSON.parse(LocalData);
  if (LocalData) {
    LocalDataParsed.map((item) => {
      return arrayOfData.push(item);
    });
  }
  function submit() {
    const data = {
      title: titleInput.current.value,
      image: imageInput.current.value,
      text: textInput.current.value,
    };
    arrayOfData.push(data);
    localStorage.setItem('data', JSON.stringify(arrayOfData));
  }
  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.field}>
          <label htmlFor='title'>title</label>
          <input type='text' id='title' name='title' ref={titleInput} />
        </div>
        <div className={styles.field}>
          <label htmlFor='image'>image</label>
          <input type='url' id='image' name='image' ref={imageInput} />
        </div>
        <div className={styles.field}>
          <label htmlFor='text'>text</label>
          <textarea name='text' id='text' ref={textInput}></textarea>
        </div>
        <div className={styles.actions}>
          <button onClick={submit}>save</button>
        </div>
      </Card>
    </div>
  );
}

export default NewPost;
