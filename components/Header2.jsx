import React from 'react'

const Header2 = () => {

    const List = [
        {
            name:"Banglore"
        },
        {
            name:"Kolkata"
        },
        {
            name:"Mumbai"
        },
        {
            name:"Delhi"
        },
        {
            name:"Hyderabad"
        },
        
    ]

  return (
    <div >
        <div className="flex px-10 bg-gray-300 justify-between">
           {
            List.map((e)=>{
                return(
                    <span key={e.name}>{e.name}</span>
                )
            })
           } 
        </div>
    </div>
  )
}

export default Header2