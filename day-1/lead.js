const fs = require("fs");

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function createLead({ name, email, source }) {
  const cleanEmail = normalizeEmail(email);

  return {
    id: 'lead_${Date.now()}',
    name: String(name || "").trim(),
    email: cleanEmail,
    source: String(source || "unknown").trim(),
    createdAt: new Date().toISOString(),
  };
}

const lead = createLead({
  name: " Ana Perez ",
  email: " ANA@EJEMPLO.COM ",
  source: "web-form",
});

fs.writeFileSync("lead.json", JSON.stringify(lead, null, 2), "utf-8");
console.log("Lead creado:", lead);
