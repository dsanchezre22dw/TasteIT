import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";

export default function AddedFridge(props) {

    useEffect( () => {
        let array = props.data.amount;
        if (!array[props.ingredientName]) {
            array[props.ingredientName] = 1;
        }
        console.log(array);
        props.setData('amount', array);
    },[])

    const removeIngredient = () => {
        let ingrediente = props.ingredientName;
        const updatedIngredients = props.selectedIngredients.filter(ingredient => ingredient !== ingrediente);
        props.setSelectedIngredients(updatedIngredients);


        let array = props.data.amount;
        delete array[ingrediente];
        console.log(array);
        props.setData('amount', array);
    };

    const addOne = ((e, action) => {

        let value = parseInt(e.target.value);
        let array = props.data.amount;

        if (action === 'increment') {
            value = array[props.ingredientName]+1;
        } else if (action === 'decrement') {
            value = array[props.ingredientName]-1;
        }

        console.log('siii',value);
        array[props.ingredientName] = value;
        console.log(array);
        

        if (!(value > 0) && e.target.value != 0) {
            removeIngredient();
        } else {
            if(e.target.value == 0){
                array[props.ingredientName] = '';
            }
            
            props.setData('amount', array);
        }
        
    })

    const handleCheck = () => {
        let array = props.dataC.checked;
        let ingrediente = props.ingredientName;
        if (document.shoppingList[ingrediente].checked) {
            array.push(ingrediente);
        } else {
            array.splice(array.indexOf(ingrediente),1)
        }
        props.setDataC('checked', array);
        console.log('checked',array)
    }

    
    return (
        <div className="flex justify-between items-center">
            <input type="checkbox" name={props.ingredientName} id="" onChange={handleCheck}/>
            <p className="w-[100px]">{props.ingredientName}</p>

            <div class="relative flex items-center max-w-[8rem]">
                <button type="button" id="decrement-button" value="-1" onClick={(e) => addOne(e, 'decrement')} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                    </svg>
                </button>
                <input type="text" id="quantity-input" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60px]" placeholder="999" required value={props.data.amount[props.ingredientName]} onChange={(e) => addOne(e, '')} />
                <button type="button" id="increment-button" value="1" onClick={(e) => addOne(e, 'increment')} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>

            <TrashIcon color="red" className="w-[20px]" onClick={removeIngredient} />
        </div>
    )
}
