import styles from './Main.module.scss';
function App() {
  function log() {
    fetch(
      'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log('looged');
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.colors}>hiii</div>
      <button onClick={log}>clicked</button>
    </div>
  );
}

export default App;
