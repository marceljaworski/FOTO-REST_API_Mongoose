/*Bei der Verwendung von ajv validieren wir die Daten in dem Moment, in dem sie empfangen werden*/ 
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });//wir deklarieren eine neue Instanz

const validate = (schema) => {
    /*Ajv kompiliert Schemas zu Funktionen und fängt sie in allen Fällen ab (unter Verwendung des Schemas selbst als Schlüssel in einer Map), sodass das nächste Mal, wenn dasselbe Schemaobjekt verwendet wird, es nicht erneut kompiliert wird*/ 
    const test = ajv.compile(schema);
    /**Schließlich verwenden wir eine Middleware, um die erhaltenen Informationen zu validieren */
    return (req, res, next) => {

        const valid = test(req.body);
        if (!valid) return res.status(400).json(test.errors);

        next();
    };
}

export default validate;
