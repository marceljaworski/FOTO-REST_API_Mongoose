export const postSchema = {
    type: "object",
    required: ["title"],
    additionalProperties: true,
    properties: {
        title: {
            type: "string",
        },
    },

};
export const getSchema = {
    type: "object",
    additionalProperties: true,
};
export const getAllSchema = {
    type: "object",
    additionalProperties: true,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: true,
};
