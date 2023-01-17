import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    
},{versionKey: false});

const Album = mongoose.model("Album", schema);

export const getAll = async () => {
    const albums = await Album.find();
    return albums;
};
export const create = async (document) => {    
    const newAlbum = new Album(document);
    const result = await newAlbum.save();
    return result;
    
};
export const getOne = async (albumId) => {
    const album = await Album.findById(albumId);
    return album;
};
export const replace = async (albumId, data) => {
    const album = await Album.findOneAndReplace({_id: albumId}, data, {returnDocument: "after", runValidators: true},);

    return album;
};
export const update = async (albumId, data) => {
    const album = await Album.findByIdAndUpdate(albumId, data, {new: true, runValidators: true});

    return album;
};
export const deleteOne = async (albumId) => {
    const album = await Album.findByIdAndDelete(albumId)

    return album;
};
export default Album;

