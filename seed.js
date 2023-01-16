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
    return await Photo.deleteMany();
}
const createPhoto = async () => {
    const photo = new Photo({
        price: faker.commerce.price(),
        date: faker.date.past(),
        url: faker.image.imageUrl(1234, 2345, undefined, true),
        theme: faker.word.noun(),
    });
    await photo.save();
}

const createPhotos = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log(`creating:`, i + 1);
        await createPhoto();
    }
};
console.log(argv)
try {
    if (!argv.includes("doNotDelete")) {
        await deleteAll();
    }
    const count = argv[2] === "doNotDelete" ? undefined : argv[2];
    await createPhotos(count);
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}