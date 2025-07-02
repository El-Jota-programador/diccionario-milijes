const svgNS = "http://www.w3.org/2000/svg";

/*const a = document.createElement(SVGPathElement);
a.setAttribute("d", "M18 63 L30 45 L55 45");

const b = document.createElement(SVGPathElement);
b.setAttribute("d", "M20 10 L20 60 M20 35 Q40 30 40 60");

const c = document.createElement(SVGPathElement);
c.setAttribute("d", "M46.5 20 Q25 1 9.8 22 Q3 33 9 43 Q25 64 46.5 45");

const d = document.createElement(SVGPathElement);
d.setAttribute("d", "M20 10 L20 55 Q40 50 40 30");

const e = document.createElement(SVGPathElement);
e.setAttribute("d", "M20 10 L20 60 M20 35 L43 35");

const f = document.createElement(SVGPathElement);
f.setAttribute("d", "M20 10 L40 10 40 60 M40 23.33333333333333333333333333333333 L60 23.33333333333333333333333333333333");

const gue = document.createElement(SVGPathElement);
gue.setAttribute("d", "M50 20 A15 15 0 0 0 20 20 L20 60 M50 60 L50 40 40 40");

const gh = document.createElement(SVGPathElement);
gh.setAttribute("d", "M20 30 L20 56 40 56 Q40 33 60 33");

const lij = document.createElementNS(svgNS, "g");
const lij1 = document.createElementNS(svgNS, "path")
lij1.setAttribute("d", "M20 55 L5 55 L5 10 L45 10 A5 5 90 0 1 45 30");
lij1.setAttribute("stroke-width", "7.5");
const lij2 = document.createElementNS(svgNS, "path")
lij2.setAttribute("d", "M7 6 L7 10");
lij2.setAttribute("stroke-width", "5");
lij.appendChild(lij1);
lij.appendChild(lij2);

const i = document.createElement(SVGPathElement);
i.setAttribute("d", "M20 55 L60 55 M40 40 L40 20");

const j = document.createElement(SVGPathElement);
j.setAttribute("d", "M20 10 L50 10 L50 60 M24 60 L24 45");

const k = document.createElement(SVGPathElement);
k.setAttribute("d", "M20 10 L20 60 M48 22 Q35 28 35 40 Q38 53 50 45");

const l = document.createElement(SVGPathElement);
l.setAttribute("d", "M20 40 L20 55 52.5 55");

const m = document.createElement(SVGPathElement);
m.setAttribute("d", "M20 10 20 60 M35 23 L45 33 L55 23");

const n = document.createElement(SVGPathElement);
n.setAttribute("d", "M8 -4 L50 64");

const o = document.createElement(SVGEllipseElement);
o.setAttribute("cx", "30");
o.setAttribute("cy", "30");
o.setAttribute("rx", "15");
o.setAttribute("ry", "20");

const p = document.createElement(SVGPathElement);
p.setAttribute("d", "M20 60 L20 10 Q45 10 45 32.5");

const r = document.createElement(SVGPathElement);
r.setAttribute("d", "M20 10 L20 60 M35 40 L50 65");

const s = document.createElement(SVGPathElement);
s.setAttribute("d", "M18 56 L30 56 L30 27.5 A12.5 12.5 0 0 1 55 27.5 L55 60");

const t = document.createElement(SVGPathElement);
t.setAttribute("d", "M20 60 L20 14 45 14");

const u = document.createElement(SVGPathElement);
u.setAttribute("d", "M20 10 L20 45 Q20 56 37 56");

const ch = document.createElement(SVGPathElement);
ch.setAttribute("d", "M30 10 L30 60 M50 20 L50 34 L28 34 A15 15 0 0 0 10 48.6666666666666666666666");

const letras = [a, b, c, d, e, f, gue, gh, i, j, k, l, m, n, o, p, r, s, t, u, ch];*/

