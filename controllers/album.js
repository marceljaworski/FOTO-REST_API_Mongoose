import * as Album from "../models/Album.js";


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
        const result = await Album.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(errorSwitch(error));
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Album.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(errorSwitch(error));
        // res.status(400).json(error.message)
    }
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Album.getOne(req.params.albumId);
        res.status(200).json(result);
    } catch(error) {
        next(errorSwitch(error));
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Album.replace(req.params.albumId, req.body)
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
        const result = await Album.update(req.params.albumId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(errorSwitch(error));
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Album.deleteOne(req.params.albumId)
        res.status(204).send()
    }catch(error) {
        next(errorSwitch(error));
    };
    console.log(result)
}


