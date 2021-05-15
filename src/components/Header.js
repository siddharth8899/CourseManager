import react from 'react'

function Header({name}){
    return (
        <div className="text-center">
            <h1>WELCOME {name}</h1>
            {/* <hr/> */}
        </div>
    )
}

export default Header