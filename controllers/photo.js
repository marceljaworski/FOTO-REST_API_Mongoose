import * as Photo from "../models/Photo.js";


const errorSwitch = (error) => {
    switch(error.path) {
        case "_id":
            error.statusCode = 404;
            error.message = "ID not found"
            break
        default:
            error.statusCode = 400;
            error.message = "Check your input";
    }
    return error;
}


export const getAll = async (req, res, next) => {
    try {
        const result = await Photo.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(errorSwitch(error));
        // res.status(400).json(error.message);
    };
};

export const create = async (req, res, next ) => {
    try {
        const result = await Photo.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(errorSwitch(error));
        // res.status(400).json(error.message);
    }
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Photo.getOne(req.params.photoId);
        res.status(200).json(result);
    } catch(error) {
        next(errorSwitch(error));
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Photo.replace(req.params.photoId, req.body)
        res.status(201).json(result)
    }catch(error) {
        next(errorSwitch(error));
    };
};
export const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await Photo.update(req.params.photoId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(errorSwitch(error));
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Photo.deleteOne(req.params.photoId)
        res.status(204).end()
    }catch(error) {
        next(errorSwitch(error));
    };
    console.log(result)
}


