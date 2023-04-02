import mongoose from "mongoose";
// import Album from "./Album.js"
const settingSchema = new mongoose.Schema({
    cameraModel: {
        type: String,
        default: "canon60D",
        // required: true
    },
    focalLength: {
        type: String, 
        default: Number,
        min:8,
        max:1200
    },
    exposure: {
        type: String,
        default: "1/120"
    },
    aperture: {
        type: Number,
        default: 5.6,
        min: 1.4,
        max: 32
    },
    iso: {
        type: Number,
        default: 160,
        min: 100,
        max: 6400
    },
    whiteBalance: {
        type: Number,
        default: 5200,
        min: 1500,
        max: 10000    
    },
},{_id: false, versionKey: false});
const schemaImage = new mongoose.Schema({
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
        // unique: true,
        // required: true,
    },
    theme: {
        type: String, 
    },
    setting: {
        type: settingSchema,
    },
    settings: settingSchema,
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: true,
    }
},{
    versionKey: false,
    // _id: false,
});
const Image = mongoose.model("Image", schemaImage);

export const getAll = async () => {
    const images = await Photo.find()
    // .populate("album");
    return images;
};
export const create = async (document) => {    
    const newImage = new Image(document);
    const result = await newImage.save();
    return result;
    
};
export const getOne = async (imageId) => {
    const image = await Image.findById(imageId);
    return image;
};
export const replace = async (imageId, data) => {
    const image = await Image.findOneAndReplace({_id: imageId}, data, {returnDocument: "after", runValidators: true},);

    return image;
};
export const update = async (imageId, data) => {
    const image = await Image.findByIdAndUpdate(imageId, data, {new: true, runValidators: true});

    return image;
};
export const deleteOne = async (imageId) => {
    const image = await Image.findByIdAndDelete(imageId)

    return image;
};
export default Image;

