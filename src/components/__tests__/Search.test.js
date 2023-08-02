import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA from "../mocks/resListMockData.json"
import {BrowserRouter} from 'react-router-dom'
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{              //mock fetch function
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should search Res list for pizza input", async() =>{
    await act(async () => render(
        <BrowserRouter>
       <Body/>
    </BrowserRouter>)
    )

    const cardsBeforeSearch=screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(9)

    const searchInput= screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target: {value:"pizza"}})
    const searchButton= screen.getByRole("button",{name:"Search"})
    fireEvent.click(searchButton)

    // screen should load 2 cards

    const cardsAfterSearch= screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(2)
})

it("Should filter top rated restaurants",async() => {
    await act(async()=>render(
        <BrowserRouter>
       <Body/>
    </BrowserRouter>)
    )

    const cardsBeforeFilter=screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(9)
    const topRatedButton= screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(topRatedButton)

    // screen should load 6 cards
    const cardsAfterFilter= screen.getAllByTestId("resCard")

    expect(cardsAfterFilter.length).toBe(5)

})