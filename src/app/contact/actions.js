"use server"
import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";

export const submitContact=async (data)=>{
    try{
        await dbConn();

        await Contact.create(body);
        return{status:"OK",message:"Message sent successfully!"};
    }catch (e) {
        return{status:"ERROR",message:"Server error, please try again!"};

    }
}