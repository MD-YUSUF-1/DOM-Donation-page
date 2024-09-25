
// removing bg of two btn container

window.addEventListener('scroll', function(){
    const twoBtnDiv=this.document.getElementById("two-btn-container");
    if(window.scrollY>0){
        twoBtnDiv.classList.remove('bg-[#fff]')
    }
    else{
        twoBtnDiv.classList.add('bg-[#fff]')
    }
})
