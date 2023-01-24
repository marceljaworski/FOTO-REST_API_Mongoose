export const postSchema = {
    type: "object",
    required: ["url"],
    additionalProperties: false,
    properties: {
        price: { type: "number" },
        date: { type: "string", format: "date" },
        url: { type: "string" },
        theme: { type: "string" },
        settings: {
            type: "object",
            additionalProperties: false,
            properties: {
                cameraModel: { type: "string" },
                focalLength: { type: "string" },
                exposure: { type: "string" },
                aperture: { type: "number" },
                iso: { type: "number" },
                whiteBalance: { type: "number" },
            },
        },
        album: {
            type: "string",
            minLength: 24,
            maxLength: 24,
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
