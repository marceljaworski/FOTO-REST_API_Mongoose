import mongoose from "mongoose"

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
            message: "Please enter a valid email address"
        }
    },
    password: String,
    address:{
        street: String,
        houseNumber: {
            type: String,
            validate: {
                validator: (v) => /^[0-9].*$/.test(v),
                message: "Please insert some kind of number as House number"
            }
        },
        zipCode: String,
        city: String,
        // country: {
        //     type: String,
        //     enum: ["Deutschland", "Moldawien", "Iran", "Syrien", "Venezuela"]
        // }
    },
})
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

const Photographer = mongoose.model("Photographer", schema)

export default Photographer
