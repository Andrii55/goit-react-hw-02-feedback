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
          <p className={css.items}>Good:</p>
          <p className={css.items}>Neutral:</p>
          <p className={css.items}>Bad:</p>
        </ul>
      </div>
    </div>
  );
};
