document.addEventListener("DOMContentLoaded", function () {
    const mainDivs = document.getElementById("leasson_div");


    mainDivs.innerHTML = `
        <div class="flex flex-col justify-center items-center w-[1300px] h-[200px]">
            <p class="">আপনি এখনো কোন Lesson Select করেন</p>
            <h1 class="text-[35px] font-bold">একটি Lesson Select করুন।</h1>
        </div>
    `;

    document.querySelectorAll(".lesson-btn").forEach(button => {
        button.addEventListener("click", function () {
            loadApi();
        });
    });
});
const showLoader = () =>{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("leasson_div").classList.add("hidden");

}


 const hideLoader = () =>{
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("leasson_div").classList.remove("hidden");

}

function loadApi() {
    showLoader();
    fetch("https://openapi.programming-hero.com/api/level/5")
        .then((res) => res.json())
        .then((data) => loadCArdFromApi(data.data))
        .catch((error) => {
            console.error("Error fetching data:", error);
            mainDivs.innerHTML = `<p class="text-red-500 text-center">Failed to load data.</p>`;
        });
}

function loadCArdFromApi(lessons) {
    const mainDivs = document.getElementById("leasson_div");
    mainDivs.innerHTML = "";

    if (lessons.length === 0) {
        mainDivs.innerHTML = `
            <div class="flex flex-col justify-center items-center w-[1300px] h-[200px]">
                <img class="w-[96px] h-[96px]" src="assets/alert-error.png" alt="">
                <p class="text-[#79716B] text-[14px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h3 class="text-[34px]">নেক্সট Lesson এ যান</h3>
            </div>
        `;
        return;
    }

    lessons.forEach((lesson) => {
        const createCard = document.createElement("div");

        createCard.innerHTML = `
        <div class="flex justify-center pt-[20px]">
            <div class="bg-[#FFFFFF] min-h-[250px] w-[372px] flex flex-col">
                <div class="text-center">
                    <h1 class="font-serif text-[32px]">${lesson.word || "Eager"}</h1>
                    <p class="text-[20px]">Meaning / Pronunciation</p>
                    <h2 class="text-[32px]">"${lesson.meaning ? lesson.meaning : "অর্থ নেই"} / ${lesson.pronunciation || "N/A"}"</h2>
                </div>

                <div class="flex justify-between pt-[50px] pl-[10px] pr-[10px]">
                    <button onclick=loadVideoDet(${lesson.id}) class="hover:bg-gray-200 rounded-sm h-[56px] w-[56px] bg-[#1A91FF]/10">
                       <i class="fa-solid fa-circle-info"></i>

                    </button>

                    <button class="hover:bg-gray-200 rounded-sm h-[56px] w-[56px] bg-[#1A91FF]/10">
                        <i class="fa-solid fa-volume-low"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
        mainDivs.appendChild(createCard);
    });
}