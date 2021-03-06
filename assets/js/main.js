
window.addEventListener('load', () => {
    let vreme = new Date();
    let dan = vreme.getDay();
    let sat = vreme.getHours();
    let nizSati = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    var radnoVreme = document.getElementById("radnoVreme");
    if ((dan == 1 || dan == 2 || dan == 3 || dan == 4 || dan == 5) && (nizSati.includes(sat))) {
        radnoVreme.classList.add("zelenaSlova");
    }
    else {
        radnoVreme.classList.add("crvenaSlova");
    }
})

let pokrenutoKaunter = false;
let pokrenutoFejd = false;
window.addEventListener('scroll', () => {

    let divKaunter = document.getElementById("lmaoKaunt");
    let pozicija = divKaunter.getBoundingClientRect();
    let y = pozicija.top;

    let skrol = window.scrollY;
    console.log(skrol)
    if (y < window.innerHeight && pokrenutoKaunter == false) {
        pokrenutoKaunter = true;
        let niz = document.querySelectorAll(".count-digit");
        let prom = [0, 0, 0, 0];
        let intervali = [0, 0, 0, 0];
        let prom2 = [0, 0, 0, 0];
        for (let i = 0; i < niz.length; i++) {
            prom[i] = (parseInt(niz[i].textContent));
            let r = prom[i] / 3;
            intervali[i] = 1000 / r;
        }

        for (let i = 0; i < intervali.length; i++) {
            uvecaj(prom[i], prom2[i], i, intervali[i])
        }

        function uvecaj(x, y, i, dr) {
            let m;
            m = setInterval(() => {
                if (y < x) {
                    y++;
                    niz[i].textContent = y;
                }
            }, dr);
            if (y == x) clearInterval(m);
        }
    }
    /* jQuery */
    let divSlajd = document.getElementById("slajdLmao");
    let pozicijaSlajd = divSlajd.getBoundingClientRect();
    let yy = pozicijaSlajd.top;

    $("scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    if (yy <window.innerHeight && pokrenutoFejd == false) {
        pokrenutoFejd = true;
        $(document).ready(function () {
            $(".fade-right").animate({ right: 0, opacity: "show" }, 1500);
            $(".fade-left").animate({ left: 0, opacity: "show" }, 1500);
        });
    }
    /* end jQuery */

    

    if (skrol > 900) {
        let vratiGore = document.getElementById("vratiGore");
        vratiGore.classList.remove("sakrijBackToTop");
    }
    else {
        let vratiGore = document.getElementById("vratiGore");
        vratiGore.classList.add("sakrijBackToTop");
    }

})

let dugmeUcitajJos = document.getElementById("dugmeJosUcitaj");
dugmeUcitajJos.addEventListener("click", () => {
    console.log("pokreni se!");
    document.getElementById("skrozDesnoOpsirnije").classList.remove("sakrij");
    $(".fade-right-right").animate({ right: 0, opacity: "show" }, 1500);
});

let dugmeNazad = document.getElementById("manjeTeksta");
dugmeNazad.addEventListener("click", () => {
    console.log("pokreni se nazad!");
    document.getElementById("skrozDesnoOpsirnije").classList.remove("sakrij");
    $(".fade-right-right").animate({ right: -500, opacity: "hide" }, 1500);
});


let uzorakIme = /^[A-Z??????????][a-z??????????]{2,15}(\s[A-Z??????????][a-z??????????]{2,15})?(\s[A-Z??????????][a-z??????????]{2,20})\s*$/;

let txtIme = document.getElementById('name');
poljeIme = document.getElementById('upozorenjeIme');
txtIme.addEventListener('blur', proveriIme);
function proveriIme() {
    let ime = txtIme.value;
    ime.replace(/\s\s+/g, ' ');
    if (!uzorakIme.test(ime)) {
        poljeIme = document.getElementById('upozorenjeIme');
        if (ime == "" || !ime.trim()) {
            poljeIme.innerHTML = "Niste popunili Ime i prezime!";
        }
        else {
            poljeIme.innerHTML = "Pog??an unos imena i prezimena!";
        }
        poljeIme.classList.remove('sakrij');
        return false;
    }
    if (uzorakIme.test(ime)) {
        let poljeIme = document.getElementById('upozorenjeIme');
        poljeIme.classList.add('sakrij');
        return true;
    }
}


let uzorakEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

let txtEmail = document.getElementById('email');
txtEmail.addEventListener('blur', proveriEmail);
function proveriEmail() {
    let email = txtEmail.value;
    if (!uzorakEmail.test(email)) {
        let poljeEmail = document.getElementById('upozorenjeEmail');
        if (email == "" || !email.trim())
            poljeEmail.innerHTML = "Niste popunili email!";
        else
            poljeEmail.innerHTML = "Email nije u dobrom formatu!";

        poljeEmail.classList.remove('sakrij');
        return false;
    }
    if (uzorakEmail.test(email)) {
        let poljeEmail = document.getElementById('upozorenjeEmail');
        poljeEmail.classList.add('sakrij');
        return true;
    }
}

