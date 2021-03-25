import s from './newsList.module.scss';

import { News } from '../news/News';

export function NewsList() {
  
  return (
    <div className={s.newslist__container}>
      <div className={s.newslist__category}>
        <News category="allar" length={5}/>
      </div>
      <div className={s.newslist__category}>
        <News category="innlent" length={5}/>
      </div>
      <div className={s.newslist__category}>
        <News category="erlent" length={5}/>
      </div>
      <div className={s.newslist__category}>
        <News category="ithrottir" length={5}/>
      </div>
      <div className={s.newslist__category}>
        <News category="menning" length={5}/>
      </div>
    </div>
  );
}
