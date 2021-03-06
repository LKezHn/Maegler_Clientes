export interface Categorias {
    nombre: String;
    icono: String;
}

export const CATEGORIAS: Categorias[] = [
    {nombre: "Belleza", icono: "./assets/Categories/Belleza/belleza.svg"},
    {nombre: "Ferretería", icono: "./assets/Categories/Ferretería/ferreteria.svg"},
    {nombre: "Hogar", icono: "./assets/Categories/Hogar/hogar.svg"},
    {nombre: "Librería", icono: "./assets/Categories/Librería/libreria.svg"},
    {nombre: "Mascotas", icono: "./assets/Categories/Mascotas/mascota.svg"},
    {nombre: "Moda", icono: "./assets/Categories/Moda/moda.svg"},
    {nombre: "Música", icono: "./assets/Categories/Música/musica.svg"},
    {nombre: "Restaurantes", icono: "./assets/Categories/Restaurantes/restaurante.svg"},
    {nombre: "Salud", icono: "./assets/Categories/Salud/salud.svg"},
    {nombre: "Supermercado", icono: "./assets/Categories/Supermercado/supermercado.svg"},
    {nombre: "Tecnología", icono: "./assets/Categories/Tecnología/tecnologia.svg"}
];

export interface Empresas{
    nombre: String;
    descripcion: String;
    calificacion: number;
    logo: String;
    banner: String;
}

export const EMPRESAS: Empresas[] = [
    {nombre: "Empresa", 
    descripcion: "lorem ipsus", 
    calificacion: 100, 
    logo: "./assets/Categories/Restaurantes/Burger King/Logo.jpg", 
    banner: "./assets/Categories/Restaurantes/Burger King/Banner.jpg"},
    {nombre: "Empresa", 
    descripcion: "lorem ipsus", 
    calificacion: 100, 
    logo: "./assets/Categories/Restaurantes/Burger King/Logo.jpg", 
    banner: "./assets/Categories/Restaurantes/Burger King/Banner.jpg"},
    {nombre: "Empresa", 
    descripcion: "lorem ipsus", 
    calificacion: 100, 
    logo: "./assets/Categories/Restaurantes/Burger King/Logo.jpg", 
    banner: "./assets/Categories/Restaurantes/Burger King/Banner.jpg"}
];

export interface Productos{
    nombre: String;
    descripcion: String;
    imagen: String;
}

export const PRODUCTOS: Productos[] = [
    {nombre: "Producto", descripcion: "lorem ipsus", imagen: "./assets/Categories/Restaurantes/Burger King/Bacon King.png"},
    {nombre: "Producto", descripcion: "lorem ipsus", imagen: "./assets/Categories/Restaurantes/Burger King/Bacon King.png"},
    {nombre: "Producto", descripcion: "lorem ipsus", imagen: "./assets/Categories/Restaurantes/Burger King/Bacon King.png"}
]


export interface Resumen{
    nombre: String;
    imagen: String;
    precio: number;
    cantidad: number;
}

export const RESUMEN: Resumen[] = [
    {nombre: "Producto", 
    imagen: "./assets/Categories/Restaurantes/Burger King/Bacon King.png",
    precio: 326,
    cantidad: 1},
    {nombre: "Producto", 
    imagen: "./assets/Categories/Restaurantes/Burger King/Bacon King.png",
    precio: 326,
    cantidad: 1}
]

export interface Record{
    id: number;
    logo: String;
    categoria: String;
    empresa: String;
    total: number;
    fecha: String;
}

export const RECORD: Record[] = [
    {
        id: 1,
        logo: "./assets/Categories/Restaurantes/Burger King/Logo.jpg",
        categoria: "Restaurantes",
        empresa: "Burger King",
        total: 396,
        fecha: "29/09/2021"},
    {
        id: 2,
        logo: "./assets/Categories/Restaurantes/Burger King/Logo.jpg",
        categoria: "Restaurantes",
        empresa: "Burger King",
        total: 396,
        fecha: "29/09/2021"}
]