let forma = document.getElementById("form-submit");
forma.addEventListener("click", () => {
    let combo = document.getElementById("selektujTemu");
    let comboRez = combo.value;
    let txt = document.getElementById("message").value;
    let m1 = proveriIme();
    let m2 = proveriEmail();
    let r1=document.getElementById("radio1");
    let r2=document.getElementById("radio2");

    if(r1.checked || r2.checked){
        document.getElementById("greskaRadio").classList.add("sakrij");
    }
    else{
        document.getElementById("greskaRadio").classList.remove("sakrij");
    }
    if (txt == "") {
        document.getElementById("upozorenjeText").classList.remove("sakrij");
        document.getElementById("uspehForma").classList.add("sakrij");
    }
    if (txt != "") {
        document.getElementById("upozorenjeText").classList.add("sakrij");

    }
    if (comboRez == "") {
        document.getElementById("upozorenjeTema").classList.remove("sakrij");
        document.getElementById("uspehForma").classList.add("sakrij");
    }
    else {
        document.getElementById("upozorenjeTema").classList.add("sakrij");
    }
    if (comboRez != "" && txt != "" && proveriEmail() && proveriIme() && (r1.checked || r2.checked)) {
        document.getElementById("uspehForma").classList.remove("sakrij");
    }
    else {
        document.getElementById("uspehForma").classList.add("sakrij");

    }
    if (comboRez == "") {
        document.getElementById("upozorenjeTema").classList.remove("sakrij");
        document.getElementById("uspehForma").classList.add("sakrij");
    }
    if (comboRez != "") {
        document.getElementById("upozorenjeTema").classList.add("sakrij");

    }

});

var modal = document.getElementById("otvori");
console.log(modal)
let otvorenModal = false;
modal.addEventListener("click", () => {

    //Pravljenje novih elemenata
    if (!otvorenModal) {
        otvorenModal = true;
        console.log("wew");
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "pozadina-siva")
        div2.setAttribute("id", "divKontejner");
        let divCentar = document.createElement("div");
        let naslov = document.createElement("h2");
        naslov.textContent = "Zakazivanje termina";
        let forma = document.createElement("form")
        forma.setAttribute("method", "post");
        forma.setAttribute("id", "formaSastanak");
        let zatvori = document.createElement("i")
        zatvori.setAttribute("class", "fas fa-times pozX")

        let txtBox = document.createElement("input");
        txtBox.setAttribute("type", "text");
        txtBox.setAttribute("placeholder", "Ime i prezime:");
        txtBox.setAttribute("class", "form-control");
        txtBox.setAttribute("id", "txtBoxModal")
        let x1 = document.createElement("span");
        x1.setAttribute("class", "crvenaSlova levo sakrij");
        x1.setAttribute("id", "poljeImeD")
        x1.textContent = "Pogresno ste uneli ime!"
        let x2 = document.createElement("span");
        x2.setAttribute("class", "crvenaSlova levo sakrij");
        x2.textContent = "Niste izabrali datum!"
        let x3 = document.createElement("span");
        x3.setAttribute("class", "crvenaSlova levo sakrij");
        x3.textContent = "Niste izabrali vreme!"
        let x4 = document.createElement("p");
        x4.setAttribute("class", "sakrij poslataFormaText")
        x4.innerHTML = "Uspe??no ste zakazali sastanak!";
        let dugme = document.createElement("button")
        dugme.setAttribute("type", "button")
        dugme.setAttribute("class", "dugmeForma")
        dugme.setAttribute("value", "Po??alji")
        dugme.textContent = "Posalji"
        let danasnjiDatum = new Date();
        let god = danasnjiDatum.getFullYear();
        let mesec = danasnjiDatum.getMonth() + 1;
        let dan = danasnjiDatum.getDate() + 1;
        let maxMesec = danasnjiDatum.getMonth() + 2;
        let maxGodine = danasnjiDatum.getFullYear();

        if (mesec == 12) {
            maxGodine++;
            maxMesec = "01";
        }
        if (mesec + 1 < 10)
            mesec = `0${mesec}`;
        if (mesec + 2 < 10)
            maxMesec = `0${mesec}`
        if (dan < 10)
            dan = `0${dan}`;
        console.log(god + "-" + mesec + "-" + dan)
        console.log(maxGodine + "-" + maxMesec + "-" + dan)
        let combo1 = document.createElement("input");
        combo1.setAttribute("value", god + "-" + mesec + "-" + dan)
        combo1.setAttribute("id", "terminVreme");
        combo1.setAttribute("type", "date");
        combo1.setAttribute("class", "form-control")
        combo1.setAttribute("min", god + "-" + mesec + "-" + dan);
        combo1.setAttribute("max", maxGodine + "-" + maxMesec + "-" + dan);

        let combo2 = document.createElement("select");
        combo2.setAttribute("id", "razlogSastanka");
        combo2.setAttribute("class", "form-control")
        let op = document.createElement("option");
        op.setAttribute("value", "Izaberite vreme");
        op.innerHTML = "Izaberite vreme";
        combo2.appendChild(op);

        let sati = [10, 11, 12, 13, 14];
        let minuti = [0, 30];

        for (let i = 0; i < sati.length; i++) {
            let op1 = document.createElement("option");
            op1.setAttribute("value", `${sati[i]}:${minuti[0]}`);
            op1.innerHTML = `${sati[i]}:${minuti[0]}0`;
            combo2.appendChild(op1);
            let op2 = document.createElement("option");
            op2.setAttribute("value", `${sati[i]}:${minuti[1]}`);
            op2.innerHTML = `${sati[i]}:${minuti[1]}`;
            combo2.appendChild(op2);
        }

        //Dodavanje clasa
        div.classList.add("stilModal");
        div.classList.add("centrirano");
        divCentar.classList.add("centrirano")
        div2.classList.add("stilDiv2")

        //Dodavanje elemenata na stranicu
        div.appendChild(div2)
        div.appendChild(divCentar);
        div.appendChild(zatvori);
        divCentar.appendChild(div2)
        div2.appendChild(naslov);
        div2.appendChild(forma);
        forma.appendChild(x1)
        forma.appendChild(txtBox);
        forma.appendChild(x2)
        forma.appendChild(combo1);
        forma.appendChild(x3)
        forma.appendChild(combo2);
        forma.appendChild(dugme);
        forma.appendChild(x4);
        /* forma.appendChild(cBox); */
        document.body.appendChild(div);

        //Zatvaranje modala
        zatvori.addEventListener("click", () => {
            console.log("lmao")
            div.classList.add("zatvoriSliku");
            document.body.removeChild(div);
            otvorenModal = false;
        })

        dugme.addEventListener("click", () => {
            if (combo2.value == "Izaberite vreme") {
                x3.classList.remove("sakrij");
            }
            if (combo2.value != "Izaberite vreme") {
                x3.classList.add("sakrij");
            }
            let ime = txtBox.value;
            ime.replace(/\s\s+/g, ' ');
            if (!uzorakIme.test(ime)) {
                let poljeIme = document.getElementById('poljeImeD');
                if (ime == "" || !ime.trim()) {
                    poljeIme.innerHTML = "Niste popunili Ime i prezime!";
                }
                else {
                    poljeIme.innerHTML = "Pog??an unos imena i prezimena!";
                }
                poljeIme.classList.remove('sakrij');
            }
            if (uzorakIme.test(ime)) {
                let poljeIme = document.getElementById('poljeImeD');
                poljeIme.classList.add('sakrij');
            }
            if (isNaN(combo1.valueAsNumber)) {
                x2.classList.remove("sakrij")
            }
            if (!isNaN(combo1.valueAsNumber)) {
                x2.classList.add("sakrij");
            }

            if (combo2.value != "Izaberite vreme" && uzorakIme.test(ime) && !isNaN(combo1.valueAsNumber)) {
                x4.classList.remove("sakrij");
            }
            else {
                x4.classList.add("sakrij");
            }
        })
    }
});

