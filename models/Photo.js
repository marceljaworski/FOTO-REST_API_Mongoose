import mongoose from "mongoose";
const equipmentSchema = new mongoose.Schema({
    cameraModel: {
        type: String,
    },
    focalLength: {
        type: String, 
    },
    exposure: {
        type: String,  
    },
    aperture: {
        type: Number,
        min: 1.4,
        max: 32 
    },
    iso: {
        type: Number,
        min: 100,
        max: 6400  
    },
    white_balance: {
        type: Number,
        min: 2500,
        max: 10000
           
    },
},{_id: false, versionKey: false});
const schemaPhoto = new mongoose.Schema({
    price: {
        type: Number, 
    },
    date: {
        type: Date, 
    },
    url: {
        type: String,
        validate: {
            validator: (v) => {
                const val = v.startsWith("http") || v.startsWith("www")
                return val
            },
            message: "Please write a valid URL"
        },
        unique: true,
        required: true,
    },
    theme: {
        type: String, 
    },
    equipment: [equipmentSchema]
},{
    versionKey: false,
    // _id: false,
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
    const photo = await Photo.findOneAndReplace({_id: photoId}, data, {returnDocument: "after", runValidators: true},);

    return photo;
};
export const update = async (photoId, data) => {
    const photo = await Photo.findByIdAndUpdate(photoId, data, {new: true, runValidators: true});

    return photo;
};
export const deleteOne = async (photoId) => {
    const photo = await Photo.findByIdAndDelete(photoId)

    return photo;
};
export default Photo;

