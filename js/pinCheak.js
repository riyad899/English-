document.addEventListener("DOMContentLoaded", function() {
    const mainSection = document.getElementById("main-section");
    const passWord = document.getElementById("pass");
    const submitBtn = document.getElementById("Submit_btn");

    const leftDiv=document.getElementById("left_class");
    const rightDiv=document.getElementById("right_div");

    const headerSection = document.getElementById("header-section");
    const leassonSection = document.getElementById("leasson-section");
    const FaqSection = document.getElementById("faq-section");

    headerSection.style.display = "none";
    leassonSection.style.display = "none";
    FaqSection.style.display = "none";


    submitBtn.addEventListener("click", function() {
        let realpass = passWord.value;
        console.log(realpass);

        if (realpass === "123456") {
            leftDiv.classList.add("addA");
            rightDiv.classList.add("addB");
            mainSection.style.display = "none";
            headerSection.style.display = "block";
            leassonSection.style.display = "block";
            FaqSection.style.display = "block";
            setTimeout(function() {
                alert("Login Successful!");
            }, 500);

        } else {
            alert("Incorrect Password!");
        }
    });
});



