import React, { useState } from "react";
import { getNumbers } from "../../../services/ObservableService";

const ObservableExample = () =>{
 
    const [number, setNumber] = useState(0);

    const obtainNumbers = () => {

        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number:', newNumber);
                    setNumber(newNumber);

                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                    console.log('Error ')
                },
                complete(){
                    alert(`Finished with: ${number}`);
                    console.log('Done with the observable')
                }
            }
        )
    }
    return (
        <div>
            <h2>Numebr: {number}</h2>
            <button onClick={obtainNumbers}>
                Obtain new Numbers
            </button>
        </div>
    )
}

export default ObservableExample;