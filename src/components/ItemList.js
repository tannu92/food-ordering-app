import React from 'react'
import { CDN_URL } from '../utils/constants'
import {useDispatch} from 'react-redux'
import {addItem}  from '../utils/cartSlice'

const ItemList = ({data}) => {

  const dispatch=useDispatch()

  const handleAddItem=(item)=>{
    // Dispatch an action
    dispatch(addItem(item))
  }


  return (
    <div>{
        data.map((item)=>{
            return (
                <div key={item.card.info.id} className='p-2 m-2 border-b-2 text-left flex justify-between'>
                    <div className='w-9/12'>
                    <div className='py-2'>
                    <span>{item.card.info.name}</span> 
                    <span> - ₹{item.card.info.price/100}</span>
                    </div>
                  
                     <p className='text-xs' > {item.card.info.description}</p>
                   </div>
                   <div className='w-3/12 p-4'>
                       <div className='absolute'>
                    <button className='p-1 bg-black shadow-lg mx-16 rounded-lg text-white'
                    onClick={()=>{handleAddItem(item)}}
                    >Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-[100%]" />
                    </div>

                </div>
            )
        })
        }</div>
  )
}

export default ItemList 