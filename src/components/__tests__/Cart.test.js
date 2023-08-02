import { act } from "react-dom/test-utils"
import {fireEvent,render,screen} from '@testing-library/react'
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from "../mocks/resMenuMockData.json"
import {BrowserRouter} from 'react-router-dom'
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{return Promise.resolve(MOCK_DATA)}
    })
})

it("Should load res menu component",async()=>{
    await act(async()=>(render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>)))

    const accordianHeader = screen.getByText("Recommended (12)")
    fireEvent.click(accordianHeader)

    const itemList= screen.getAllByTestId("foodItems")
    expect(itemList.length).toBe(12)

    const addBtns = screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart(1)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(13)


})