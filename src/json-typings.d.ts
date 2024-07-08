// para que typescript permita la importacion de json en los comoponentes.
declare module "*.json" {
  const value: any;
  export default value;
}
