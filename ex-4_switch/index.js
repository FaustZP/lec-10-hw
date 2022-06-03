function userRole() {
  var userName = document.getElementById("userInput").value;
  switch (userName) {
    case "user":
      alert("Ти звичайний юзер. Присядь, почекай, доки підійде старший.");
      break;
    case "moderator":
      alert("Ти модератор. Роби свою роботу і не лякай юзера.");
      break;
    case "Admin":
      alert("Ти Адмін. Ти старший. Тебе вже юзер зачекався.");
      break;
    case "superAdmin":
      alert("Ти СуперАдмін! Ти рівний Богу!");
      break;
    default:
      alert(`${userName}? Нема такої ролі!`);
      break;
  }
}
