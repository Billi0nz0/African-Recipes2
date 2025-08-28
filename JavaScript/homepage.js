document.addEventListener('DOMContentLoaded', function() {
  const seeMoreBtn = document.getElementById("see-more-btn");
  const list = document.querySelector('.country-list');
  if (seeMoreBtn && list) {
    seeMoreBtn.addEventListener('click', function() {
      list.classList.toggle('expanded');
      this.textContent = list.classList.contains('expanded') ? "See Less" : "See More";
    });
  }
});
