document.addEventListener('DOMContentLoaded', function() {
  const episodeTitles = document.querySelectorAll('.episode-title');

  episodeTitles.forEach(title => {
    title.style.cursor = 'pointer';
    title.addEventListener('click', function() {
      const summary = this.nextElementSibling;
      
      if (summary && summary.classList.contains('episode-summary')) {
        if (summary.style.display === 'block') {
          summary.style.display = 'none';
        } else {
          episodeTitles.forEach(t => {
            const s = t.nextElementSibling;
            if (s && s !== summary) {
              s.style.display = 'none';
            }
          });
          summary.style.display = 'block';
        }
      }
    });
  });
});
