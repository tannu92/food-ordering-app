import { fireEvent, screen, render } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import {BrowserRouter} from 'react-router-dom'
import "@testing-library/jest-dom"


test("Should load Header Component with a login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    // const loginButton= screen.getByRole("button")

    // const loginButton = screen.getByText("Login")
    const loginButton= screen.getByRole("button",{name: "Login"})


    expect(loginButton).toBeInTheDocument()
})

test("Should load Header Component with Cart items 0",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const cartItem= screen.getByText("Cart(0)")  // can pass regex as well

    expect(cartItem).toBeInTheDocument()
})

test("Should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton= screen.getByRole("button", {name:"Login"})  // can pass regex as well
    fireEvent.click(loginButton)
    const logoutButton= screen.getByRole("button", {name:"Logout"})  // can pass regex as well

    expect(logoutButton).toBeInTheDocument()
})