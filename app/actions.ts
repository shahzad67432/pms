"use server";
import {supabase}  from "@/lib"
import jwt from 'jsonwebtoken'

export const getProjects = async()=>{
  try{
    let {data: Projects, error} = await supabase
      .from("Projects")
      .select('*')
    console.log("projects from server side", Projects)
    if(Projects) {return Projects}
    else if(error) {return error}
  }catch(e){
    console.error(e, "server erroe, projects fetch failed")
  }
}

export const createUser = async({name, email, password})=>{
  try{
    const token = jwt.sign(email, "SECRET_KEY")
    const { error } = await supabase
    .from('User')
    .insert([
      { name, email, password },
    ])
    if (!error) {
      console.log("user created")
      return {
        success: true,
        token,
      }
    }else{
      console.error("error creating user", error)
    }

  }catch(e){

    console.error(e, "server erroe, user creation failed")

  }
}