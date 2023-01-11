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
        const result = await Kunde.create(req.body);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error.message)
    }
  
};
// export const replace = async (req, res) => {
//     res.status(201).send()
// };
// export const deleteOne = async (req, res) => {
//     res.status(200).send()
// };


