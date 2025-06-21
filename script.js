const messages = [
  "Eres mi todo 💕",
  "Te pienso siempre 💭",
  "Mi mundo eres tú 🌍",
  "Tu amor me inspira ✨",
  "Tú haces latir mi corazón ❤️",
  "Contigo todo es mejor 🌈",
  "Eres mi lugar favorito 🏡",
  "Mi cielo",
  "Siempre contigo",
  "Siempre junto a tí",
  "Eres mi paz en el caos 🕊️",
  "Tu mirada lo cambia todo 👀",
  "En tus abrazos encuentro el hogar 🤗",
  "Mi corazón te eligió sin dudar 💓",
  "Solo tú haces magia en mi vida ✨",
  "Tus besos son mi adicción 😘",
  "Tú + yo = infinito ♾️",
  "No necesito nada más que a ti 🫶",
  "Eres mi sueño hecho realidad 💭💖",
  "Cada segundo contigo vale oro 🕰️💛",
  "Eres mi luna;3",
  "Lo eres todo para mi",
  "Solo te quiero a ti",
  "Mi conejita 🐇",
  "yo tu conejito ti🐰",
  "no hay nadie mas que tú",
  "mitu <3",
  "Eres mi todo 💕",
  "Te pienso siempre 💭",
  "mi corazonshito pechocho",
  "mi niña hermosa",
  "Mi bebeeeeeeeeee",
  "Te amo te amo te amo",
  "🐰",
  "Quiero estar contigo, siempre 🌙",
  "Eres mi paz en el caos 🕊️",
  "Tu mirada lo cambia todo 👀",
  "Sabias que me encantas?",
  "SOMOS UN EQUIPO",
  "De mi para tí",
  "Tu Aukinsito",
  "muaaa",
  "Amarte es mi destino 🔐",
  "Tu sonrisa ilumina mis días ☀️",
  "Quiero estar contigo, siempre 🌙",
  "mua mua muaaa",
  "Eres la mejor",
  "Tu puedes amor",
  "La mejor diseñadora grafica",
  "ti",
  "Ratoncitos🐭",
  "👻",
  "Mi Karensita",
  "Mi bebé", 
  "Te amo demasiado Karen"

];

let currentMessage = 0;

document.body.addEventListener("click", (e) => {
  const msg = document.createElement("div");
  msg.className = "love-message";
  msg.innerText = messages[currentMessage];

  msg.style.left = `${e.clientX}px`;
  msg.style.top = `${e.clientY}px`;
  msg.style.transform = "translate(-50%, -50%)"; 

  document.getElementById("message-container").appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 9000);

  currentMessage = (currentMessage + 1) % messages.length;
});
