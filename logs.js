function addLog(text) {
  const user = JSON.parse(localStorage.getItem("session"));
  if (!user) return;

  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push({
    user: user.name,
    role: user.role,
    action: text,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("logs", JSON.stringify(logs));
}
