import mongoose from "mongoose";


const schema = new mongoose.Schema({
    Price: {
        type: Number, 
    },
    Date: {
        type: Date, 
    },
    Url: {
        type: String,
        required: true,
        unique: true, 
    },
    Theme: {
        type: String, 
    },
})
const Photo = mongoose.model("Photo", schema);

export const create = async (document) => {
    const newPhoto = new Photo(document);
    const result = await newPhoto.save();
    return result;
};
export const getAll = async () => {
    const photos = await Photo.find();
    return photos;
};
// export const getOne = async () => {};
// export const editOne = async () => {};
// export const deleteOne = async () => {};