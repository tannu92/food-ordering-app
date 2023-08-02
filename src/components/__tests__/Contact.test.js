import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//combine test in describe

describe("Contact us page test cases",()=>{
    // beforeAll(()=>{
    //     console.log("Before All")
    // })

    // beforeEach(()=>{
    //     console.log("Before Each")
    // })

    // afterAll(()=>{     // afterEach
    //     console.log("afterAll")
    // })

    test("Should load contact us component", ()=>{    //can write it instead of test
        render(<Contact/>)
        // Querying
        const heading = screen.getByRole("heading")
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load button inside contact us component", ()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button")
        // Assertion
        expect(button).toBeInTheDocument()
    })
})


