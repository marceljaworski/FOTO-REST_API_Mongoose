/**Erstelle ein Seed-Skript für deine Galerie-App. Berücksichtige dabei folgende Bedingungen:
x - Das Seed-Skript soll Fotos mit Daten aus dem Modul faker erzeugen
x - Das Skript soll über "npm run seed" aufrufbar sein
x - Standardmäßig sollen 20 Einträge erzeugt werden
x - Über einen Parameter (process.argv) soll eine andere Anzahl erzeugt werden können
x - Die Collection soll vor dem Befüllen geleert werden
x - Über einen weiteren Parameter soll das Leeren verhindert werden können */
import { faker } from '@faker-js/faker';
import Photo from "./models/Photo.js";
import Album from "./models/Album.js";
import Photographer from "./models/Photographer.js";
import "./lib/mongoose.js";
import { argv } from 'process';

const deletePhotos = async () => {
    console.log("deleting all photos")
    return await Photo.deleteMany();
};
const deleteAlbums = async () => {
    console.log("deleting all albums")
    return await Album.deleteMany();
}

const deletePhotographers = async () => {
    console.log("deleting all photographers")
    return await Photographer.deleteMany();
};
const albums = [];
const createAlbum = async () => {
    const album = new Album({
        title: faker.word.noun(),
    });
    const result = await album.save();
    albums.push(result._id);
}
const createPhotographer = async () => {
    const photographer = new Photographer({
        name: faker.name.fullName({}),
        email: faker.internet.email(),
        address:{
            street: faker.address.street(),
            houseNumber: faker.address.buildingNumber(),
            zipCode: faker.address.zipCode(),
            city: faker.address.city(),
            country: faker.address.country()
        },
    });
    await photographer.save();
}
const createPhoto = async () => {
    const photo = new Photo({
        price: faker.commerce.price(),
        date: faker.date.past(),
        url: faker.image.imageUrl(1234, 2345, undefined, true),
        theme: faker.word.noun(),
        settings: {
            cameraModel: faker.vehicle.model(), 
            focalLength: faker.finance.amount(8, 1200, 0),
            aperture: faker.finance.amount(1.4, 32, 1),
            iso: faker.finance.amount(100, 6400, 0),
            whiteBalance: faker.finance.amount(2500, 10000, 0),
        },
        album: albums[0],
    });
    await photo.save();
}
const createPhotos = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log(`creating photo:`, i + 1);
        await createPhoto();
    }
};
const createAlbums = async (count = 20) => {
    for (let i = 0; i < count/4; i++) {
        console.log(`creating album:`, i + 1);
        await createAlbum();
    }
};
const createPhotographers = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log(`creating photographer:`, i + 1);
        await createPhotographer();
    }
};
console.log(argv)
try {
    if (!argv.includes("doNotDelete")) {
        console.log("deleting all records...");
        await deletePhotos();
        await deleteAlbums();
        await deletePhotographers()
        console.log("done.");
    }
    console.log("creating new records...");
    const count = argv[2] === "doNotDelete" ? undefined : argv[2];
    await createAlbums(count);
    await createPhotos(count);
    await createPhotographers(count);
    console.log("done.");
    console.log("seeding finished. happy coding!");
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}