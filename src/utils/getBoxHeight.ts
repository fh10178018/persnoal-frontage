import useWinSize from "./useWinSize"

export default function useBoxHeight() {
  const { width, height } = useWinSize()
  const bottom = Math.floor((width / 1235) * 200)
  return height - bottom
}

