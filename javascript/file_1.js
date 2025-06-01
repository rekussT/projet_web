function score_quiz(){
  let score = 0;
  const bonnesReponses = {
        q1: "4 5 6 1 2 3 7 8 9",
        q2: "Sméagol",
        q3: "Pillule Rouge",
        q4: ["Ewan McGregor"],
        q5: ["Ian McKellen"],
        q6: ["Star Wars", "Harry Potter"]
    };
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === bonnesReponses.q1) score++;
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === bonnesReponses.q2) score++;
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === bonnesReponses.q3) score++;
    const q4 = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(el => el.value);
    if (arraysEqual(q4, bonnesReponses.q4)) score++;
    const q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);
    if (arraysEqual(q5, bonnesReponses.q5)) score++;
    const q6 = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(el => el.value);
    if (arraysEqual(q6, bonnesReponses.q6)) score++;
    alert("Votre score est : " + score + "/6");
}