import * as Image from "../models/Image.js";


export const getAll = async (req, res, next) => {
    try {
        const result = await Image.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Image.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(error);
        // res.status(400).send({error: error.message});
    };
  
};