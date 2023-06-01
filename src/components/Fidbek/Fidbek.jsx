import css from './Fidbek.module.css';

export const Fidbek = () => {
  return (
    <div>
      <h2 className={css.title}>Please Leave Fidbek</h2>
      <ul>
        <button className={css.btn}>Good</button>
        <button className={css.btn}>Neutral</button>
        <button className={css.btn}>Bad</button>
      </ul>
      <div>
        <h2 className={css.title}>Statistics</h2>
        <ul>
          <li>
            <p className={css.items}>Good:</p>
          </li>
          <li>
            <p className={css.items}>Neutral:</p>
          </li>
          <li>
            <p className={css.items}>Bad:</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
