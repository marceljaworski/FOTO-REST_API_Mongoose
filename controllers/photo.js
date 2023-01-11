import * as Photo from "../models/Photo.js";

export const getAll = async (req, res) => {
    const result = await Photo.getAll();
    res.status(200).json(result);
};
// export const get = async (req, res) => {
//     res.status(200).send()
// };
export const create = async (req, res) => {
    try {
        const result = await Photo.create(req.body);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error.message)
    }
  
};
export const getOne = async (photoId) => {
     //const photo = await Photo.findOne({_id: photoId})

    const photo = await Photo.findById(photoId)

    return photo
}
export const replace = async (req, res) => {
    const result = await Photo.editOne(req.params.photoId, req.body)
    
    if (!result) {
        res.status(404).send("nicht da digga")
        return
    } 
    
    res.status(201).json(result)
}

export const deleteOne = async (req, res) => {
    const result = await Photo.deleteOne(req.params.photoId)
    console.log(result)
    if (!result) {
        res.status(404).send("nicht da digga")
        return
    }

    res.status(204).send("Erfolgreich gelöscht")
}


