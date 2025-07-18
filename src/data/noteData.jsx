import smolaImg from '../assets/smola.png';
import tamjanImg from '../assets/tamjan.png';
import ruzaImg from '../assets/ruza.png';
import jasminImg from '../assets/jasmin.png';
import malinaImg from '../assets/malina.png';
import kruskaImg from '../assets/kruska.png';
import kedarImg from '../assets/kedrovina.png';
import oudImg from '../assets/oud.png';

export const noteCategories = [
    {
            title: "Amber & Začinjeno",
            color: "#4a2e1d",
            notes: [
                { name: "Mirisna smola", img: smolaImg, desc: "Mirisna smola, privlačan miris. Ovaj jantarna, smolasta aroma s blagim notama anisa donosi dubinu i samopouzdanje u vaš život. Zagrijava kožu i ostavlja nezaboravan utisak svojom jedinstvenom privlačnošću za onoga ko je nosi.", intensity: 8, longevity: 8 },
                { name: "Tamjan", img: tamjanImg, desc: "Tamjan, misteriozan miris. Dubok i topao, ovaj miris ispunjava vas osjećajem smirenosti i mudrosti. Otkriva vašu mističnu i privlačnu stranu, te plijeni pažnju drugih svojom bogatom privlačnošću.", intensity: 9, longevity: 9 }
            ]
        },
        {
            title: "Cvjetno & Nježno",
            color: "#9d224e",
            notes: [
                { name: "Ruža", img: ruzaImg, desc: "Ruža, romantičan miris. Vječan, svjež i nježan, ovaj miris pruža savršen balans svjetlosti i elegancije. Zrači samopouzdanjem i čini ga savršenim za sofisticirane prilike.", intensity: 10, longevity: 10 },
                { name: "Jasmin", img: jasminImg, desc: "Jasmin, svijetli miris. Sadrži delikatne i svijetle bijele cvjetne note, savršeno pomiješane s mošusnim podtonovima. Ovaj miris je pravi primjer privlačnih cvjetnih aroma.", intensity: 8, longevity: 8 }
            ]
        },
        {
            title: "Slatkasti & Ukusni",
            color: "#68141E",
            notes: [
                { name: "Malina", img: malinaImg, desc: "Malina, neodoljiv miris. Svjež, voćni i sladak, s nježnim puderastim podtonovima, ovaj miris je pravi nektar mladosti. Donosi radost u vaš život uz pozitivnu i osvježavajuću energiju.", intensity: 8, longevity: 8 },
                { name: "Kruška", img: kruskaImg, desc: "Kruška, osvježavajući miris. Voćne, zelene i slatke note stvaraju ugodan i osvježavajući miris koji zrači srećom i energijom. Otvorite vrata svojoj radosnoj strani i proslavite svoju jedinstvenu harizmu.", intensity: 7, longevity: 7 }
            ]
        },
        {
            title: "Drvenasto & Temeljno",
            color: "#3d342e",
            notes: [
                { name: "Kedar", img: kedarImg, desc: "Kedar, privlačan miris. Ovaj živahan i drvenast miris ostavlja jedinstven dojam koji traje zauvijek. Njegova bezvremenska privlačnost savršen je dodatak vašem osobnom stilu.", intensity: 9, longevity: 9 },
                { name: "Oud", img: oudImg, desc: "Oud, veličanstven miris. Sa svojim dubokim, animalnim i drvenastim notama, ovaj miris donosi snažnu auru u vaš život i nudi beskrajnu fascinaciju. Usudite se prigrliti svoju izvanrednu stranu, budite hrabri i neukrotivi.", intensity: 10, longevity: 10 }
            ]
        }
];