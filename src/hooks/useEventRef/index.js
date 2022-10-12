import { useRef, useEffect, useCallback } from "react"

export default function useEventRef(callback) {
  if (callback && typeof callback !== "function") {
    throw new Error(
      "[useEventRef] callback that passed into hook should be a function."
    )
  }

  const eventRef = useRef(callback)

  useEffect(() => {
    eventRef.current = callback
  })

  return useCallback((...args) => eventRef.current?.(...args), [])
}
