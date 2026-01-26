function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("response").textContent = "Thanks! We’ll contact you shortly.";
  return false;
}

// Optional: rotating hero text
let heroTexts = [
  "AI-Enhanced Clinical Trial Site Management",
  "Smart Patient Recruitment Solutions",
  "Reliable & Compliant Trial Execution",
  "Global SMO Expertise You Can Trust"
];
let idx = 0;
setInterval(() => {
  document.getElementById("hero-text").textContent = heroTexts[idx % heroTexts.length];
  idx++;
}, 4000);
