function addLog(action) {
  const user = JSON.parse(localStorage.getItem("session"));
  if (!user) return;

  const logs = JSON.parse(localStorage.getItem("logs") || "[]");

  logs.push({
    admin: user.name,
    action: action,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("logs", JSON.stringify(logs));
}

