/** @format */

const toggleBtn = document.querySelector(".btn")
const articlesContainer = document.querySelector(".articles")

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme")
})

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article
    const formatDate = new Date(date).toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`
  })
  .join("")

articlesContainer.innerHTML = articlesData
