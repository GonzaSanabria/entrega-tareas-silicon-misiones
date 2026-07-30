
// trabajo practico N11 Catalogo de datos
// Tematica elegid videojuegos


// PARTE A 
// array de valores simples
console.log("--- PARTE A ---");

let categorias = ["acción", "aventura", "rol", "estrategia"];

// Punto 02
// mostrar el array completo y su cantidad de elementos
console.log(categorias);
console.log("Cantidad de categorías:", categorias.length);

// Punto 03
// primer elemento y ultimo (a partir de .length, sin escribir el indice a mano)
let primeraCategoria = categorias[0];
let ultimaCategoria = categorias[categorias.length - 1];
console.log("Primera categoría:", primeraCategoria);
console.log("Última categoría:", ultimaCategoria);

// Punto 04
// incorporar una categoria adicional con .push()
categorias.push("deportes");
console.log("Cantidad de categorías:", categorias.length);

// Punto 05
// eliminar el ultimo elemento con .pop() e informar cuál fue
let categoriaEliminada = categorias.pop();
console.log("Categoría eliminada:", categoriaEliminada);


// PARTE B
// objeto 
console.log("--- PARTE B ---");

let usuario = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Posadas",
  temaFavorito: "videojuegos de rol"
};

// Punto 07
// frase construida a partir de las propiedades
console.log(`Nombre: ${usuario.nombre} — Edad: ${usuario.edad} — Ciudad: ${usuario.ciudad}`);
console.log("Tema favorito:", usuario.temaFavorito);

// Punto 08
// modificar el valor de una propiedad existente
usuario.edad = 26;
console.log("Edad actualizada:", usuario.edad);

// Punto 09
// incorporar una propiedad nueva
usuario.profesion = "estudiante";
console.log(usuario);


// PARTE Carray de objetos
console.log("--- PARTE C ---");

let catalogo = [
  { titulo: "Matrix Reloaded: The Game", categoria: "acción",  puntaje: 9, visto: true },
  { titulo: "Superbad Quest",            categoria: "comedia", puntaje: 8, visto: true },
  { titulo: "El Conjuro: Casa Maldita",  categoria: "terror",  puntaje: 7, visto: false },
  { titulo: "Drama en la Ciudad",        categoria: "drama",   puntaje: 6, visto: false }
];

// Punto 11
// titulo del primer elemento y puntaje del tercero, por indice
console.log("Primer título:", catalogo[0].titulo);
console.log("Puntaje del tercer elemento:", catalogo[2].puntaje);

// Punto 12
// linea descriptiva del segundo elemento 
// formato: titulo — categoria — puntaje/10 — visto|pendiente
let estadoSegundo = catalogo[1].visto ? "visto" : "pendiente";
console.log(`${catalogo[1].titulo} — ${catalogo[1].categoria} — ${catalogo[1].puntaje}/10 — ${estadoSegundo}`);

// Punto 13
// modificar el puntaje de un elemento y mostrar el valor actualizado
catalogo[0].puntaje = 10;
console.log("Puntaje actualizado:", catalogo[0].puntaje);

// Punto 14
// incorporar un quinto elemento con .push() y mostrar el total
catalogo.push({ titulo: "Aventura Final", categoria: "aventura", puntaje: 9, visto: true });
console.log("Cantidad de elementos del catálogo:", catalogo.length);


// PARTE D
// destructuring
console.log("--- PARTE D ---");

// Punto 15
// destructuring de objeto sobre catalogo[0] + línea descriptiva
let { titulo, categoria, puntaje, visto } = catalogo[0];
let estadoPrimero = visto ? "visto" : "pendiente";
console.log(`${titulo} — ${categoria} — ${puntaje}/10 — ${estadoPrimero}`);

// Punto 16
// destructuring de objeto sobre usuario (nombre y ciudad)
let { nombre, ciudad } = usuario;
console.log(`Nombre: ${nombre} — Ciudad: ${ciudad}`);

// Punto 17
// destructuring de array sobre catalogo (primero y segundo)
let [primero, segundo] = catalogo;
console.log("Primero:", primero.titulo);
console.log("Segundo:", segundo.titulo);


// PARTE E
// complementaria
console.log("--- PARTE E ---");

// Punto 18
// renombrado en el destructuring
let { titulo: tituloDestacado } = catalogo[2];
console.log("Título destacado:", tituloDestacado);

// Punto 19
// valor por defecto para una propiedad inexistente en usuario
let { pais = "sin datos" } = usuario;
console.log("País:", pais);

// Punto 20
// intercambio de variables con destructuring de array, sin variable auxiliar
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`Valores intercambiados: a = ${a}, b = ${b}`);