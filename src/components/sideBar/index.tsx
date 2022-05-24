import styles from './sideBar.module.scss';

const SideBar = () => {
  return (
    <nav className={styles.sideBarWrapper}>
      <section>
        <img src='https://lever.me/img/logo-black.svg' alt='logo' />
        <div className={styles.underLine} />
      </section>
      <section className={styles.serviceWrapper}>
        <p className={styles.title}>서비스</p>
        <div className={styles.dropDown}>매드업</div>
      </section>
      <section className={styles.adCenterWrapper}>
        <p className={styles.title}>광고 센터</p>
        <button type='button'>대시보드</button>
        <button type='button'>광고관리</button>
      </section>
      <section className={styles.useGuideWrapper}>
        <p className={styles.guideTitle}>레버 이용 가이드</p>
        <p className={styles.guideText}>시작하기 전에 알아보기</p>
      </section>
      <section className={styles.footerWrapper}>
        <p>레버는 함께 만들어갑니다.</p>
        <p>이용약관</p>
      </section>
    </nav>
  );
};

export default SideBar;
