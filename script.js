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
    {palabra: "a", traduccion: "a", pronunciacion: "/a/", definicion: {
            español: {
                1: { categoria: "sus.", texto: "Primera letra del abecedario milijés." },
                2: { categoria: "prep.", texto: "Indica dirección, destinatario o manera. Equivale a 'a' en español."}
            },
            milijes: {
                1: { categoria: "", texto: "Poknien fosna ed Ch-Lij ed milijes" },
                2: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abajo", traduccion: "ebilo", pronunciacion: "/e'bilo/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abandonar", traduccion: "astofa", pronunciacion: "/asto'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "astofa",
            conjugado: "asto"
        }
    },
    {palabra: "abandono", traduccion: "asto", pronunciacion: "/'asto/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abanicar", traduccion: "fanfa", pronunciacion: "/fan'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "fanfa",
            conjugado: "fan"
        }
    },
    {palabra: "abanico", traduccion: "fan", pronunciacion: "/fan/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abdominal", traduccion: "estar", pronunciacion: "/'astaɾ/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abecedario", traduccion: "Ch-Lij", pronunciacion: "/'t͡ʃeliʒ/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abeja", traduccion: "nosi", pronunciacion: "/'nosi/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "ablandar", traduccion: "esuafa", pronunciacion: "/esua'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "esuafa",
            conjugado: "esua"
        }
    },
    {palabra: "abofetear", traduccion: "tiakafa", pronunciacion: "/tiaka'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "tiakafa",
            conjugado: "tiaka"
        }
    },
    {palabra: "abrazar", traduccion: "sangafa", pronunciacion: "/sanga'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "sangafa",
            conjugado: "sanga"
        }
    },
    {palabra: "abrazo", traduccion: "sangra", pronunciacion: "/'sanga/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abrigo", traduccion: "palto", pronunciacion: "/'palto/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abril", traduccion: "serral", pronunciacion: "/'seral/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abrir", traduccion: "daralfa", pronunciacion: "/daɾal'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "daralfa",
            conjugado: "daral"
        }
    },
    {palabra: "abuela", traduccion: "amama", pronunciacion: "/a'mama/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "abuelo", traduccion: "apapa", pronunciacion: "/a'papa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aburrimiento", traduccion: "jiche", pronunciacion: "/'ʒit͡ʃe/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "acabar", traduccion: "iatafa", pronunciacion: "/iata'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "iatafa",
            conjugado: "iata"
        }
    },
    {palabra: "acariciar", traduccion: "gafa", pronunciacion: "/ga'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "gafa",
            conjugado: "ga"
        }
    },
    {palabra: "accidente", traduccion: "kras", pronunciacion: "/kras/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aceite", traduccion: "bacua", pronunciacion: "/ba'θua/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aceptar", traduccion: "okifa", pronunciacion: "/oki'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "okifa",
            conjugado: "oki"
        }
    },
    {palabra: "acero", traduccion: "erreo", pronunciacion: "/e'reo/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "ácido", traduccion: "kise", pronunciacion: "/'kise/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "acompañar", traduccion: "kontifa", pronunciacion: "/konti'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "kontifa",
            conjugado: "konti"
        }
    },
    {palabra: "adelante", traduccion: "foraut", pronunciacion: "/fo'ɾaut/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adicto", traduccion: "nocadea", pronunciacion: "/noθa'dea/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adiós", traduccion: "kadei", pronunciacion: "/ka'ðei/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adivino", traduccion: "beitet", pronunciacion: "/be'itet/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adolescente", traduccion: "efibo", pronunciacion: "/e'fiβo/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adoptar", traduccion: "dakatifa", pronunciacion: "/dakati'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "dakatifa",
            conjugado: "dakati"
        }
    },
    {palabra: "adorno", traduccion: "ornament", pronunciacion: "/or'nament/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "adquirir", traduccion: "decupefa", pronunciacion: "/deθupe'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        },
        conjugacion: {
            infinitivo: "decupefa",
            conjugado: "decupe"
        }
    },
    {palabra: "adulto", traduccion: "enilikas", pronunciacion: "/eni'likas/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aéreo", traduccion: "aried", pronunciacion: "/a'ɾied/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
                milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aerodinámico", traduccion: "ariteel", pronunciacion: "/aɾi'teel/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aeropuerto", traduccion: "aritace", pronunciacion: "/aɾi'taθe/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "afectado", traduccion: "abanio", pronunciacion: "/aβa'nio/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "afectar", traduccion: "abafa", pronunciacion: "/aβa'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "abafa",
        conjugado: "aba"
    }},
    {palabra: "aferrar", traduccion: "bamafa", pronunciacion: "/bama'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "bamafa",
        conjugado: "bama"
    }},
    {palabra: "afición", traduccion: "somprug", pronunciacion: "/'sompɾug/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "aficionado", traduccion: "somprugo", pronunciacion: "/som'pɾugo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "aficionar", traduccion: "somfa", pronunciacion: "/som'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "somfa",
        conjugado: "som"
    }},
    {palabra: "afilado", sinonimos: ["afilada"], traduccion: "teghni", pronunciacion: "/'texni/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "aguacate", traduccion: "puchei", pronunciacion: "/pu't͡ʃei/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "agujerear", traduccion: "fonarfa", pronunciacion: "/fonaɾ'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "fonarfa",
        conjugado: "fonar"
    }},
    {palabra: "agujero", traduccion: "fonar", pronunciacion: "/'fonaɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ahora", traduccion: "gora", pronunciacion: "/'goɾa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ajo", traduccion: "ora", pronunciacion: "/'oɾa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "alto", traduccion: "pran", pronunciacion: "/pɾan/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "allí", traduccion: "tere", pronunciacion: "/'teɾe/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "amarillo", traduccion: "gel", pronunciacion: "/gel/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "amistad", traduccion: "fralito", pronunciacion: "/fɾa'lito/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "amor", traduccion: "aime", pronunciacion: "/'aime/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "amar", traduccion: "aimefa", pronunciacion: "/aime'fa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "anacardo", traduccion: "nacar", pronunciacion: "/'nacaɾ/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "antes", traduccion: "abem", pronunciacion: "/'aβem/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "año", traduccion: "ani", pronunciacion: "/'ani/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "aquí", traduccion: "jere", pronunciacion: "/'ʒeɾe/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "arándano", traduccion: "besen", pronunciacion: "/'besen/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "arriba", traduccion: "epran", pronunciacion: "/e'pɾan/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "así", traduccion: "nika", pronunciacion: "/'nika/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "avellana", traduccion: "malte", pronunciacion: "/'malte/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "ayer", traduccion: "abemagora", pronunciacion: "/aβema'ɣoɾa/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "azul", traduccion: "bren", pronunciacion: "/bɾen/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "b", traduccion: "b", pronunciacion: "/b/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "bajo", sinonimos: ["baja"], traduccion: "bilo", pronunciacion: "/'bilo/", definicion: {
            español: {
                1: { categoria: "", texto: "" }
            },
            milijes: {
                1: { categoria: "", texto: "" }
            }
        }
    },
    {palabra: "bisabuela", traduccion: "sekonien amama", pronunciacion: "/seko'nien a'mama/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "bisabuelo", traduccion: "sekonien apapa", pronunciacion: "/seko'nien a'papa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "blanco", traduccion: "uit", pronunciacion: "/'uit/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "bueno", sinonimos: ["buena"], traduccion: "amba", pronunciacion: "/'amba/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cagar", traduccion: "losufa", pronunciacion: "/losu'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "losufa",
        conjugado: "losu"
    }},
    {palabra: "capullo", sinonimos: ["capulla"], traduccion: "nager", pronunciacion: "/'naɣeɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "casa", traduccion: "konfo", pronunciacion: "/'konfo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "castaña", traduccion: "rasin", pronunciacion: "/'rasin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "Cataluña", traduccion: "Kataluna", pronunciacion: "/kata'luna/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cavar", traduccion: "agarfa", pronunciacion: "/agaɾ'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cereza", traduccion: "dubile", pronunciacion: "/du'βile/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cero", traduccion: "lin", pronunciacion: "/lin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cien", traduccion: "poklinlin", pronunciacion: "/pok'linlin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cinco", traduccion: "fibe", pronunciacion: "/'fiβe/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "coche", traduccion: "popoi", pronunciacion: "/po'poi/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "coco", traduccion: "nuti", pronunciacion: "/'nuti/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "comer", traduccion: "ghalafa", pronunciacion: "/xala'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "ghalafa",
        conjugado: "ghala"
    }},
    {palabra: "cómo", traduccion: "edmane", pronunciacion: "/ed'mane/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "contra ", traduccion: "bersa", pronunciacion: "/'beɾsa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "creer", traduccion: "cojafa", pronunciacion: "/coʒa'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "cojafa",
        conjugado: "coja"
    }},
    {palabra: "cuando", traduccion: "muen", pronunciacion: "/'muen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "cuatro", traduccion: "kate", pronunciacion: "/'kate/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "de", traduccion: "ed", pronunciacion: "/ed/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "década", traduccion: "poklindani", pronunciacion: "/poklin'dani/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "decir", sinonimos: ["hablar"], traduccion: "tochfa", pronunciacion: "/tot͡ʃ'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "tochfa",
        conjugado: "toch"
    }},
    {palabra: "del", traduccion: "edo", pronunciacion: "/'eðo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "derech@", traduccion: "abi", pronunciacion: "/'aβi/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "después", traduccion: "dali", pronunciacion: "/'dali/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "día", traduccion: "iane", pronunciacion: "/i'ane/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "diccionario", traduccion: "techinost", pronunciacion: "/te't͡ʃinost/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "diez", traduccion: "poklin", pronunciacion: "/'poklin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "doce", traduccion: "pokseko", pronunciacion: "/pok'seko/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "dónde", traduccion: "gur", pronunciacion: "/guɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "dos", traduccion: "seko", pronunciacion: "/'seko/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "el", traduccion: "lo", pronunciacion: "/lo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "él", traduccion: "ro", pronunciacion: "/ro/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ella", traduccion: "ri", pronunciacion: "/ri/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ellas", traduccion: "ris", pronunciacion: "/ris/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ellos", traduccion: "ros", pronunciacion: "/ros/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ell@s", traduccion: "nes", pronunciacion: "/nes/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "en", traduccion: "ne", pronunciacion: "/ne/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "escuela", traduccion: "resklosia", pronunciacion: "/res'klosia/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "España", traduccion: "Espana", pronunciacion: "/es'pana/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "estar", traduccion: "ejulofa", pronunciacion: "/eʒulo'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "ejulofa",
        conjugado: "ejulo"
    }},
    {palabra: "esto", traduccion: "ako", pronunciacion: "/'ako/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "felicidad", traduccion: "iendara", pronunciacion: "/ien'daɾa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "fe@", traduccion: "abari", pronunciacion: "/a'βaɾi/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "follar", traduccion: "kakfa", pronunciacion: "/kak'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "kakfa",
        conjugado: "kak"
    }},
    {palabra: "frambuesa", traduccion: "bolij", pronunciacion: "/'boliʒ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "fresa", traduccion: "arba", pronunciacion: "/'aɾβa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "fruta", traduccion: "albesa", pronunciacion: "/al'βesa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "fuerza", traduccion: "astron", pronunciacion: "/'astɾon/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "gay", traduccion: "ereme", pronunciacion: "/e'ɾeme/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "gilipollas", traduccion: "naik", pronunciacion: "/'naik/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "gracias", traduccion: "meren", pronunciacion: "/'meɾen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "gris", traduccion: "suit", pronunciacion: "/'suit/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "guap@", traduccion: "rame", pronunciacion: "/'rame/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "gustar", traduccion: "milfa", pronunciacion: "/mil'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "milfa",
        conjugado: "mil"
    }},
    {palabra: "haber", traduccion: "felufa", pronunciacion: "/felu'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "felufa",
        conjugado: "felu"
    }},
    {palabra: "hay", traduccion: "ifelu", pronunciacion: "/i'felu/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "hola", traduccion: "jalo", pronunciacion: "/'ʒalo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "hora", traduccion: "lor", pronunciacion: "/loɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "hoy", traduccion: "agora", pronunciacion: "/a'ɣoɾa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ir", traduccion: "marefa", pronunciacion: "/maɾe'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "marefa",
        conjugado: "mare"
    }},
    {palabra: "izquierd@", traduccion: "nabi", pronunciacion: "/'naβi/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "la", traduccion: "li", pronunciacion: "/li/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "las", traduccion: "lis", pronunciacion: "/lis/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "L'Escala", traduccion: "li Eskala", pronunciacion: "/li es'kala/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "L'Estartit", traduccion: "lo Estartit", pronunciacion: "/lo es'taɾtit/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "letra", traduccion: "fosna", pronunciacion: "/'fosna'/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "limón", traduccion: "albis", pronunciacion: "/'alβis/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "los", traduccion: "los", pronunciacion: "/los/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "maíz", traduccion: "lote", pronunciacion: "/'lote/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mamá", traduccion: "ama", pronunciacion: "/'ama/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mandarina", traduccion: "inco", pronunciacion: "/'inθo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "manera", traduccion: "menie", pronunciacion: "/me'nie/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mango", traduccion: "niche", pronunciacion: "/'nit͡ʃe/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "manzana", traduccion: "poc", pronunciacion: "/poθ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mañana", traduccion: "dalagora ", pronunciacion: "/dala'ɣoɾa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "marrón", traduccion: "brun", pronunciacion: "/bɾun/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "más", traduccion: "ema", pronunciacion: "/'ema/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "me", traduccion: "em", pronunciacion: "/em/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "melocotón", traduccion: "odich", pronunciacion: "/'odit͡ʃ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "melón", traduccion: "kana", pronunciacion: "/'kana/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "menos", traduccion: "aka", pronunciacion: "/'aka/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mes", traduccion: "emale", pronunciacion: "/e'male/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mil", traduccion: "kilo", pronunciacion: "/'kilo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "minuto", traduccion: "monit", pronunciacion: "/'monit/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "mora", traduccion: "draufen", pronunciacion: "/dɾa'ufen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "morado", traduccion: "pers", pronunciacion: "/peɾs/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "much@", traduccion: "mujem", pronunciacion: "/'muʒem/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "música", traduccion: "muscia", pronunciacion: "/mus'θia/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "naranja (color)", traduccion: "orano", pronunciacion: "/o'ɾano/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "naranja (fruta)", traduccion: "ince", pronunciacion: "/'inθe/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "necatarina", traduccion: "liseia", pronunciacion: "/lise'ia/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "negro", traduccion: "suart", pronunciacion: "/'suaɾt/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "no", traduccion: "na", pronunciacion: "/na/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "noche", traduccion: "elna", pronunciacion: "/'elna/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "normal", traduccion: "enitur", pronunciacion: "/e'nituɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "nueve", traduccion: "mein", pronunciacion: "/'mein/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "número", traduccion: "nombro", pronunciacion: "/'nombɾo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ocho", traduccion: "lup", pronunciacion: "/lup/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "once", traduccion: "pokpok", pronunciacion: "/'pokpok/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "original", traduccion: "originak", pronunciacion: "/oɾi'xinak/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "palabra", traduccion: "techin", pronunciacion: "/'tet͡ʃin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "papá", traduccion: "apa", pronunciacion: "/'apa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "papaya", traduccion: "tropai", pronunciacion: "/tɾo'pai/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "pasa", traduccion: "arrudof", pronunciacion: "/a'rudof/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "pene", traduccion: "col", pronunciacion: "/θol/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "pensar", traduccion: "denkenfa", pronunciacion: "/denken'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "denkenfa",
        conjugado: "denken"
    }},
    {palabra: "pequeño", traduccion: "ebilo", pronunciacion: "/e'βilo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "pera", traduccion: "uliet", pronunciacion: "/u'liet/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "perro", traduccion: "faranak", pronunciacion: "/fa'ɾanak/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "piña", traduccion: "paina", pronunciacion: "/pa'ina/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "plátano", traduccion: "pekfu", pronunciacion: "/'pekfu/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "pomelo", traduccion: "inceroen", pronunciacion: "/inθe'roen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "porque", traduccion: "choa", pronunciacion: "/'t͡ʃoa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "por qué", traduccion: "No inventada", pronunciacion: "", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "puerto", traduccion: "tace", pronunciacion: "/'taθe/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "que", traduccion: "lat", pronunciacion: "/lat/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "qué", traduccion: "koi", pronunciacion: "/'koi/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "rojo", traduccion: "roen", pronunciacion: "/'roen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "rosa", traduccion: "pien", pronunciacion: "/'pien/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "saber", traduccion: "nobafa", pronunciacion: "/noβa'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "nobafa",
        conjugado: "noba"
    }},
    {palabra: "sandía", traduccion: "masari", pronunciacion: "/ma'sari/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "segundo", traduccion: "sekone", pronunciacion: "/se'kone/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "segundo (ordinal)", traduccion: "sekonien", pronunciacion: "/se'konien/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "seis", traduccion: "ses", pronunciacion: "/ses/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "semana", traduccion: "celiane", pronunciacion: "/θeli'ane/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "ser", traduccion: "erfa", pronunciacion: "/eɾ'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "erfa",
        conjugado: "bar"
    }},
    {palabra: "sí", traduccion: "da", pronunciacion: "/da/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "subnormal", traduccion: "bilenitur", pronunciacion: "/bile'nituɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "su", traduccion: "nei", pronunciacion: "/'nei/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "sus", traduccion: "neis", pronunciacion: "/'neis/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tarde", traduccion: "destem ", pronunciacion: "/'destem/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tardar", traduccion: "destemfa", pronunciacion: "/destem'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "destemfa",
        conjugado: "destem"
    }},
    {palabra: "te", traduccion: "ra", pronunciacion: "/ra/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tener", traduccion: "abofa", pronunciacion: "/aβo'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "abofa",
        conjugado: "abo"
    }},
    {palabra: "tiempo", traduccion: "tema ", pronunciacion: "/'tema/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tierra", traduccion: "agar", pronunciacion: "/'aɣaɾ/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tomate", traduccion: "cheif", pronunciacion: "/'t͡ʃeif/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "Torroella", traduccion: "Torroela", pronunciacion: "/toro'ela/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "trabajar", traduccion: "laborafa", pronunciacion: "/laβoɾa'fa/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}, conjugacion: {
        infinitivo: "laborafa",
        conjugado: "labora"
    }},
    {palabra: "trabajo", traduccion: "laboro", pronunciacion: "/la'βoɾo/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tres", traduccion: "torsis", pronunciacion: "/'torsis/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tu", traduccion: "rai", pronunciacion: "/'rai/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "tus", traduccion: "rais", pronunciacion: "/'rais/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "un", traduccion: "nu", pronunciacion: "/nu/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "uno", traduccion: "pok", pronunciacion: "/pok/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "uva", traduccion: "dof", pronunciacion: "/dof/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "veinte", traduccion: "sekolin", pronunciacion: "/se'kolin/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "verde", traduccion: "groen", pronunciacion: "/'gɾoen/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}},
    {palabra: "y", traduccion: "i", pronunciacion: "/i/", definicion: {español: {
            1: { categoria: "", texto: "" }
        },
        milijes: {
            1: { categoria: "", texto: "" }
        }}}
]

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

