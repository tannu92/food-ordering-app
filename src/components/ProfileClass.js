// import React from "react";

// class ProfileClass extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userInfo: {
//         name: "Dummy",
//         location: "Dummy location",
//       },
//     };
//   }
//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/tannu92");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     });

//     this.timer = setInterval(() => {
//       console.log("hello jnsjdcnjn");
//     }, 1000);
//   }
//   // componentDidUpdate(prevProps,prevState){
//   //     if(this.state.count!=prevState.count){
//   //         // some code
//   //     }
//   // }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Profile class component</h1>
//         <h3>Name - {this.state.userInfo.login}</h3>
//         <h3>Type - {this.state.userInfo.type}</h3>
//         <img src={this.state.userInfo.avatar_url} />
//       </div>
//     );
//   }
// }

// export default ProfileClass;
