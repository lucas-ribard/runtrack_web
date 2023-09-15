
    let Job01First;
    let Job01Second;

    function Job01() {
        Job01First = parseInt(document.getElementById("Job01First").value);
        Job01Second = parseInt(document.getElementById("Job01Second").value);

        if (isNaN(Job01First) || isNaN(Job01Second)) {

            document.getElementById("Job01Result").innerHTML = "Une de vos entrées n'est pas un nombre";
        } else {
            document.getElementById("Job01Result").innerHTML = ('Résultat de ' + Job01First + " + " + Job01Second + " = " + (Job01First + Job01Second) + "<br> Résultat de " + Job01First + " - " + Job01Second + " = " + (Job01First - Job01Second) + "<br> Résultat de " + Job01First + " x " + Job01Second + " = " + (Job01First * Job01Second) + "<br> Résultat de " + Job01First + " / " + Job01Second + " = " + (Job01First / Job01Second));
        }



    };

    let Job03Array = ["Apple", "Banana", "tutel", "Yeet"];



    Job03Array.forEach(Job03);

    function Job03(item) {
        document.getElementById("Job03Result").innerHTML += (item + "  ");
    }

    function Job06(color){
        document.body.style.backgroundColor = color;
    }


