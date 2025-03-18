const loadVideoDet = (videoId) => {
    const urlDet = `https://openapi.programming-hero.com/api/word/${videoId}`;
    fetch(urlDet)
        .then((res) => res.json())
        .then((data) => displayDet(data.data));
};

const displayDet = (det) => {
    console.log(det);
    document.getElementById("card_det").showModal();

    const inSideModal = document.getElementById("modal_center");
    inSideModal.innerHTML = `
        <div class="bg-white p-6  max-w-md mx-auto">
            <h2 class="text-2xl font-semibold text-gray-800">${det.word}</h2>
            <p class="text-gray-500 text-sm italic">${det.pronunciation}</p>

            <div class="mt-4">
                <h3 class="text-lg font-medium text-gray-700">Meaning</h3>
                <p class="text-gray-600">${det.meaning ? det.meaning : "অর্থ পাওয়া যায়নি"}</p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-medium text-gray-700">Example</h3>
                <p class="text-gray-600 italic">"${det.sentence}"</p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-medium text-gray-700">Parts of Speech</h3>
                <p class="text-gray-600">${det.partsOfSpeech}</p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-medium text-gray-700">Synonyms</h3>
                <p class="text-gray-600">${det.synonyms.join(", ")}</p>
            </div>

            <div class="modal-action">
                            <form method="dialog">
                                <button class="btn">Close</button>
                            </form>
            </div>

        </div>
    `;
};


// {
//     "status": true,
//     "message": "successfully fetched a word details",
//     "data": {
//       "word": "Eager",
//       "meaning": "আগ্রহী",
//       "pronunciation": "ইগার",
//       "level": 1,
//       "sentence": "The kids were eager to open their gifts.",
//       "points": 1,
//       "partsOfSpeech": "adjective",
//       "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//       ],
//       "id": 5
//     }
//   }

