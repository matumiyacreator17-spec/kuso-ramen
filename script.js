// フェードアップさせたい要素を取得
const targets = document.querySelectorAll('.fade-up');

// Intersection Observer の設定
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
        observer.unobserve(entry.target); // 一度だけ実行
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: '-120px 0px' // fixedナビ分
  }
);

// 監視開始
targets.forEach(target => {
  observer.observe(target);
});
