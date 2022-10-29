export type ShapeData = {
  shape: string;
  size: number;
  color: string;
  rotation: number;
  position: number[];
}

export type GameStatus = "start" | "ongoing" | "end";