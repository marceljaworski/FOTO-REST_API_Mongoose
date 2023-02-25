import bcrypt from "bcrypt";
import * as Photographer from "../models/Photographer.js";
import token from "../lib/token.js";



export const getAll = async (req, res, next) => {
    try {
        const result = await Photographer.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    };
};
export const create = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 15)
        req.body.password = hashedPassword
        const result = await Photographer.create(req.body);
        res.status(201).json(result);
    } catch(error) {
        next(error);
    };
    
};
export const login = async (req, res, next) => {
   
    try {
        const result = await Photographer.getOne({email: req.body.email});
        const passwordIsEqual = await bcrypt.compare(req.body.password, result.password);
        if(!passwordIsEqual)return res.status(401).end();
        if(passwordIsEqual){
            const userToken = token.signToken({id: result._id})
            const expDate = 1000 * 60 * 60 * 24
            res.cookie("jwt", userToken, {
                sameSite: "lax",
                maxAge: expDate,
                httpOnly: true
            })
            res.cookie("loggedIn", result._id.toString(), {
                sameSite: "lax",
                maxAge: expDate,
                httpOnly: false
            })

            return res.status(201).json({message: "successfully logged in", id: result._id})
        }
    } catch(error) {
        next(error);
    };
  
};
export const getOne = async (req, res, next) => {
    try {
        const result = await Photographer.getOne(req.params.photographerId);
        res.status(200).json(result);
    } catch(error) {
        next(error);
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Photographer.replace(req.params.photographerId, req.body)
        res.status(201).json(result);
    }catch(error) {
        next(error);
    };
};
export const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await Photo.update(req.params.photographerId, req.body);
        res.status(201).json(result);
    }catch(error) {
        next(error);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        const result = await Photo.deleteOne(req.params.photographerId);
        if(result.deletedCount > 0) return res.status(204).send();
    }catch(error) {
        next(error);
    };
}


