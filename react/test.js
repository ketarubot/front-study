import 'react'

function MyButton() {
    function handleClick() {
        alert('You clicked me!')
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}
MyButton()