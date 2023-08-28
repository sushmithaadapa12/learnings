const db = require("../models/index");
const conn = db.connection
const {createShortList,ShortlistEntryAll,insertShortlistEntry,deleteShortlistEntry}=require('../helpers/appendShortlist')
const {
    QueryTypes,Op
  } = require('sequelize');

const appendShortlist=async(req,res)=>{
    // let destShortlistId1=req.body.destShortlistId
let {destShortlistId,shortlistId,ids,userId,breifingId}=req.body
try{
    if(destShortlistId=='new'){
      let createShortlist=  await createShortList(userId,false)
        if(createShortlist.status==1){
            destShortlistId=createShortlist.data
        }
        else{
             throw createShortlist.error
        }
    }

    if(destShortlistId){
        if(ids.length==0){
            let allShortlist= await ShortlistEntryAll(destShortlistId,shortlistId,breifingId)
            if(allShortlist.status==1){
                let response = {
                    status: 1,
                    message: "Shortlist Append successfully",
                }
                res.status(200).json(response)
            }else{
                let response = {
                    status: -1,
                    message: "Shortlist Append failed ",
                }
                res.status(200).json(response) 
            }
            }
             else{
                 let appendArtist=await insertShortlistEntry(destShortlistId,shortlistId,ids,breifingId)
                if(appendArtist.status==1){
                    let response =
                     {
                       status: 1,
                       message: "Shortlist Append successfully",
                      
                    }
                    res.status(200).json(response)  
                }else if(appendArtist.status==-1){
                    
                        let response =
                        {
                          status: -1,
                          message: "Shortlist Append Failed ",
                       }
                       res.status(200).json(response)

                    }
                    else{
                        let response =
                        {
                          status: 1,
                          message: "Shortlist Append successfully",
                       }
                       res.status(200).json(response)
                    
                    }
        }
    }
}catch(error){
    let response = {
        status: "error",
        message: 'Internal server error',
        error
    };
    res.status(500).json(response);
}
}

const moveShortList=async(req,res)=>{
    let {destShortlistId,shortlistId,ids,userId,breifingId}=req.body
    try{
        if(destShortlistId=='new'){
            let createShortlist= await createShortList(userId,false)
            if(createShortlist.status==1){
                destShortlistId=createShortlist.data
            }
            else{
                 throw createShortlist.error
            }
        }
    
        let appendArtist=await insertShortlistEntry(destShortlistId,shortlistId,ids,breifingId)
                    if(appendArtist.status){
                        let deleteRecords= await deleteShortlistEntry(shortlistId,ids)
                        if(deleteRecords.status==1){
                        let response =
                         {
                           status: 1,
                           message: "Shortlist Moved successfully",
                        }
                        res.status(200).json(response) 
                        }
                         
                    }else{
                        let response =
                        {
                          status: -1,
                          message: "Shortlist Moved failed",
                       }
                       res.status(200).json(response)   
                    }
    }catch(error){
        let response = {
            status: "error",
            message: 'Internal server error',
            error
        };
        res.status(500).json(response);
    }
    
}


const clientShortlist=async(req,res)=>{
    let {destShortlistId,shortlistId,ids,userId,breifingId}=req.body
    try{
        if(destShortlistId){
            if(ids.length==0){
                let allShortlist= await ShortlistEntryAll(destShortlistId,shortlistId,breifingId)
                if(allShortlist.status==1){
                    let response = {
                        status: 1,
                        message: "Shortlist Append successfully",
                    }
                    res.status(200).json(response)
                }else if(allShortlist.status==-1){
    
                    let response = {
                        status: -1,
                        message: "Shortlist Append failed ",
                    }
                    res.status(200).json(response) 
                }else {
                    throw createShortlist.error
                }

                }
                 else{
                     let appendArtist=await insertShortlistEntry(destShortlistId,shortlistId,ids,breifingId)
                    if(appendArtist.status){
                        let response =
                         {
                           status: 1,
                           message: "Shortlist Append successfully",
                        }
                        res.status(200).json(response)  
                    }else if(appendArtist.status==-1){
                        let response =
                        {
                          status: -1,
                          message: "Shortlist Append failed",
                       }
                       res.status(200).json(response)   
                    }else{

                        throw createShortlist.error
                    }
            }
        }
    }catch(error){
        let response = {
            status: "error",
            message: 'Internal server error',
            error
        };
        res.status(500).json(response);
    }
}
module.exports={appendShortlist,moveShortList,clientShortlist}
