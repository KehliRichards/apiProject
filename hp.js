let body = document.querySelector('body');
let nav = document.querySelector('nav');
let jumbotron = document.querySelector('.jumbotron');

let navbarBrand = document.querySelector('.navbar-brand');
let navbarItems = document.querySelectorAll('.nav-item');

let searchBar = document.querySelector('#searchBar');
let charSearch = document.querySelector('#charSearch');
let searchButton = document.querySelector('#searchButton');

let house = document.querySelector('#house');
let quote = document.querySelector('#quote');
let sortingHat = document.querySelector('#sortingHat');

let name = document.querySelector('#name');
let charHouse = document.querySelector('#charHouse');
let species = document.querySelector('#species');
let patronus = document.querySelector('#patronus');
let wand = document.querySelector('#wand');
let dob = document.querySelector('#dob');
let ancestry = document.querySelector('#ancestry');
let charImage = document.querySelector('#charImage');

let g = document.querySelector('#gryffindor');
let r = document.querySelector('#ravenclaw');
let h = document.querySelector('#hufflepuff');
let s = document.querySelector('#slytherin');

navbarBrand.addEventListener('click', pageChange = () => {
    jumbotron.style.backgroundImage='url(assets/hogwartsExpress.jpg)';
    body.style.backgroundImage='url(assets/red11.jpg)';
    nav.style.backgroundImage='url(assets/red.jpeg)';
    navbarBrand.style.color='rgb(226, 172, 34)';
    g.style.color='goldenrod';
    r.style.color='goldenrod';
    h.style.color='goldenrod';
    s.style.color='goldenrod';
    house.innerText= "";
    quote.innerText="";
    sortingHat.innerText="";
    name.style.color='goldenrod';
    charHouse.style.color='goldenrod';
    species.style.color='goldenrod';
    patronus.style.color='goldenrod';
    wand.style.color='goldenrod';
    dob.style.color='goldenrod';
    ancestry.style.color='goldenrod';
    name.innerText="";
    charHouse.innerText="";
    species.innerText="";
    patronus.innerText="";
    wand.innerText="";
    dob.innerText="";
    ancestry.innerText="";
    charImage.style.backgroundImage = "";
    charSearch.style.color='goldenrod';
})

g.addEventListener('click', pageChangeG = (G) => {
    jumbotron.style.backgroundImage='url(assets/gryffindor2.jpg)';
    body.style.backgroundImage='url(assets/red5.jpg)';
    nav.style.backgroundImage='url(assets/red1.jpg)';
    navbarBrand.style.color='rgb(226, 172, 34)';
    g.style.color='goldenrod';
    r.style.color='goldenrod';
    h.style.color='goldenrod';
    s.style.color='goldenrod';
    house.style.color='goldenrod';
    house.innerText= "Gryffindor";
    quote.style.color='goldenrod';
    quote.innerText="``You might belong in Gryffindor where dwell the brave at heart, their daring, nerve, and chivalry set Gryffindors apart.``"
    sortingHat.style.color='goldenrod';
    sortingHat.innerText="~The Sorting Hat";

    name.style.color='goldenrod';
    charHouse.style.color='goldenrod';
    species.style.color='goldenrod';
    patronus.style.color='goldenrod';
    wand.style.color='goldenrod';
    dob.style.color='goldenrod';
    ancestry.style.color='goldenrod';

    name.innerText="";
    charHouse.innerText="";
    species.innerText="";
    patronus.innerText="";
    wand.innerText="";
    dob.innerText="";
    ancestry.innerText="";
    charImage.style.backgroundImage = "";

    charSearch.style.color='rgb(226, 172, 34)';
});

