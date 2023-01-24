export const postSchema = {
    type: "object",
    required: ["title"],
    additionalProperties: false,
    properties: {
        title: {
            type: "string",
        },
    },

};
export const getSchema = {
    type: "object",
    additionalProperties: false,
};
export const getAllSchema = {
    type: "object",
    additionalProperties: false,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: false,
};
