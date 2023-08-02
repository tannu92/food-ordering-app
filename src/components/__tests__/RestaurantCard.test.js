import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard Component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

   const name= screen.getByText("Faasos - Wraps & Rolls")
   expect(name).toBeInTheDocument()
})