r.addEventListener('click', pageChangeR = (R) => {
    jumbotron.style.backgroundImage='url(assets/ravenclaw.jpg)';
    body.style.backgroundImage='url(assets/blue1.jpg)';
    nav.style.backgroundImage='url(assets/blue1.jpg)';
    navbarBrand.style.color='silver';
    g.style.color='silver';
    r.style.color='silver';
    h.style.color='silver';
    s.style.color='silver';
    house.style.color='darkgrey';
    house.innerText= "Ravenclaw";
    quote.style.color='darkgrey';
    quote.innerText="``Or yet in wise old Ravenclaw if you`ve a ready mind, where those of wit and learning will always find their kind.``"
    sortingHat.style.color='darkgrey';
    sortingHat.innerText="~The Sorting Hat"

    name.style.color='darkgrey';
    charHouse.style.color='darkgrey';
    species.style.color='darkgrey';
    patronus.style.color='darkgrey';
    wand.style.color='darkgrey';
    dob.style.color='darkgrey';
    ancestry.style.color='darkgrey';

    name.innerText="";
    charHouse.innerText="";
    species.innerText="";
    patronus.innerText="";
    wand.innerText="";
    dob.innerText="";
    ancestry.innerText="";
    charImage.style.backgroundImage = "";

    charSearch.style.color='darkgrey';
});

h.addEventListener('click', pageChangeH = (H) => {
    jumbotron.style.backgroundImage='url(assets/hufflepuff.jpg)';
    body.style.backgroundImage='url(assets/Hufflepuff-Background.jpg)';
    nav.style.backgroundImage='url(assets/yellow2.jpg)';
    navbarBrand.style.color='black';
    g.style.color='black';
    r.style.color='black';
    h.style.color='black';
    s.style.color='black';
    house.style.color='black';
    house.innerText= "Hufflepuff";
    quote.style.color='black';
    quote.innerText="``You might belong in Hufflepuff where they are just and loyal, those patient Huhfflepuffs are true and unafraid of toil.``"
    sortingHat.style.color='black';
    sortingHat.innerText="~The Sorting Hat"

    name.style.color='black';
    charHouse.style.color='black';
    species.style.color='black';
    patronus.style.color='black';
    wand.style.color='black';
    dob.style.color='black';
    ancestry.style.color='black';

    name.innerText="";
    charHouse.innerText="";
    species.innerText="";
    patronus.innerText="";
    wand.innerText="";
    dob.innerText="";
    ancestry.innerText="";
    charImage.style.backgroundImage = "";

    charSearch.style.color='black';
});

s.addEventListener('click', pageChangeS = (S) => {
    jumbotron.style.backgroundImage='url(assets/slytherin1.jpg)';
    body.style.backgroundImage='url(assets/green1.jpg)';
    nav.style.backgroundImage='url(assets/green1.jpg)';
    navbarBrand.style.color='silver';
    g.style.color='silver';
    r.style.color='silver';
    h.style.color='silver';
    s.style.color='silver';
    house.style.color='darkgrey';
    house.innerText= "Slytherin";
    quote.style.color='darkgrey';
    quote.innerText="``Or perhaps in slytherin you`ll make your real friends, those cunning folk use any means to achieve their ends.``"
    sortingHat.style.color='darkgrey';
    sortingHat.innerText="~The Sorting Hat"

    name.style.color='darkgrey';
    charHouse.style.color='darkgrey';
    species.style.color='darkgrey';
    patronus.style.color='darkgrey';
    wand.style.color='darkgrey';
    dob.style.color='darkgrey';
    ancestry.style.color='darkgrey';

    name.innerText="";
    charHouse.innerText="";
    species.innerText="";
    patronus.innerText="";
    wand.innerText="";
    dob.innerText="";
    ancestry.innerText="";
    charImage.style.backgroundImage = "";

    charSearch.style.color='darkgrey';
    // console.log('hey');
});



