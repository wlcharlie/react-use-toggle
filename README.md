# react-use-toggle

A hook to toggle state between true and false.

## Demo

[DEMO - useToggle Plus](https://build-own-hooks.vercel.app/hooks/use-toggle-plus)

## Install

```bash
npm i @build-own-hooks/use-toggle
```

## Usage

```jsx
import useToggle from "@build-own-hooks/use-toggle"

function App() {
  const { isOn, toggle, toggleOn, toggleOff } = useToggle()

  return (
    <div>
      {isOn && "ON"}
      <button onClick={() => toggle}>toggle!</button>
    </div>
  )
}
```
