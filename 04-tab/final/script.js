document.addEventListener("DOMContentLoaded", () => {
  const buttonContainer = document.querySelector(".btn-container");
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.content');
  
  buttonContainer.addEventListener('click', function(e){
    const target = e.target;
    if (target.classList.contains("tab-btn")) {
      const contentId = target.dataset.id;
      const content =  document.getElementById(contentId);

      buttons.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      target.classList.add("active");
      content.classList.add("active");
    }
  });
});