function buscarPalabra() {
    const busqueda = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = ""; // Limpiar resultados anteriores
    let p = document.createElement('p');
    p.classList.add('word');
    let t = document.createElement('p');
    t.classList.add('word-strong');
    let pr = document.createElement('p');
    pr.classList.add('word-gray');

    diccionario.forEach((element) => {
        if (element.palabra === busqueda || element.sinonimos?.includes(busqueda)) { // Si la palabra está en español y/o es un sinónimo
            p.innerText = "En milijés:";
            t.innerText = element.traduccion;
            pr.innerText = element.pronunciacion;
            resultsContainer.appendChild(p);
            resultsContainer.appendChild(t);
            resultsContainer.appendChild(pr);
            if (element.conjugacion) {
            mostrarConjugacion(element);
            }
        } else if (element.traduccion === busqueda) { // Si la palabra está en milijés
            t.innerText = element.traduccion;
            pr.innerText = element.pronunciacion;
            resultsContainer.appendChild(t);
            resultsContainer.appendChild(pr);
            if (element.conjugacion) {
            mostrarConjugacion(element);
            }
        } else if (element.conjugacion && element.conjugacion.conjugado === busqueda) { // Si se busca la forma conjugada de un verbo
            t.innerText = element.traduccion;
            pr.innerText = element.pronunciacion;
            resultsContainer.appendChild(t);
            resultsContainer.appendChild(pr);
            mostrarConjugacion(element);
        }
    });
    if (resultsContainer.innerHTML == '') {
        p.innerText = "Palabra no encontrada";
        resultsContainer.appendChild(p);
    }
    return; 
}

