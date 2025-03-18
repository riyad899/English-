function removeActiveClass(){
    const activeClass=document.getElementsByClassName("active");
    for(let btnActive of activeClass){
        btnActive.classList.remove("active");
    }

}

const loadChatagory=(id)=>{
    const url= `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        removeActiveClass();
        const clickBtn=document.getElementById(`btn-${id}`);
      clickBtn.classList.add("active");
        loadCArdFromApi(data.data);

    })
}

