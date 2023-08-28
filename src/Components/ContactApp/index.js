import { useState ,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import ContactItem from '../ContactItem'
import './index.css'

const ContactApp=()=>{
    const storedList = JSON.parse(localStorage.getItem("form"))
    const [name,setName]=useState('')
    const [birth,setBirth]=useState("")
    const [email,setEmail]=useState("")
    const [subject,setSubject]=useState("")
    const [msgList,setMsgList]=useState(storedList===null?[]:storedList)
    const [onShow,setShow]=useState(false)
    const [toggleSubmit,setToggleSubmit]=useState(true)
    const [isEditItem,setEditItem]=useState(null)
    const onChangeFullName=(event)=>{
               setName(event.target.value)
    }

    useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(msgList))
        console.log("hello joseph")
    },[msgList])

    const onChangeBirth=(event)=>{
          setBirth(event.target.value)
    }

    const onChangeEmail=(event)=>{
        const eventValue=event.target.value
        setEmail(eventValue)
    }

    const onChangeSubject=(event)=>{
        setSubject(event.target.value)
    }

    const onShowDetails=()=>{
           setShow(prevState=>!prevState)
    }

    const onChangeSubmit=(event)=>{
        event.preventDefault()
        const checkedMail=email.endsWith("@gmail.com")

        const newMessage={
            id:uuidv4(),
            name,
            birth,
            email:checkedMail?email:alert("Please Provide correct email"),
            subject,
            
} 

 if (!toggleSubmit){
    setMsgList(msgList.map(eachItem=>{
        if (eachItem.id===isEditItem){
            return {...eachItem,name:name,birth:birth,email:email,subject:subject}
        }
        return eachItem
    }))
    setToggleSubmit(true)
    setBirth("")
        setEmail("")
        setName("")
        setSubject("")

 }else{

 

        setMsgList(prevState=>[...prevState,newMessage])
        setBirth("")
        setEmail("")
        setName("")
        setSubject("")
 }
 

}

const onDelete=(id)=>{
    const updatedList=msgList.filter(eachItem=>eachItem.id!==id)
    setMsgList(updatedList)

}

const onEdit=(id)=>{
    let newEditItem=msgList.find(eachItem=>{
        return eachItem.id===id
    })
    setToggleSubmit(false)
    setBirth(newEditItem.birth)
        setEmail(newEditItem.email)
        setName(newEditItem.name)
        setSubject(newEditItem.subject)
        setEditItem(id)
}

   


    return(
        <div className='bg-container'>
            <form onSubmit={onChangeSubmit}>
            <h1>Contact Us</h1>
            <label>Full Name</label>
            <br/>
            <input minLength={5} maxLength={25} onChange={onChangeFullName} value={name} type="text" required placeholder='your name' className='inputs'/>
            <br/>
            <label>Date of Birth</label>
            <br/>
            <input type="date" onChange={onChangeBirth} value={birth} required className='inputs'/>
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" onChange={onChangeEmail} value={email} required placeholder='your email' className='inputs'/>

            <br/>
            <label>Subject</label>
            <br/> 
            <textarea rows={5} cols={40} value={subject} onChange={onChangeSubject} required placeholder='your subject' className='inputs-subject'/>
            <br/> 
            <div className='button-container'>
                {toggleSubmit?<button type='submit'>Save Contact</button>:<button type='submit'>Edit Contact</button>}

            <button onClick={onShowDetails}>Show/Hide Contact Details</button>
            </div>
            </form>
            
            <ol className='list-main-container' type='1'>
                {(onShow && msgList.length>0)&&(<li className='list-item'>
                    <p className='para-item'>Full Name</p>
                    <p className='para-item'>Birth</p>
                    <p className='para-item'>Email</p>
                    <p className='para-item'>Subject</p>
                </li>)}
                
                {(onShow)&&msgList.map(eachItem=><ContactItem eachItem={eachItem} key={eachItem.id} onDelete={onDelete} onEdit={onEdit}/>)}
            </ol>
           
        </div>
    )

}

export default ContactApp