function svg(letra) {
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 60 60");
    svg.setAttribute("width", "1em");
    svg.setAttribute("height", "1em");
    svg.appendChild(letra.cloneNode(true)); // Clona el elemento para evitar moverlo del array
    return svg;
}

const diccionario = [
    {palabra: "a", traduccion: "a", pronunciacion: "/a/", definicion: ""},
    {palabra: "abajo", traduccion: "bilo", pronunciacion: "/'bilo/", definicion: ""},
    {palabra: "abandonar", traduccion: "astofa", pronunciacion: "/asto'fa/", definicion: "", conjugación: {
        infinitivo: "astofa",
        conjugado: "asto"
    }},
    {palabra: "abandono", traduccion: "astro", pronunciacion: "/'asto/", definicion: ""},
    {palabra: "abanicar", traduccion: "fanfa", pronunciacion: "/fan'fa/", definicion: "", conjugación: {
        infinitivo: "fanfa",
        conjugado: "fan"
    }},
    {palabra: "abanico", traduccion: "fan", pronunciacion: "/fan/", definicion: ""},
    {palabra: "abdominal", traduccion: "estar", pronunciacion: "/'astaɾ/", definicion: ""},
    {palabra: "abecedario", traduccion: "Ch-Lij", pronunciacion: "/'t͡ʃeliʒ/", definicion: ""},
    {palabra: "abeja", traduccion: "nosi", pronunciacion: "/'nosi/", definicion: ""},
    {palabra: "ablandar", traduccion: "esuafa", pronunciacion: "/esua'fa/", definicion: "", conjugación: {
        infinitivo: "esuafa",
        conjugado: "esua"
    }},
    {palabra: "abofetear", traduccion: "tiakafa", pronunciacion: "/tiaka'fa/", definicion: "", conjugación: {
        infinitivo: "tiakafa",
        conjugado: "tiaka"
    }},
    {palabra: "abrazar", traduccion: "sangafa", pronunciacion: "/sanga'fa/", definicion: "", conjugación: {
        infinitivo: "sangafa",
        conjugado: "sanga"
    }},
    {palabra: "abrazo", traduccion: "sangra", pronunciacion: "/'sanga/", definicion: ""},
    {palabra: "abrigo", traduccion: "palto", pronunciacion: "/'palto/", definicion: ""},
    {palabra: "abril", traduccion: "serral", pronunciacion: "/'seral/", definicion: ""},
    {palabra: "abrir", traduccion: "daralfa", pronunciacion: "/daɾal'fa/", definicion: "", conjugación: {
        infinitivo: "daralfa",
        conjugado: "daral"
    }},
    {palabra: "abuela", traduccion: "amama", pronunciacion: "/a'mama/", definicion: ""},
    {palabra: "abuelo", traduccion: "apapa", pronunciacion: "/a'papa/", definicion: ""},
    {palabra: "aburrimiento", traduccion: "jiche", pronunciacion: "/'ʒit͡ʃe/", definicion: ""},
    {palabra: "acabar", traduccion: "iatafa", pronunciacion: "/iata'fa/", definicion: "", conjugación: {
        infinitivo: "iatafa",
        conjugado: "iata"
    }},
    {palabra: "acariciar", traduccion: "gafa", pronunciacion: "/ga'fa/", definicion: "", conjugación: {
        infinitivo: "gafa",
        conjugado: "ga"
    }},
    {palabra: "accidente", traduccion: "kras", pronunciacion: "/kras/", definicion: ""},
    {palabra: "aceite", traduccion: "bacua", pronunciacion: "/ba'θua/", definicion: ""},
    {palabra: "aceptar", traduccion: "okifa", pronunciacion: "/oki'fa/", definicion: "", conjugación: {
        infinitivo: "okifa",
        conjugado: "oki"
    }},
    {palabra: "acero", traduccion: "erreo", pronunciacion: "/e'reo/", definicion: ""},
    {palabra: "ácido", traduccion: "kise", pronunciacion: "/'kise/", definicion: ""},
    {palabra: "acompañar", traduccion: "kontifa", pronunciacion: "/konti'fa/", definicion: "", conjugación: {
        infinitivo: "kontifa",
        conjugado: "konti"
    }},
    {palabra: "adelante", traduccion: "foraut", pronunciacion: "/fo'ɾaut/", definicion: ""},
    {palabra: "adicto", traduccion: "nocadea", pronunciacion: "/noθa'dea/", definicion: ""},
    {palabra: "adiós", traduccion: "kadei", pronunciacion: "/ka'ðei/", definicion: ""},
    {palabra: "adivino", traduccion: "beitet", pronunciacion: "/be'itet/", definicion: ""},
    {palabra: "adolescente", traduccion: "efibo", pronunciacion: "/e'fiβo/", definicion: ""},
    {palabra: "adoptar", traduccion: "dakatifa", pronunciacion: "/dakati'fa/", definicion: "", conjugación: {
        infinitivo: "dakatifa",
        conjugado: "dakati"
    }},
    {palabra: "adorno", traduccion: "ornament", pronunciacion: "/or'nament/", definicion: ""},
    {palabra: "adquirir", traduccion: "decupefa", pronunciacion: "/deθupe'fa/", definicion: "", conjugación: {
        infinitivo: "decupefa",
        conjugado: "decupe"
    }},
    {palabra: "adulto", traduccion: "enilikas", pronunciacion: "/eni'likas/", definicion: ""},
    {palabra: "aéreo", traduccion: "aried", pronunciacion: "/a'ɾied/", definicion: ""},
    {palabra: "aerodinámico", traduccion: "ariteel", pronunciacion: "/aɾi'teel/", definicion: ""},
    {palabra: "aeropuerto", traduccion: "aritace", pronunciacion: "/aɾi'taθe/", definicion: ""},
    {palabra: "afectado", traduccion: "abanio", pronunciacion: "/aβa'nio/", definicion: ""},
    {palabra: "afectar", traduccion: "abafa", pronunciacion: "/aβa'fa/", definicion: "", conjugación: {
        infinitivo: "abafa",
        conjugado: "aba"
    }},
    {palabra: "aferrar", traduccion: "bamafa", pronunciacion: "/bama'fa/", definicion: "", conjugación: {
        infinitivo: "bamafa",
        conjugado: "bama"
    }},
    {palabra: "afición", traduccion: "somprug", pronunciacion: "/'sompɾug/", definicion: ""},
    {palabra: "aficionado", traduccion: "somprugo", pronunciacion: "/som'pɾugo/", definicion: ""},
    {palabra: "aficionar", traduccion: "somfa", pronunciacion: "/som'fa/", definicion: "", conjugación: {
        infinitivo: "somfa",
        conjugado: "som"
    }},
    {palabra: "afilad@", traduccion: "teghni", pronunciacion: "/'texni/", definicion: ""},
    {palabra: "aguacate", traduccion: "puchei", pronunciacion: "/pu't͡ʃei/", definicion: ""},
    {palabra: "ahora", traduccion: "gora", pronunciacion: "/'goɾa/", definicion: ""},
    {palabra: "ajo", traduccion: "ora", pronunciacion: "/'oɾa/", definicion: ""},
    {palabra: "alto", traduccion: "pran", pronunciacion: "/pɾan/", definicion: ""},
    {palabra: "allí", traduccion: "tere", pronunciacion: "/'teɾe/", definicion: ""},
    {palabra: "amarillo", traduccion: "gel", pronunciacion: "/gel/", definicion: ""},
    {palabra: "amistad", traduccion: "fralito", pronunciacion: "/fɾa'lito/", definicion: ""},
    {palabra: "amor", traduccion: "aime", pronunciacion: "/'aime/", definicion: ""},
    {palabra: "anacardo", traduccion: "nacar", pronunciacion: "/'nacaɾ/", definicion: ""},
    {palabra: "antes", traduccion: "abem", pronunciacion: "/'aβem/", definicion: ""},
    {palabra: "año", traduccion: "ani", pronunciacion: "/'ani/", definicion: ""},
    {palabra: "aquí", traduccion: "jere", pronunciacion: "/'ʒeɾe/", definicion: ""},
    {palabra: "arándano", traduccion: "besen", pronunciacion: "/'besen/", definicion: ""},
    {palabra: "así", traduccion: "nika", pronunciacion: "/'nika/", definicion: ""},
    {palabra: "avellana", traduccion: "malte", pronunciacion: "/'malte/", definicion: ""},
    {palabra: "ayer", traduccion: "abemagora", pronunciacion: "/aβema'ɣoɾa/", definicion: ""},
    {palabra: "azul", traduccion: "bren", pronunciacion: "/bɾen/", definicion: ""},
    {palabra: "baj@", traduccion: "bilo", pronunciacion: "/'bilo/", definicion: ""},
    {palabra: "bisabuela", traduccion: "sekonien amama", pronunciacion: "/seko'nien a'mama/", definicion: ""},
    {palabra: "bisabuelo", traduccion: "sekonien apapa", pronunciacion: "/seko'nien a'papa/", definicion: ""},
    {palabra: "blanco", traduccion: "uit", pronunciacion: "/'uit/", definicion: ""},
    {palabra: "buen@", traduccion: "amba", pronunciacion: "/'amba/", definicion: ""},
    {palabra: "cagar", traduccion: "losufa", pronunciacion: "/losu'fa/", definicion: "", conjugación: {
        infinitivo: "losufa",
        conjugado: "losu"
    }},
    {palabra: "capull@", traduccion: "nager", pronunciacion: "/'naɣeɾ/", definicion: ""},
    {palabra: "Cataluña", traduccion: "Kataluna", pronunciacion: "/kata'luna/", definicion: ""},
    {palabra: "casa", traduccion: "konfo", pronunciacion: "/'konfo/", definicion: ""},
    {palabra: "castaña", traduccion: "rasin", pronunciacion: "/'rasin/", definicion: ""},
    {palabra: "cereza", traduccion: "dubile", pronunciacion: "/du'βile/", definicion: ""},
    {palabra: "cero", traduccion: "lin", pronunciacion: "/lin/", definicion: ""},
    {palabra: "cien", traduccion: "poklinlin", pronunciacion: "/pok'linlin/", definicion: ""},
    {palabra: "cinco", traduccion: "fibe", pronunciacion: "/'fiβe/", definicion: ""},
    {palabra: "coche", traduccion: "popoi", pronunciacion: "/po'poi/", definicion: ""},
    {palabra: "coco", traduccion: "nuti", pronunciacion: "/'nuti/", definicion: ""},
    {palabra: "comer", traduccion: "ghalafa", pronunciacion: "/xala'fa/", definicion: "", conjugación: {
        infinitivo: "ghalafa",
        conjugado: "ghala"
    }},
    {palabra: "cómo", traduccion: "edmane", pronunciacion: "/ed'mane/", definicion: ""},
    {palabra: "contra ", traduccion: "bersa", pronunciacion: "/'beɾsa/", definicion: ""},
    {palabra: "creer", traduccion: "cojafa", pronunciacion: "/coʒa'fa/", definicion: "", conjugación: {
        infinitivo: "cojafa",
        conjugado: "coja"
    }},
    {palabra: "cuando", traduccion: "muen", pronunciacion: "/'muen/", definicion: ""},
    {palabra: "cuatro", traduccion: "kate", pronunciacion: "/'kate/", definicion: ""},
    {palabra: "de", traduccion: "es", pronunciacion: "/ed/", definicion: ""},
    {palabra: "década", traduccion: "poklindani", pronunciacion: "/poklin'dani/", definicion: ""},
    {palabra: "decir", traduccion: "tochfa", pronunciacion: "/tot͡ʃ'fa/", definicion: "", conjugación: {
        infinitivo: "tochfa",
        conjugado: "toch"
    }},
    {palabra: "del", traduccion: "edo", pronunciacion: "/'eðo/", definicion: ""},
    {palabra: "derech@", traduccion: "abi", pronunciacion: "/'aβi/", definicion: ""},
    {palabra: "después", traduccion: "dali", pronunciacion: "/'dali/", definicion: ""},
    {palabra: "día", traduccion: "iane", pronunciacion: "/i'ane/", definicion: ""},
    {palabra: "diccionario", traduccion: "techinost", pronunciacion: "/te't͡ʃinost/", definicion: ""},
    {palabra: "diez", traduccion: "poklin", pronunciacion: "/'poklin/", definicion: ""},
    {palabra: "doce", traduccion: "pokseko", pronunciacion: "/pok'seko/", definicion: ""},
    {palabra: "dónde", traduccion: "gur", pronunciacion: "/guɾ/", definicion: ""},
    {palabra: "dos", traduccion: "seko", pronunciacion: "/'seko/", definicion: ""},
    {palabra: "el", traduccion: "lo", pronunciacion: "/lo/", definicion: ""},
    {palabra: "él", traduccion: "ro", pronunciacion: "/ro/", definicion: ""},
    {palabra: "ella", traduccion: "ri", pronunciacion: "/ri/", definicion: ""},
    {palabra: "ellas", traduccion: "ris", pronunciacion: "/ris/", definicion: ""},
    {palabra: "ellos", traduccion: "ros", pronunciacion: "/ros/", definicion: ""},
    {palabra: "ell@s", traduccion: "nes", pronunciacion: "/nes/", definicion: ""},
    {palabra: "en", traduccion: "ne", pronunciacion: "/ne/", definicion: ""},
    {palabra: "escuela", traduccion: "resklosia", pronunciacion: "/res'klosia/", definicion: ""},
    {palabra: "España", traduccion: "Espana", pronunciacion: "/es'pana/", definicion: ""},
    {palabra: "estar", traduccion: "ejulofa", pronunciacion: "/eʒulo'fa/", definicion: "", conjugación: {
        infinitivo: "ejulofa",
        conjugado: "ejulo"
    }},
    {palabra: "esto", traduccion: "ako", pronunciacion: "/'ako/", definicion: ""},
    {palabra: "felicidad", traduccion: "iendara", pronunciacion: "/ien'daɾa/", definicion: ""},
    {palabra: "fe@", traduccion: "abari", pronunciacion: "/a'βaɾi/", definicion: ""},
    {palabra: "follar", traduccion: "kakfa", pronunciacion: "/kak'fa/", definicion: "", conjugación: {
        infinitivo: "kakfa",
        conjugado: "kak"
    }},
    {palabra: "frambuesa", traduccion: "bolij", pronunciacion: "/'boliʒ/", definicion: ""},
    {palabra: "fresa", traduccion: "arba", pronunciacion: "/'aɾβa/", definicion: ""},
    {palabra: "fruta", traduccion: "albesa", pronunciacion: "/al'βesa/", definicion: ""},
    {palabra: "fuerza", traduccion: "astron", pronunciacion: "/'astɾon/", definicion: ""},
    {palabra: "gay", traduccion: "ereme", pronunciacion: "/e'ɾeme/", definicion: ""},
    {palabra: "gilipollas", traduccion: "naik", pronunciacion: "/'naik/", definicion: ""},
    {palabra: "gracias", traduccion: "meren", pronunciacion: "/'meɾen/", definicion: ""},
    {palabra: "gris", traduccion: "suit", pronunciacion: "/'suit/", definicion: ""},
    {palabra: "guap@", traduccion: "rame", pronunciacion: "/'rame/", definicion: ""},
    {palabra: "gustar", traduccion: "milfa", pronunciacion: "/mil'fa/", definicion: "", conjugación: {
        infinitivo: "milfa",
        conjugado: "mil"
    }},
    {palabra: "haber", traduccion: "felufa", pronunciacion: "/felu'fa/", definicion: "", conjugación: {
        infinitivo: "felufa",
        conjugado: "felu"
    }},
    {palabra: "hay", traduccion: "ifelu", pronunciacion: "/i'felu/", definicion: ""},
    {palabra: "hola", traduccion: "jalo", pronunciacion: "/'ʒalo/", definicion: ""},
    {palabra: "hora", traduccion: "lor", pronunciacion: "/loɾ/", definicion: ""},
    {palabra: "hoy", traduccion: "agora", pronunciacion: "/a'ɣoɾa/", definicion: ""},
    {palabra: "ir", traduccion: "marefa", pronunciacion: "/maɾe'fa/", definicion: "", conjugación: {
        infinitivo: "marefa",
        conjugado: "mare"
    }},
    {palabra: "izquierd@", traduccion: "nabi", pronunciacion: "/'naβi/", definicion: ""},
    {palabra: "la", traduccion: "li", pronunciacion: "/li/", definicion: ""},
    {palabra: "las", traduccion: "lis", pronunciacion: "/lis/", definicion: ""},
    {palabra: "L'Escala", traduccion: "li Eskala", pronunciacion: "/li es'kala/", definicion: ""},
    {palabra: "L'Estartit", traduccion: "lo Estartit", pronunciacion: "/lo es'taɾtit/", definicion: ""},
    {palabra: "limón", traduccion: "albis", pronunciacion: "/'alβis/", definicion: ""},
    {palabra: "los", traduccion: "los", pronunciacion: "/los/", definicion: ""},
    {palabra: "maíz", traduccion: "lote", pronunciacion: "/'lote/", definicion: ""},
    {palabra: "mamá", traduccion: "ama", pronunciacion: "/'ama/", definicion: ""},
    {palabra: "mandarina", traduccion: "inco", pronunciacion: "/'inθo/", definicion: ""},
    {palabra: "manera", traduccion: "menie", pronunciacion: "/me'nie/", definicion: ""},
    {palabra: "mango", traduccion: "niche", pronunciacion: "/'nit͡ʃe/", definicion: ""},
    {palabra: "manzana", traduccion: "poc", pronunciacion: "/poθ/", definicion: ""},
    {palabra: "mañana", traduccion: "dalagora ", pronunciacion: "/dala'ɣoɾa/", definicion: ""},
    {palabra: "marrón", traduccion: "brun", pronunciacion: "/bɾun/", definicion: ""},
    {palabra: "más", traduccion: "ema", pronunciacion: "/'ema/", definicion: ""},
    {palabra: "me", traduccion: "em", pronunciacion: "/em/", definicion: ""},
    {palabra: "melocotón", traduccion: "odich", pronunciacion: "/'odit͡ʃ/", definicion: ""},
    {palabra: "melón", traduccion: "kana", pronunciacion: "/'kana/", definicion: ""},
    {palabra: "menos", traduccion: "aka", pronunciacion: "/'aka/", definicion: ""},
    {palabra: "mes", traduccion: "emale", pronunciacion: "/e'male/", definicion: ""},
    {palabra: "mil", traduccion: "kilo", pronunciacion: "/'kilo/", definicion: ""},
    {palabra: "minuto", traduccion: "monit", pronunciacion: "/'monit/", definicion: ""},
    {palabra: "mora", traduccion: "draufen", pronunciacion: "/dɾa'ufen/", definicion: ""},
    {palabra: "morado", traduccion: "pers", pronunciacion: "/peɾs/", definicion: ""},
    {palabra: "much@", traduccion: "mujem", pronunciacion: "/'muʒem/", definicion: ""},
    {palabra: "música", traduccion: "muscia", pronunciacion: "/mus'θia/", definicion: ""},
    {palabra: "naranja (color)", traduccion: "orano", pronunciacion: "/o'ɾano/", definicion: ""},
    {palabra: "naranja (fruta)", traduccion: "ince", pronunciacion: "/'inθe/", definicion: ""},
    {palabra: "necatarina", traduccion: "liseia", pronunciacion: "/lise'ia/", definicion: ""},
    {palabra: "negro", traduccion: "suart", pronunciacion: "/'suaɾt/", definicion: ""},
    {palabra: "no", traduccion: "na", pronunciacion: "/na/", definicion: ""},
    {palabra: "noche", traduccion: "elna", pronunciacion: "/'elna/", definicion: ""},
    {palabra: "normal", traduccion: "enitur", pronunciacion: "/e'nituɾ/", definicion: ""},
    {palabra: "nueve", traduccion: "mein", pronunciacion: "/'mein/", definicion: ""},
    {palabra: "número", traduccion: "nombro", pronunciacion: "/'nombɾo/", definicion: ""},
    {palabra: "ocho", traduccion: "lup", pronunciacion: "/lup/", definicion: ""},
    {palabra: "once", traduccion: "pokpok", pronunciacion: "/'pokpok/", definicion: ""},
    {palabra: "original", traduccion: "originak", pronunciacion: "/oɾi'xinak/", definicion: ""},
    {palabra: "palabra", traduccion: "techin", pronunciacion: "/'tet͡ʃin/", definicion: ""},
    {palabra: "papá", traduccion: "apa", pronunciacion: "/'apa/", definicion: ""},
    {palabra: "papaya", traduccion: "tropai", pronunciacion: "/tɾo'pai/", definicion: ""},
    {palabra: "pasa", traduccion: "arrudof", pronunciacion: "/a'rudof/", definicion: ""},
    {palabra: "pene", traduccion: "col", pronunciacion: "/col/", definicion: ""},
    {palabra: "pensar", traduccion: "denkenfa", pronunciacion: "/denken'fa/", definicion: "", conjugación: {
        infinitivo: "denkenfa",
        conjugado: "denken"
    }},
    {palabra: "pequeño", traduccion: "ebilo", pronunciacion: "/e'βilo/", definicion: ""},
    {palabra: "pera", traduccion: "uliet", pronunciacion: "/u'liet/", definicion: ""},
    {palabra: "perro", traduccion: "faranak", pronunciacion: "/fa'ɾanak/", definicion: ""},
    {palabra: "piña", traduccion: "paina", pronunciacion: "/pa'ina/", definicion: ""},
    {palabra: "plátano", traduccion: "pekfu", pronunciacion: "/'pekfu/", definicion: ""},
    {palabra: "pomelo", traduccion: "inceroen", pronunciacion: "/inθe'roen/", definicion: ""},
    {palabra: "porque", traduccion: "choa", pronunciacion: "/'t͡ʃoa/", definicion: ""},
    {palabra: "por qué", traduccion: "No inventada", pronunciacion: ""},
    {palabra: "puerto", traduccion: "tace", pronunciacion: "/'taθe/", definicion: ""},
    {palabra: "que", traduccion: "lat", pronunciacion: "/lat/", definicion: ""},
    {palabra: "qué", traduccion: "koi", pronunciacion: "/'koi/", definicion: ""},
    {palabra: "rojo", traduccion: "roen", pronunciacion: "/'roen/", definicion: ""},
    {palabra: "rosa", traduccion: "pien", pronunciacion: "/'pien/", definicion: ""},
    {palabra: "saber", traduccion: "nobafa", pronunciacion: "/noβa'fa/", definicion: "", conjugación: {
        infinitivo: "nobafa",
        conjugado: "noba"
    }},
    {palabra: "sandía", traduccion: "masari", pronunciacion: "/ma'sari/", definicion: ""},
    {palabra: "segundo", traduccion: "sekone", pronunciacion: "/se'kone/", definicion: ""},
    {palabra: "segundo (ordinal)", traduccion: "sekonien", pronunciacion: "/se'konien/", definicion: ""},
    {palabra: "seis", traduccion: "ses", pronunciacion: "/ses/", definicion: ""},
    {palabra: "semana", traduccion: "celiane", pronunciacion: "/θeli'ane/", definicion: ""},
    {palabra: "ser", traduccion: "erfa", pronunciacion: "/eɾ'fa/", definicion: "", conjugación: {
        infinitivo: "erfa",
        conjugado: "bar"
    }},
    {palabra: "sí", traduccion: "da", pronunciacion: "/da/", definicion: ""},
    {palabra: "subnormal", traduccion: "bilenitur", pronunciacion: "/bile'nituɾ/", definicion: ""},
    {palabra: "su", traduccion: "nei", pronunciacion: "/'nei/", definicion: ""},
    {palabra: "sus", traduccion: "neis", pronunciacion: "/'neis/", definicion: ""},
    {palabra: "tarde", traduccion: "destem ", pronunciacion: "/'destem/", definicion: ""},
    {palabra: "tardar", traduccion: "destemfa", pronunciacion: "/destem'fa/", definicion: "", conjugación: {
        infinitivo: "destemfa",
        conjugado: "destem"
    }},
    {palabra: "te", traduccion: "ra", pronunciacion: "/ra/", definicion: ""},
    {palabra: "tener", traduccion: "abofa", pronunciacion: "/aβo'fa/", definicion: "", conjugación: {
        infinitivo: "abofa",
        conjugado: "abo"
    }},
    {palabra: "tiempo", traduccion: "tema ", pronunciacion: "/'tema/", definicion: ""},
    {palabra: "tomate", traduccion: "cheif", pronunciacion: "/'t͡ʃeif/", definicion: ""},
    {palabra: "Torroella", traduccion: "Torroela", pronunciacion: "/toro'ela/", definicion: ""},
    {palabra: "trabajar", traduccion: "laborafa", pronunciacion: "/laβoɾa'fa/", definicion: "", conjugación: {
        infinitivo: "laborafa",
        conjugado: "labora"
    }},
    {palabra: "trabajo", traduccion: "laboro", pronunciacion: "/la'βoɾo/", definicion: ""},
    {palabra: "tres", traduccion: "torsis", pronunciacion: "/'torsis/", definicion: ""},
    {palabra: "tu", traduccion: "rai", pronunciacion: "/'rai/", definicion: ""},
    {palabra: "tus", traduccion: "rais", pronunciacion: "/'rais/", definicion: ""},
    {palabra: "un", traduccion: "nu", pronunciacion: "/nu/", definicion: ""},
    {palabra: "uno", traduccion: "pok", pronunciacion: "/pok/", definicion: ""},
    {palabra: "uva", traduccion: "dof", pronunciacion: "/dof/", definicion: ""},
    {palabra: "veinte", traduccion: "sekolin", pronunciacion: "/se'kolin/", definicion: ""},
    {palabra: "verde", traduccion: "groen", pronunciacion: "/'gɾoen/", definicion: ""},
    {palabra: "y", traduccion: "i", pronunciacion: "/i/", definicion: ""}
]

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const busqueda = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = ""; // Limpiar resultados anteriores
    let p = document.createElement('p');
    let t = document.createElement('p');
    let pr = document.createElement('p');
    
    diccionario.forEach(element => {
        if (element.palabra === busqueda) {
            p.innerText = element.palabra;
            t.innerText = `Traducción al milijés: ${element.traduccion}`;
            pr.innerText = `Pronunciación: ${element.pronunciacion}`;
            resultsContainer.appendChild(p);
            resultsContainer.appendChild(t);
            resultsContainer.appendChild(pr);
            return;
        }
    });
    p.innerText = "Palabra no encontrada";
    resultsContainer.appendChild(p);
});

//entrada → milijés = palabra en grande y definicion
//entrada → español = "en milijés " palabra traducida en grande y definicion