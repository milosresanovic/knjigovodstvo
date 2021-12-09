
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
    let skrol = window.scrollY;
    console.log(skrol)
    if (skrol > 1200 && pokrenutoKaunter == false) {
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

    $("scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    if (skrol > 1870 && pokrenutoFejd == false) {
        pokrenutoFejd = true;
        $(document).ready(function () {
            $(".fade-right").animate({ right: 0, opacity: "show" }, 1500);
            $(".fade-left").animate({ left: 0, opacity: "show" }, 1500);
        });
    }

    if (skrol > 900) {
        let vratiGore = document.getElementById("vratiGore");
        vratiGore.classList.remove("sakrijBackToTop");
    }
    else {
        let vratiGore = document.getElementById("vratiGore");
        vratiGore.classList.add("sakrijBackToTop");
    }

})

let uzorakIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})\s*$/;

let txtIme = document.getElementById('name');
txtIme.addEventListener('blur', proveriIme);
function proveriIme() {
    let ime = txtIme.value;
    ime.replace(/\s\s+/g, ' ');
    if (!uzorakIme.test(ime)) {
        let poljeIme = document.getElementById('upozorenjeIme');
        if (ime == "" || !ime.trim()) {
            poljeIme.innerHTML = "Niste popunili Ime i prezime!";
        }
        else {
            poljeIme.innerHTML = "Pogšan unos imena i prezimena!";
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
function proveriEmail(){
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

let forma=document.getElementById("form-submit");
forma.addEventListener("click", ()=>{
    let combo=document.getElementById("selektujTemu");
    let comboRez=combo.value;
    let txt=document.getElementById("message").value
    let m1=proveriIme();
    let m2=proveriEmail();
    if(comboRez==""){
        document.getElementById("upozorenjeTema").classList.remove("sakrij");
    }
    else{
        document.getElementById("upozorenjeTema").classList.add("sakrij");
    }
    if(comboRez!="" &&  txt!="" && proveriEmail() && proveriIme()){
        console.log("ide gas na maskaru")
        document.getElementById("upozorenjeText").classList.add("sakrij");
        document.getElementById("upozorenjeText").classList.add("sakrij");
    }
    else if(txt==""){
        document.getElementById("upozorenjeText").classList.remove("sakrij");
    }
    else if(txt!=""){
        document.getElementById("upozorenjeText").classList.add("sakrij");
    }
    else if(comboRez==""){
        document.getElementById("upozorenjeTema").classList.remove("sakrij");
    }
    else if(comboRez!=""){
        document.getElementById("upozorenjeText").classList.add("sakrij");
    }
    else if(!proveraIme()){
        proveriIme();
        
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
        let dugme = document.createElement("button")
        dugme.setAttribute("type", "submit")
        dugme.setAttribute("class", "dugmeForma")
        dugme.setAttribute("value", "Pošalji")
        dugme.textContent = "Posalji"
        let danasnjiDatum = new Date();
        let god = danasnjiDatum.getFullYear();
        let mesec = danasnjiDatum.getMonth() + 1;
        let dan = danasnjiDatum.getDate();
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
        /* forma.appendChild(cBox); */
        document.body.appendChild(div);

        //Zatvaranje modala
        zatvori.addEventListener("click", () => {
            console.log("lmao")
            div.classList.add("zatvoriSliku");
            document.body.removeChild(div);
            otvorenModal = false;
        })
        txtBox.addEventListener('blur', () => {
            let ime = txtBox.value;
            ime.replace(/\s\s+/g, ' ');
            if (!uzorakIme.test(ime)) {
                let poljeIme = document.getElementById('poljeImeD');
                if (ime == "" || !ime.trim()) {
                    poljeIme.innerHTML = "Niste popunili Ime i prezime!";
                }
                else {
                    poljeIme.innerHTML = "Pogšan unos imena i prezimena!";
                }
                poljeIme.classList.remove('sakrij');
            }
            if (uzorakIme.test(ime)) {
                let poljeIme = document.getElementById('poljeImeD');
                poljeIme.classList.add('sakrij');
            }
        })
    }
});



/* txtBox.addEventListener('blur', proveriIme);
 */


/* proba modala */
