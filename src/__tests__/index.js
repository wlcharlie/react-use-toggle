import { render, screen, renderHook, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import useToggle from "../index.js"

function Component({ on }) {
  const { isOn, toggle, toggleOn, toggleOff } = useToggle({ defaultState: on })
  return (
    <div>
      <h1>{isOn ? "on" : "off"}</h1>
      <button onClick={toggle}>toggle</button>
      <button onClick={toggleOn}>toggleOn</button>
      <button onClick={toggleOff}>toggleOff</button>
    </div>
  )
}

describe("Test with component", () => {
  test("should render component with default state false", () => {
    render(<Component />)
    expect(screen.getByText("off")).toBeInTheDocument()
  })

  test("should display on with toggle button click", () => {
    render(<Component />)
    expect(screen.getByText("off")).toBeInTheDocument()
    const button = screen.getByRole("button", { name: /^toggle$/i })
    userEvent.click(button)
    expect(screen.getByText("on")).toBeInTheDocument()
  })

  test("should display true from custom default state and display off after toggleOff button click", () => {
    render(<Component on={true} />)
    expect(screen.getByText("on")).toBeInTheDocument()
    const button = screen.getByRole("button", { name: /^toggleOff$/i })
    userEvent.click(button)
    expect(screen.getByText("off")).toBeInTheDocument()
  })
})

describe("Test with hook", () => {
  test("should default state be false", () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current.isOn).toBe(false)
  })

  test("should default state be true from custom initial state", () => {
    const { result } = renderHook(() => useToggle({ defaultState: true }))

    expect(result.current.isOn).toBe(true)
  })

  test("should state toggle to true by toggle", () => {
    const { result } = renderHook(() => useToggle())

    act(() => result.current.toggle())

    expect(result.current.isOn).toBe(true)
  })

  test("should state toggle to true by toggleOn", () => {
    const { result } = renderHook(() => useToggle())

    act(() => result.current.toggleOn())

    expect(result.current.isOn).toBe(true)
  })

  test("should state toggle to false by toggleOff", () => {
    const { result } = renderHook(() => useToggle({ defaultState: true }))

    act(() => result.current.toggleOff())

    expect(result.current.isOn).toBe(false)
  })
})
