import mongoose from "mongoose";

const schemaPhoto = new mongoose.Schema({
    price: {
        type: Number, 
    },
    date: {
        type: Date, 
    },
    url: {
        type: String,
        unique: true,
        required: true,
    },
    theme: {
        type: String, 
    },
});
const Photo = mongoose.model("Photo", schemaPhoto);

export const getAll = async () => {
    const photos = await Photo.find();
    return photos;
};
export const create = async (document) => {
    const newPhoto = new Photo(document);
    const result = await newPhoto.save();
    return result;
};
export const getOne = async (photoId) => {
    const photo = await Photo.findById(photoId);
    return photo;
};
export const replace = async (photoId, data) => {
    const photo = await Photo.findOneAndReplace({_id: photoId}, data, {returnDocument: "after"})

    return photo
}
export const update = async (photoId, data) => {
    const photo = await Photo.findByIdAndUpdate(photoId, data, {new: true})

    return photo
}


export const deleteOne = async (photoId) => {
    const photo = await Photo.findByIdAndDelete(photoId)

    return photo
}

