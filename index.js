let nume = prompt("Cum te numești?");
                let text = "Salut " + nume + ", bun venit la Vicol Group!";
                let i = 0;

            function scrieText() {
                if (i < text.length) {
                    document.getElementById("salut").innerHTML += text.charAt(i);
                    i++;
                    setTimeout(scrieText, 50);
                }
            }
            scrieText();