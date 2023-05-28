import React from 'react'
import '../../assets/style/sidebar.css'

const SideBar = () => {
    return (
        <ul className='btn-ul'>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    MILK SHAKES
                </button>
                <button className='btn-list ms-1' >
                    ICE CREAM
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    TANDOOR SE ROTI
                </button>
                <button className='btn-list ms-1'>
                    DAL
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    RICE & BIRYANI
                </button>
                <button className='btn-list  ms-1' >
                    FRESH JUICE
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    BEVERAGES
                </button>
                <button className='btn-list ms-1' >
                    UTTAPAM
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    CHINESE
                </button>
                <button className='btn-list ms-1' >
                    FXIED MEALS
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    STARTERS
                </button>
                <button className='btn-list ms-1 active'>
                    SOUP
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    INDIAN PUNJABI
                </button>
                <button className='btn-list ms-1'>
                    SANDWICH
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    PAPAD & RAITA
                </button>
                <button className='btn-list ms-1'>
                    PIZZA
                </button>
            </li> <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    BOMBAY CHAT & SNACKS
                </button>
                <button className='btn-list ms-1'>
                    OVEN BAKED
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    SALAD
                </button>
                <button className='btn-list ms-1'>
                    BHAJIPAV
                </button>
            </li>
            <li className='my-1 w-100 d-flex '>
                <button className='btn-list' >
                    PULAV
                </button>
                <button className='btn-list ms-1'>
                    BHAJI KE SATH SATH
                </button>
            </li>
        </ul>
    )
}

export default SideBar