const main = document.querySelector(".main");
const notification = document.querySelectorAll(".notification.no-read");
const numberOfNotifications = document.querySelector(
  ".number-of-notifications"
);
const markAllRead = document.querySelector(".mark-all-read");
let number = notification.length;
numberOfNotifications.textContent = `${number}`;

markAllRead.addEventListener("click", () => {
  if (number !== 0) return markRead();
  alert("There aren't notifications!")
});

notification.forEach((n) => {
  n.onclick = (e) => {
    if (e.target.classList.contains("no-read")) {
      n.classList.remove("no-read");
      n.style.backgroundColor = "white";
      substract();
      if (n.children[1].children[2].classList.contains("notification-dot"))
        return n.children[1].removeChild(n.children[1].children[2]);

      n.children[1].removeChild(n.children[1].children[3]);
    }
  };
});

function substract() {
  number -= 1;
  console.log(number);
  numberOfNotifications.textContent = number;
}

function markRead() {
  notification.forEach((n) => {
    if (n.classList.contains("no-read")) {
      n.classList.remove("no-read");
      n.style.backgroundColor = "white";
      substract();
      if (n.children[1].children[2].classList.contains("notification-dot"))
        return n.children[1].removeChild(n.children[1].children[2]);

      n.children[1].removeChild(n.children[1].children[3]);
    }
  });
}
