import React from 'react'




export default function History(){
    const cityName = JSON.parse(localStorage.getItem('history'));
    console.log('i am',cityName)
    
    return(
        <>
        {/* <h3>History</h3>
        <div className="text-center">
            {cityName
            }
        </div> */}
        </>
    )
}