import * as Photographer from "../models/Photographer.js";

export const getAll = async (req, res, next) => {
    try {
        const result = await Photographer.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Photographer.create(req.body);
        res.status(201).json(result);
    } catch(err) {
        next(err);
    }
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Photographer.getOne(req.params.photographerId);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Photographer.replace(req.params.photographerId, req.body)
        res.status(201).json(result)
    }catch(err) {
        next(err);
    };
};
export const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await Photo.update(req.params.photographerId, req.body);
        res.status(201).json(result);
    }catch(err) {
        next(err);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Photo.deleteOne(req.params.photographerId)
        res.status(204).send()
    }catch(err) {
        next(err);
    };
    console.log(result)
}


