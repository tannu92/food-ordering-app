import {useRouteError} from 'react-router-dom'

const Error = ()=>{
    const err= useRouteError()
    return(
        <div>
        <p>{err.status} - {err.statusText}</p>
        <h2>Something went wrong</h2>
        </div>
    )
}
export default Error