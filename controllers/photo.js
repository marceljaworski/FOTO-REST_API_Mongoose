import * as Photo from "../models/Photo.js";


export const getAll = async (req, res, next) => {
    try {
        const result = await Photo.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Photo.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(error);
        // res.status(400).send({error: error.message});
    };
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Photo.getOne(req.params.photoId);
        res.status(200).json(result);
    } catch(error) {
        next(error);
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Photo.replace(req.params.photoId, req.body)
        res.status(201).json(result);
    }catch(error) {
        next(error);
    };
};
export const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send();
        return
    }
    try {
        const result = await Photo.update(req.params.photoId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(error);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        const result = await Photo.deleteOne(req.params.photoId);
        if(result.deletedCount > 0) return res.status(204).end();
    }catch(error) {
        next(error);
    };
};


