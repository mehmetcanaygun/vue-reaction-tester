import ClickSuccess from "../assets/click-success.wav"

export const SHAPES = [
  "square",
  "rectangle",
  "circle",
  "triangle"
]

export const MIN_MAX_SIZE = {
  min: 20,
  max: 200
}

export const MIN_MAX_ROTATION = {
  min: -30,
  max: 30
}

export const CLICK_SUCCESS = new Audio(ClickSuccess);

export const TIME_LIMIT = 20; // in seconds