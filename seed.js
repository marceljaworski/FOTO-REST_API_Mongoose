/**Erstelle ein Seed-Skript für deine Galerie-App. Berücksichtige dabei folgende Bedingungen:
x - Das Seed-Skript soll Fotos mit Daten aus dem Modul faker erzeugen
x - Das Skript soll über "npm run seed" aufrufbar sein
x - Standardmäßig sollen 20 Einträge erzeugt werden
x - Über einen Parameter (process.argv) soll eine andere Anzahl erzeugt werden können
x - Die Collection soll vor dem Befüllen geleert werden
x - Über einen weiteren Parameter soll das Leeren verhindert werden können */
import { faker } from '@faker-js/faker';
import Photo from "./models/Photo.js";
import "./lib/mongoose.js";
import { argv } from 'process';

const deleteAll = async () => {
    console.log("deleting all photos")
    return await Photo.deleteMany();
}

const createPhoto = async () => {
    const photo = new Photo({
        price: faker.commerce.price(),
        date: faker.date.past(),
        url: faker.image.imageUrl(1234, 2345, undefined, true),
        theme: faker.word.noun(),
        equipments: [ {
            cameraModel: faker.vehicle.model(), 
            focalLength: faker.finance.amount(8, 1200, 0),
            aperture: faker.finance.amount(1.4, 32, 1),
            iso: faker.finance.amount(100, 6400, 0),
            whiteBalance: faker.finance.amount(2500, 10000, 0),
        }]
    });
    await photo.save();
}

const createPhotos = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log(`creating photo:`, i + 1);
        await createPhoto();
    }
};
console.log(argv)
try {
    if (!argv.includes("doNotDelete")) {
        console.log("deleting all photos...");
        await deleteAll();
        console.log("done.");
    }
    const count = argv[2] === "doNotDelete" ? undefined : argv[2];
    await createPhotos(count);
    console.log("done.");
    console.log("seeding finished. happy coding!");
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}