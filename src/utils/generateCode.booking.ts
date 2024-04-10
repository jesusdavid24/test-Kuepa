export function generateAlphanumericCode() {
  const longitudMinima = 8;
  const longitudMaxima = 12;

  const longitud =
    Math.floor(Math.random() * (longitudMaxima - longitudMinima + 1)) +
    longitudMinima;

  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indiceAleatorio);
  }
  return codigo;
}
