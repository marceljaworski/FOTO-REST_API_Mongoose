import * as Album from "../models/Album.js";


export const getAll = async (req, res, next) => {
    try {
        const result = await Album.getAll();
        res.status(200).json(result);
    }catch(error) {
        next(error);
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Album.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(error);
    };
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Album.getOne(req.params.albumId);
        res.status(200).json(result);
    }catch(error) {
        next(error);
    };
};
export const replace = async (req, res, next) => {
    try {
        const result = await Album.replace(req.params.albumId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(error);
    };
};
export const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send();
        return
    };
    try {
        const result = await Album.update(req.params.albumId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(error);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Album.deleteOne(req.params.albumId)
        res.status(204).send();
    }catch(error) {
        next(error);
    };
};


