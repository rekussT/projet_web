document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      if (link.href && link.href.includes(location.hostname)) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          location.href = link.href;
        }, 300);
      }
    });
  });
  const topButton = document.createElement("button");
  topButton.textContent = "⬆️ Haut";
  topButton.style.position = "fixed";
  topButton.style.bottom = "30px";
  topButton.style.left = "30px";
  topButton.style.padding = "10px 15px";
  topButton.style.display = "none";
  topButton.style.border = "none";
  topButton.style.backgroundColor = "#007BFF";
  topButton.style.color = "#fff";
  topButton.style.borderRadius = "5px";
  topButton.style.cursor = "pointer";
  document.body.appendChild(topButton);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });
  revealElements.forEach(el => observer.observe(el));
});
document.getElementById("quiz_cine").addEventListener("submit", function() {
    let score = 0;
    const radioQuestions = ["q1", "q2", "q3"];
    radioQuestions.forEach(function(q) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === "1") {
            score++;
        }
    });
    const checkboxQuestions = ["q4", "q5", "q6"];
    checkboxQuestions.forEach(function(q) {
        const checkboxes = document.querySelectorAll(`input[name="${q}"]`);
        let allCorrect = true;
        checkboxes.forEach(function(box) {
            const shouldBeChecked = box.value === "1";
            if (box.checked !== shouldBeChecked) {
                allCorrect = false;
            }
        });
        if (allCorrect) {
            score++;
        }
    });
    alert("Votre score est : " + score + " / 6");
});