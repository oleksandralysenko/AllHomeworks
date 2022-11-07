import React from "react"
const HOC = ({Component, a}) => {
    console.log(Component)
    console.log(a)
    return Component
    
}

export default HOC;