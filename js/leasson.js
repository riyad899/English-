function LeassonCat() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => {
            const levels = data.data.map(item => item.level_no);
            displayLevel(levels);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

function displayLevel(levels) {
    const lessonlevel = document.getElementById("lesson-level");
    for (let lev of levels) {

        const levelDiv = document.createElement("button");
        levelDiv.innerHTML = `
            <button id=btn-${lev} onclick="loadChatagory(${lev})" class="btn border rounded-sm text-[14px] font-bold text-[#422AD5] hover:bg-[#422AD5] hover:text-[#ffffff] border-[#422AD5] w-[120.83px] h-[40px]">
<span class="material-symbols-outlined">
import_contacts
</span> Lesson-${lev}
            </button>
        `;

        lessonlevel.appendChild(levelDiv);
    }
}

LeassonCat();

// "id": 1,
// "level": 3,
// "word": "Abundant",
// "meaning": null,
// "pronunciation": "অবানডান্ট"
