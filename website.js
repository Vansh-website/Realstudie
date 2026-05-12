// 🔐 Admin Password
const ADMIN_PASSWORD = "@Vansh2266#";

// ▶️ Open Lecture
function openLecture() {
  window.open("https://tinyurl.com/arjuna-live", "_blank");
}

// ✅ Mark Complete
function markComplete() {
  localStorage.setItem("lecture1", "done");
  document.getElementById("status").innerText = "Completed ✅";
}

// 📝 Save Notes
function saveNotes() {
  const text = document.getElementById("notes").value;
  localStorage.setItem("notes", text);
  alert("Notes Saved!");
}

// 📥 Load Data
window.onload = function () {
  if (localStorage.getItem("lecture1") === "done") {
    document.getElementById("status").innerText = "Completed ✅";
  }

  document.getElementById("notes").value =
    localStorage.getItem("notes") || "";
};

// 📢 Submit Complaint
function submitReport() {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];

  const text = document.getElementById("reportText").value;

  reports.push(text);

  localStorage.setItem("reports", JSON.stringify(reports));

  alert("Complaint Submitted!");
}

// 🔐 Admin Panel Open
function openAdmin() {
  const pass = document.getElementById("adminPass").value;

  if (pass === ADMIN_PASSWORD) {
    document.getElementById("adminPanel").style.display = "block";
    loadReports();
  } else {
    alert("Wrong Password ❌");
  }
}

// 📥 Load Reports
function loadReports() {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];

  let list = document.getElementById("reportsList");
  list.innerHTML = "";

  reports.forEach(r => {
    let li = document.createElement("li");
    li.innerText = r;
    list.appendChild(li);
  });
}