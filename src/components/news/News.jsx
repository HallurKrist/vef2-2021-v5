import React, { useEffect, useState } from 'react';
import s from './news.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

// ef ekki er gefið length þá eru allir linkar með
export function News({ category = '', length = -1 }) {
  // TODO sækja fréttir fyrir flokk

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = apiUrl+category;

      try {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [category]);

  if (error) {
    return (
      <p className={s.news__error}>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p className={s.news__loading}>Sæki gögn...</p>
    );
  }

  const items = data.items;
  const smallItems = []
  if (items && length !== -1) {
    for (let i = 0; i < length; i++) {
      smallItems.push(items[i]);
    }
  }

  return (
    <div className={s.news__container}>
      <h3 className={s.news__title}>{data.title}</h3>

      <div className={s.news__alllinks}>

        {length === -1 && items && 
        items.map((newsarticle) => {
          return <a className={s.news__newslink} href={newsarticle.link}>{newsarticle.title}</a>
        })}

        {length !== -1 && smallItems && 
        smallItems.map((newsarticle) => {
          return <a className={s.news__newslink} href={newsarticle.link}>{newsarticle.title}</a>
        })}
        
      </div>

      {length === -1 && 
      <a className={s.news__categorylink} href={'/'}>Til baka</a>
      }

      {length !== -1 && 
      <a className={s.news__categorylink} href={`/${category}`}>Allar Fréttir</a>
      }
    </div>
  );
}