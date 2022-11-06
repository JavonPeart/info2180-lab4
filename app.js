window.addEventListener('load', ()=>{
    var btn = document.getElementById("btn");
    var url = "http://localhost/info2180-lab4/superheroes.php";

    btn.addEventListener("click", () => {
	    fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then(text => alert(text))
            .catch((error => {console.log("Unable to make request")}))
            
    });
});