const Banner = document.getElementById("header-section");
const mainSection = document.getElementById("main-section");
const VocabularySection = document.getElementById("leasson-section");
const FaqSection = document.getElementById("faq-section");
const FooterSection = document.getElementById("footer");

const LogoutBtn = document.getElementById("logOut");

const addCls= document.getElementById("addClass");

LogoutBtn.addEventListener("click", function() {
    addCls.classList.add("adding");
    mainSection.classList.add("add");
    Banner.style.display = "none";
    VocabularySection.style.display = "none";
    FaqSection.style.display = "none";
    mainSection.style.display = "block";
    FooterSection.style.display = "block";
});
