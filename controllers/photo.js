import * as Photo from "../models/Photo.js";

export const getAll = async (req, res) => {
    const result = await Photo.getAll();
    res.status(200).json(result);
};

export const create = async (req, res) => {
    try {
        const result = await Photo.create(req.body);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error.message)
    }
  
};
export const getOne = async (req, res) => {
    const result = await Photo.getOne(req.params.photoId)
    if (!result) {
        res.status(404).send("not found")
        return
    } 
    res.status(200).json(result)
}
export const replace = async (req, res) => {
    const result = await Photo.replace(req.params.photoId, req.body)
    console.log(result)
    if (!result) {
        res.status(404).send("not found")
        return
    } 
    
    res.status(201).json(result)
}

export const deleteOne = async (req, res) => {
    const result = await Photo.deleteOne(req.params.photoId)
    console.log(result)
    if (!result) {
        res.status(404).send("not found")
        return
    }

    res.status(204).send("deleted")
}


