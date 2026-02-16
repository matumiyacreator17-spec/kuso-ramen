<script>
const targets = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
      observer.unobserve(entry.target); // 1回だけ再生
    }
  });
}, {
  threshold: 0.2
});

targets.forEach(target => observer.observe(target));
</script>