let listaUsluga = document.getElementsByClassName("usluge");
console.log(listaUsluga)
for (let i = 0; i < listaUsluga.length; i++) {
    listaUsluga[i].addEventListener("mouseover", () => {
        listaUsluga[i].classList.add("senka");
    });
}
for (let i = 0; i < listaUsluga.length; i++) {
    listaUsluga[i].addEventListener("mouseout", () => {
        listaUsluga[i].classList.remove("senka");
    });
}

$(document).ready(function () {
    $('.your-class').slick({
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true
    });
});

let zeleneKartice = document.getElementsByClassName("promenaZeleno");
for (let i = 0; i < zeleneKartice.length; i++) {
    zeleneKartice[i].addEventListener("mouseover", () => {
        var lmao = document.getElementById(`contactItem${i + 1}`).style.backgroundColor = "#a4c639";
        var iTag = document.getElementById(`i${i + 1}`);
        iTag.classList.add("promenaSlovaZeleno");
        var spanTag = document.getElementById(`span${i + 1}`);
        spanTag.classList.add("promenaSlovaZeleno");
        var pTag = document.getElementById(`p${i + 1}`);
        pTag.classList.add("promenaSlovaZeleno");
    });
    zeleneKartice[i].addEventListener("mouseout", () => {
        var lmao = document.getElementById(`contactItem${i + 1}`).style.backgroundColor = "#f7f7f7";
        var iTag = document.getElementById(`i${i + 1}`);
        iTag.classList.remove("promenaSlovaZeleno");
        var spanTag = document.getElementById(`span${i + 1}`);
        spanTag.classList.remove("promenaSlovaZeleno");
        var pTag = document.getElementById(`p${i + 1}`);
        pTag.classList.remove("promenaSlovaZeleno");
    });
}

