# 2 types of routing

client side - no api call
server side - api call to get the page

# Redux Toolkit 
- Install @reduxjs/toolkit and react-redux
- Build our store 
- connect store to our app
- create a slice (cart slice) of store
- dispatch (action)
- Reducer
- Selector

#  Types of testing
- unit testing
- integration testing
- end to end testing - e2e testing

# setting up testing in our app
- Install react testing library
- install jest
- install babel dependencies required by jest
- Congigure babel
- Configure parcel config file to disable default babel transpilation(by parcel)
- jest - npx jest --init (will create jest config file)
- install jsdom library (for jest version > 28)

__ is known as dunder method
- install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside babel config
- install npm i -D @testing-library/jest-dom