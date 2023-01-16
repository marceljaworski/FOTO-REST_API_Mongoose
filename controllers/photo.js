import * as Photo from "../models/Photo.js";


const errorSwitch = (err) => {
    switch(err.path) {
        case "_id":
            err.statusCode = 404;
            err.message = "ID not found"
            break
        default:
            err.statusCode = 400;
            err.message = "Check your input";
    }
    return err;
}


export const getAll = async (req, res, next) => {
    try {
        const result = await Photo.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(errorSwitch(err));
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Photo.create(req.body);
        res.status(201).json(result);
    } catch(err) {
        next(errorSwitch(err));
        // res.status(400).json(error.message)
    }
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Photo.getOne(req.params.photoId);
        res.status(200).json(result);
    } catch(err) {
        next(errorSwitch(err));
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Photo.replace(req.params.photoId, req.body)
        res.status(201).json(result)
    }catch(err) {
        next(errorSwitch(err));
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
    }catch(err) {
        next(errorSwitch(err));
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Photo.deleteOne(req.params.photoId)
        res.status(204).send()
    }catch(err) {
        next(errorSwitch(err));
    };
    console.log(result)
}


