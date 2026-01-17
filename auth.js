function login(email, password) {
  const user = USERS.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Email sau parolă greșită");
    return;
  }

  localStorage.setItem("session", JSON.stringify(user));

  if (user.role === "owner") {
    window.location.href = "../owner/";
  } else {
    window.location.href = "../admin/";
  }
}

function getUser() {
  return JSON.parse(localStorage.getItem("session"));
}

function logout() {
  localStorage.removeItem("session");
  window.location.href = "../";
}

