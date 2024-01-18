async function fetchSkills() {
  try {
    const response = await fetch(
      "https://testapi.io/api/rytisc/resource/skills"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch skills. Status: ${response.status}`);
    }

    const responseData = await response.json();

    if (!Array.isArray(responseData.data)) {
      console.error("Invalid skills response:", responseData.data);
      throw new Error("Skills data is not an array");
    }

    const skills = responseData.data;

    skills.sort((a, b) => a.id - b.id);

    console.log("Skills received:", skills);
    displaySkills(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
}
async function addSkill() {
  const skillInput = document.getElementById("skillInput");
  const skill = skillInput.value;

  try {
    const response = await fetch(
      "https://testapi.io/api/rytisc/resource/skills",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skill }),
      }
    );

    if (response.ok) {
      alert("Skill added successfully");
      window.location.href = "index.html";
    } else {
      throw new Error("Failed to add skill");
    }
  } catch (error) {
    console.error("Error adding skill:", error);
    alert("Error adding skill: " + error.message);
  }
}

function displaySkills(skills) {
  const table = document.getElementById("skillsTable");
  table.innerHTML =
    '<tr><th onclick="sortSkills()">ID</th><th>Skill</th><th>Action</th></tr>';

  skills.forEach((skill) => {
    const row = `<tr>
                        <td>${skill.id}</td>
                        <td>${skill.skill}</td>
                        <td><button onclick="deleteSkill(${skill.id})">Delete</button></td>
                    </tr>`;
    table.innerHTML += row;
  });
}

let isAscending = true;

function sortSkills() {
  const skills = Array.from(document.querySelectorAll("#skillsTable tbody tr"));

  skills.sort((a, b) => {
    const idA = parseInt(a.cells[0].textContent);
    const idB = parseInt(b.cells[0].textContent);

    if (isAscending) {
      return idA - idB;
    } else {
      return idB - idA;
    }
  });

  const table = document.getElementById("skillsTable");
  table.innerHTML =
    '<tr><th onclick="sortSkills()">ID</th><th>Skill</th><th>Action</th></tr>';

  skills.forEach((skill) => {
    table.appendChild(skill);
  });

  isAscending = !isAscending;
}

async function deleteSkill(id) {
  try {
    const response = await fetch(
      `https://testapi.io/api/rytisc/resource/skills/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Skill deleted successfully");
      fetchSkills();
    } else {
      throw new Error("Failed to delete skill");
    }
  } catch (error) {
    console.error("Error deleting skill:", error);
    alert("Error deleting skill: " + error.message);
  }
}

function redirectToAddPage() {
  window.location.href = "add.html";
}

fetchSkills();
