import './index.css'

const ContactItem=(props)=>{
    const {eachItem,onDelete,onEdit}=props
    const {name,birth,email,subject,id}=eachItem 
  const onDeleteItem=()=>{
           onDelete(id)
   }

   const onEditItem=()=>{
         onEdit(id)
   }

    return(
        <li className='list-item-1'>
            

            <p className='para-item-1'>{name}</p>
            <p className='para-item-1'>{birth}</p>
            <p className='para-item-1'>{email}</p>
            <p className='para-item-1'>{subject}</p>
            <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" alt="edit" onClick={onEditItem} className='delete-img'/>
            <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="delete" className='delete-img' onClick={onDeleteItem}/>
        </li>
    )

}

export default ContactItem