fetch('https://hp-api.herokuapp.com/api/characters')
.then(function(response){
    return response.json();
})
.then(function(json) {
    console.log(json);
    // let y = json;
// });

searchButton.addEventListener('click', search = () => {
    let search = searchBar.value.toLowerCase();
    // searchBar.value = "";
    if (search === 'harry potter' || search === 'harry') {
        // console.log(json[0].name);
        pageChangeG();
        name.innerText = json[0].name;
        charHouse.innerText = 'House:' + ' ' + json[0].house;
        species.innerText = 'Species:' + ' ' + json[0].species;
        patronus.innerText = 'Patronus:' + ' ' + json[0].patronus;
        wand.innerText = 'Wand:' + ' ' + json[0].wand.wood + ',' + ' ' + json[0].wand.core + ',' + ' ' + json[0].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[0].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[0].ancestry;

        charImage.style.backgroundImage = 'url('+json[0].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';
        // charImage.style.height = '475px';
        // charImage.style.width = 'auto';

        searchBar.value = "";
    } else if (search === 'hermione' || search === 'hermione granger') {
        pageChangeG();
        name.innerText = json[1].name;
        charHouse.innerText = 'House:' + ' ' + json[1].house;
        species.innerText = 'Species:' + ' ' + json[1].species;
        patronus.innerText = 'Patronus:' + ' ' + json[1].patronus;
        wand.innerText = 'Wand:' + ' ' + json[1].wand.wood + ',' + ' ' + json[1].wand.core + ',' + ' ' + json[1].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[1].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[1].ancestry;

        charImage.style.backgroundImage = 'url('+json[1].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'ron' || search === 'ron weasley') {
        pageChangeG();
        name.innerText = json[2].name;
        charHouse.innerText = 'House:' + ' ' + json[2].house;
        species.innerText = 'Species:' + ' ' + json[2].species;
        patronus.innerText = 'Patronus:' + ' ' + json[2].patronus;
        wand.innerText = 'Wand:' + ' ' + json[2].wand.wood + ',' + ' ' + json[2].wand.core + ',' + ' ' + json[2].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[2].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[2].ancestry;

        charImage.style.backgroundImage = 'url('+json[2].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'draco' || search === 'draco malfoy' || search === 'malfoy') {
        pageChangeS();
        name.innerText = json[3].name;
        charHouse.innerText = 'House:' + ' ' + json[3].house;
        species.innerText = 'Species:' + ' ' + json[3].species;
        patronus.innerText = 'Patronus:' + ' ' + json[3].patronus;
        wand.innerText = 'Wand:' + ' ' + json[3].wand.wood + ',' + ' ' + json[3].wand.core + ',' + ' ' + json[3].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[3].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[3].ancestry;

        charImage.style.backgroundImage = 'url('+json[3].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'minerva' || search === 'mcgonagall' || search === 'minerva mcgonagall' || search === 'professor mcgonagall') {
        pageChangeG();
        name.innerText = json[4].name;
        charHouse.innerText = 'House:' + ' ' + json[4].house;
        species.innerText = 'Species:' + ' ' + json[4].species;
        patronus.innerText = 'Patronus:' + ' ' + json[4].patronus;
        wand.innerText = 'Wand:' + ' ' + json[4].wand.wood + ',' + ' ' + json[4].wand.core + ',' + ' ' + json[4].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[4].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[4].ancestry;

        charImage.style.backgroundImage = 'url('+json[4].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'cedric' || search === 'cedric diggory') {
        pageChangeH();
        name.innerText = json[5].name;
        charHouse.innerText = 'House:' + ' ' + json[5].house;
        species.innerText = 'Species:' + ' ' + json[5].species;
        patronus.innerText = 'Patronus:' + ' ' + json[5].patronus;
        wand.innerText = 'Wand:' + ' ' + json[5].wand.wood + ',' + ' ' + json[5].wand.core + ',' + ' ' + json[5].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[5].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[5].ancestry;

        charImage.style.backgroundImage = 'url('+json[5].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'cho' || search === 'cho chang') {
        pageChangeR();
        name.innerText = json[6].name;
        charHouse.innerText = 'House:' + ' ' + json[6].house;
        species.innerText = 'Species:' + ' ' + json[6].species;
        patronus.innerText = 'Patronus:' + ' ' + json[6].patronus;
        wand.innerText = 'Wand:' + ' ' + json[6].wand.wood + ',' + ' ' + json[6].wand.core + ',' + ' ' + json[6].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[6].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[6].ancestry;

        charImage.style.backgroundImage = 'url('+json[6].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'severus' || search === 'snape' || search === 'severus snape' || search === 'professor snape') {
        pageChangeS();
        name.innerText = json[7].name;
        charHouse.innerText = 'House:' + ' ' + json[7].house;
        species.innerText = 'Species:' + ' ' + json[7].species;
        patronus.innerText = 'Patronus:' + ' ' + json[7].patronus;
        wand.innerText = 'Wand:' + ' ' + json[7].wand.wood + ',' + ' ' + json[7].wand.core + ',' + ' ' + json[7].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[7].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[7].ancestry;

        charImage.style.backgroundImage = 'url('+json[7].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'rubeus' || search === 'hagrid' || search === 'rubeus hagrid') {
        pageChangeG();
        name.innerText = json[8].name;
        charHouse.innerText = 'House:' + ' ' + json[8].house;
        species.innerText = 'Species:' + ' ' + json[8].species;
        patronus.innerText = 'Patronus:' + ' ' + json[8].patronus;
        wand.innerText = 'Wand:' + ' ' + json[8].wand.wood + ',' + ' ' + json[8].wand.core + ',' + ' ' + json[8].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[8].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[8].ancestry;

        charImage.style.backgroundImage = 'url('+json[8].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'neville' || search === 'neville longbottom') {
        pageChangeG();
        name.innerText = json[9].name;
        charHouse.innerText = 'House:' + ' ' + json[9].house;
        species.innerText = 'Species:' + ' ' + json[9].species;
        patronus.innerText = 'Patronus:' + ' ' + json[9].patronus;
        wand.innerText = 'Wand:' + ' ' + json[9].wand.wood + ',' + ' ' + json[9].wand.core + ',' + ' ' + json[9].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[9].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[9].ancestry;

        charImage.style.backgroundImage = 'url('+json[9].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'luna' || search === 'luna lovegood') {
        pageChangeR();
        name.innerText = json[10].name;
        charHouse.innerText = 'House:' + ' ' + json[10].house;
        species.innerText = 'Species:' + ' ' + json[10].species;
        patronus.innerText = 'Patronus:' + ' ' + json[10].patronus;
        wand.innerText = 'Wand:' + ' ' + json[10].wand.wood + ',' + ' ' + json[10].wand.core + ',' + ' ' + json[10].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[10].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[10].ancestry;

        charImage.style.backgroundImage = 'url('+json[10].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'ginny' || search === 'ginny weasley') {
        pageChangeG();
        name.innerText = json[11].name;
        charHouse.innerText = 'House:' + ' ' + json[11].house;
        species.innerText = 'Species:' + ' ' + json[11].species;
        patronus.innerText = 'Patronus:' + ' ' + json[11].patronus;
        wand.innerText = 'Wand:' + ' ' + json[11].wand.wood + ',' + ' ' + json[11].wand.core + ',' + ' ' + json[11].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[11].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[11].ancestry;

        charImage.style.backgroundImage = 'url('+json[11].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'sirius' || search === 'sirius black') {
        pageChangeG();
        name.innerText = json[12].name;
        charHouse.innerText = 'House:' + ' ' + json[12].house;
        species.innerText = 'Species:' + ' ' + json[12].species;
        patronus.innerText = 'Patronus:' + ' ' + json[12].patronus;
        wand.innerText = 'Wand:' + ' ' + json[12].wand.wood + ',' + ' ' + json[12].wand.core + ',' + ' ' + json[12].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[12].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[12].ancestry;

        charImage.style.backgroundImage = 'url('+json[12].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'remus' || search === 'lupin' || search === 'remus lupin' || search === 'professor lupin') {
        pageChangeG();
        name.innerText = json[13].name;
        charHouse.innerText = 'House:' + ' ' + json[13].house;
        species.innerText = 'Species:' + ' ' + json[13].species;
        patronus.innerText = 'Patronus:' + ' ' + json[13].patronus;
        wand.innerText = 'Wand:' + ' ' + json[13].wand.wood + ',' + ' ' + json[13].wand.core + ',' + ' ' + json[13].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[13].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[13].ancestry;

        charImage.style.backgroundImage = 'url('+json[13].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'arthur' || search === 'arthur weasley') {
        pageChangeG();
        name.innerText = json[14].name;
        charHouse.innerText = 'House:' + ' ' + json[14].house;
        species.innerText = 'Species:' + ' ' + json[14].species;
        patronus.innerText = 'Patronus:' + ' ' + json[14].patronus;
        wand.innerText = 'Wand:' + ' ' + json[14].wand.wood + ',' + ' ' + json[14].wand.core + ',' + ' ' + json[14].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[14].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[14].ancestry;

        charImage.style.backgroundImage = 'url('+json[14].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'bellatrix' || search === 'bellatrix lestrange') {
        pageChangeS();
        name.innerText = json[15].name;
        charHouse.innerText = 'House:' + ' ' + json[15].house;
        species.innerText = 'Species:' + ' ' + json[15].species;
        patronus.innerText = 'Patronus:' + ' ' + json[15].patronus;
        wand.innerText = 'Wand:' + ' ' + json[15].wand.wood + ',' + ' ' + json[15].wand.core + ',' + ' ' + json[15].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[15].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[15].ancestry;

        charImage.style.backgroundImage = 'url('+json[15].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'voldemort' || search === 'lord voldemort') {
        pageChangeS();
        name.innerText = json[16].name;
        charHouse.innerText = 'House:' + ' ' + json[16].house;
        species.innerText = 'Species:' + ' ' + json[16].species;
        patronus.innerText = 'Patronus:' + ' ' + json[16].patronus;
        wand.innerText = 'Wand:' + ' ' + json[16].wand.wood + ',' + ' ' + json[16].wand.core + ',' + ' ' + json[16].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[16].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[16].ancestry;

        charImage.style.backgroundImage = 'url('+json[16].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'horace' || search === 'slughorn' || search === 'horace slughorn' || search === 'professor slughorn') {
        pageChangeS();
        name.innerText = json[17].name;
        charHouse.innerText = 'House:' + ' ' + json[17].house;
        species.innerText = 'Species:' + ' ' + json[17].species;
        patronus.innerText = 'Patronus:' + ' ' + json[17].patronus;
        wand.innerText = 'Wand:' + ' ' + json[17].wand.wood + ',' + ' ' + json[17].wand.core + ',' + ' ' + json[17].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[17].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[17].ancestry;

        charImage.style.backgroundImage = 'url('+json[17].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'kingsley' || search === 'kingsley shacklebolt') {
        pageChange();
        name.innerText = json[18].name;
        charHouse.innerText = 'House:' + ' ' + json[18].house;
        species.innerText = 'Species:' + ' ' + json[18].species;
        patronus.innerText = 'Patronus:' + ' ' + json[18].patronus;
        wand.innerText = 'Wand:' + ' ' + json[18].wand.wood + ',' + ' ' + json[18].wand.core + ',' + ' ' + json[18].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[18].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[18].ancestry;

        charImage.style.backgroundImage = 'url('+json[18].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'dolores' || search === 'umbridge' || search === 'dolores umbridge' || search === 'professor umbridge') {
        pageChangeS();
        name.innerText = json[19].name;
        charHouse.innerText = 'House:' + ' ' + json[19].house;
        species.innerText = 'Species:' + ' ' + json[19].species;
        patronus.innerText = 'Patronus:' + ' ' + json[19].patronus;
        wand.innerText = 'Wand:' + ' ' + json[19].wand.wood + ',' + ' ' + json[19].wand.core + ',' + ' ' + json[19].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[19].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[19].ancestry;

        charImage.style.backgroundImage = 'url('+json[19].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'lucius' || search === 'lucius malfoy') {
        pageChangeS();
        name.innerText = json[20].name;
        charHouse.innerText = 'House:' + ' ' + json[20].house;
        species.innerText = 'Species:' + ' ' + json[20].species;
        patronus.innerText = 'Patronus:' + ' ' + json[20].patronus;
        wand.innerText = 'Wand:' + ' ' + json[20].wand.wood + ',' + ' ' + json[20].wand.core + ',' + ' ' + json[20].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[20].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[20].ancestry;

        charImage.style.backgroundImage = 'url('+json[20].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'vincent' || search === 'vincent crabbe' || search === 'crabbe') {
        pageChangeS();
        name.innerText = json[21].name;
        charHouse.innerText = 'House:' + ' ' + json[21].house;
        species.innerText = 'Species:' + ' ' + json[21].species;
        patronus.innerText = 'Patronus:' + ' ' + json[21].patronus;
        wand.innerText = 'Wand:' + ' ' + json[21].wand.wood + ',' + ' ' + json[21].wand.core + ',' + ' ' + json[21].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[21].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[21].ancestry;

        charImage.style.backgroundImage = 'url('+json[21].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'gregory' || search === 'gregory goyle' || search === 'goyle') {
        pageChangeS();
        name.innerText = json[22].name;
        charHouse.innerText = 'House:' + ' ' + json[22].house;
        species.innerText = 'Species:' + ' ' + json[22].species;
        patronus.innerText = 'Patronus:' + ' ' + json[22].patronus;
        wand.innerText = 'Wand:' + ' ' + json[22].wand.wood + ',' + ' ' + json[22].wand.core + ',' + ' ' + json[22].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[22].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[22].ancestry;

        charImage.style.backgroundImage = 'url('+json[22].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'mrs norris' || search === 'mrs. norris' || search === 'norris') {
        pageChange();
        name.innerText = json[23].name;
        charHouse.innerText = 'House:' + ' ' + json[23].house;
        species.innerText = 'Species:' + ' ' + json[23].species;
        patronus.innerText = 'Patronus:' + ' ' + json[23].patronus;
        wand.innerText = 'Wand:' + ' ' + json[23].wand.wood + ',' + ' ' + json[23].wand.core + ',' + ' ' + json[23].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[23].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[23].ancestry;

        charImage.style.backgroundImage = 'url('+json[23].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else if (search === 'mr filch' || search === 'filch') {
        pageChange();
        name.innerText = json[24].name;
        charHouse.innerText = 'House:' + ' ' + json[24].house;
        species.innerText = 'Species:' + ' ' + json[24].species;
        patronus.innerText = 'Patronus:' + ' ' + json[24].patronus;
        wand.innerText = 'Wand:' + ' ' + json[24].wand.wood + ',' + ' ' + json[24].wand.core + ',' + ' ' + json[24].wand.length + '"';
        dob.innerText = 'DOB:' + ' ' + json[24].dateOfBirth;
        ancestry.innerText = 'Ancestry:' + ' ' + json[24].ancestry;

        charImage.style.backgroundImage = 'url('+json[24].image+')';
        charImage.style.backgroundRepeat = 'no-repeat';

        searchBar.value = "";
    } else {
        pageChange();
        searchBar.value = "";
    }

});

});


























// Callback = function inside a parameter
// fetch('http://hp-api.herokuapp.com/api/characters')
// .then(function(response){
//     return response.json();
// })
// .then(function(json) {
//     console.log(json);
// });