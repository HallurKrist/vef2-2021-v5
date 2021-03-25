import s from './layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>Rúv fréttir</h1>

      </header>
      <main className={s.layout__main}>
        {children}

        <div className={s.layout__bottom}>
        <p className={s.layout__link}>Fréttir frá </p>
        <a className={s.layout__link} href="https://www.ruv.is/">RÚV</a>
        </div>
      </main>
    </div>
  )
}
