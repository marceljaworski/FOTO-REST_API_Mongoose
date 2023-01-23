import mongoose from "mongoose"

const photographerSchema = mongoose.Schema({
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
        // }Album
    },
})
const Photographer = mongoose.model("Photographer", photographerSchema);

export const getAll = async () => {
    const photographers = await Album.find();
    return photographers;
};
export const create = async (document) => {    
    const newPhotographer = new Photographer(document);
    const result = await newPhotographer.save();
    return result;
    
};
export const getOne = async (photographerId) => {
    const photographer = await Photographer.findById(photographerId);
    return photographer;
};
export const replace = async (photographerId, data) => {
    const photographer = await Photographer.findOneAndReplace({_id: photographerId}, data, {returnDocument: "after", runValidators: true},);

    return photographer;
};
export const update = async (photographerId, data) => {
    const photographer = await Photographer.findByIdAndUpdate(photographerId, data, {new: true, runValidators: true});

    return photographer;
};
export const deleteOne = async (photographerId) => {
    const photographer = await Photographer.findByIdAndDelete(photographerId)

    return photographer;
};

export default Photographer
