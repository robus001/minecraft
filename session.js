function login(email, password) {
  const user = USERS.find(u => u.email === email && u.password === password);
  if (!user) return alert("Date greșite");

  localStorage.setItem("session", JSON.stringify(user));

  if (user.role === "owner") {
    location.href = "../owner/";
  } else {
    location.href = "../admin/";
  }
}

function getUser() {
  return JSON.parse(localStorage.getItem("session"));
}

function logout() {
  localStorage.removeItem("session");
  location.href = "../";
}

