// import {useState,useEffect} from 'react'

// const Profile=(props)=>{
//     const[count,setCount]=useState(0)
//     const[count1,setCount1]=useState(1)

//     useEffect(()=>{
//         const timer= setInterval(()=>{
//             console.log("fun timer")
//         },1000)

//         return()=>{
//             clearInterval(timer)
//         }
//     },[])

//     const{name}=props
//     return(
//         <div>
//             <h2>Profile Functional Component</h2>
//             <h3>Name - {name}</h3>
//             <h3>Count - {count}</h3>
//             <h3>Count - {count1}</h3>
//             <button onClick={()=>{
//                 setCount(count+1)
//                 setCount1(10)}}>
//                 Count</button>
//         </div>
//     )
// }
// export default Profile