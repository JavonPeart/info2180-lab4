window.addEventListener('load', () => {

    document.querySelector("button#btn").addEventListener("click", (event) => {
        event.preventDefault();

        let output = document.querySelector("div#result");


        fetch(`superheroes.php?query=${document.querySelector("input#searchbar").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'')}`.replace(/"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g, ''), {method:'GET'})
            .then(response => response.text())
            .then(data => {
                let first = document.createElement("h2");
                first.appendChild(document.createTextNode("Result"));

                let second = document.createElement("hr");

                output.innerHTML = '';
                output.innerHTML = data;
                output.prepend(first, second)
            })
    });
});