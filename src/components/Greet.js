import React from 'react'

// function Greet (){
//     return <h1>Hello Ash</h1>
// }

const Greet = (props)=>{
    console.log(props);
    return (
        <di>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
        </di>
    )
}


export default Greet