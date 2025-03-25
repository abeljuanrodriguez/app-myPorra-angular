export class Partido {
  constructor(
    public id: number,
    public idGrupo: number,
    public idEquipo1: number,
    public idEquipo2: number,
    public nombreEquipo1: string,
    public nombreEquipo2: string,
    public fecha: Date,
    public gfEquipo1: number,
    public gfEquipo2: number,
    public isJugado: boolean,
    public flagEquipo1: string,
    public flagEquipo2: string,
    public ganador: EnumGanador
  ) {}
}

// Define el enum (debe coincidir con el backend)
export enum EnumGanador {
  LOCAL = 'Local',
  VISITANTE = 'Visitante',
  EMPATE = 'Empate',
}