function verificarBusqueda () {
    if (searchInput.value.trim() === "") {
    resultsContainer.innerHTML = "<p class='word'>Por favor, ingresa una palabra para buscar.</p>";
    } else {
        buscarPalabra();
    }
}

function mostrarConjugacion(element) {
    let tc = document.createElement('p');
    tc.classList.add('word-big');

    let divC = document.createElement('div');
    divC.classList.add('div-conjugacion');

    let c = document.createElement('p');
    c.classList.add('contenido-conjugacion');
    divC.appendChild(c);

    let c2 = document.createElement('p');
    c2.classList.add('contenido-conjugacion')
    divC.appendChild(c2);

    let c3 = document.createElement('p');
    c3.classList.add('contenido-conjugacion');
    divC.appendChild(c3);

    let c4 = document.createElement('p');
    c4.classList.add('contenido-conjugacion');
    divC.appendChild(c4);


    tc.innerHTML = 'Conjugación:';
    c.innerHTML = '<strong>Infinitivo:</strong>';
    c3.innerHTML = '<strong>Conjugado:</strong>';
    c2.innerText = element.conjugacion.infinitivo;
    c4.innerText = element.conjugacion.conjugado;
    resultsContainer.appendChild(tc);
    resultsContainer.appendChild(divC);
}

searchButton.addEventListener("click", () => {
    verificarBusqueda();
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        verificarBusqueda();
    }
});