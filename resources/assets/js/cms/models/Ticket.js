import Model from '../core/models/Model';
import Validator from '../app/Validator/Validator';
import WalkThrough from '../app/WalkThrough/WalkThrough';

class Ticket extends Model {

    constructor(data = {}) {
        super(data);

        this.fields = {
            title: {
                type: 'text',
                translation: 'Locatienaam ',
                validation: new Validator({
                    required: true,
                }),
                walkThrough: new WalkThrough([
                    'De locatienaam is de naam van het gebouw waar de uitvoering plaatsvindt.',
                ])
            },

            date: {
                type: 'date',
                translation: 'Datum',
                validation: new Validator({
                    required: true,
                }),
                walkThrough: new WalkThrough([
                    'De datum waarop de uitvoering plaatsvindt.',
                ])
            },

            link: {
                type: 'website',
                translation: 'Link naar ticketverkoop',
                validation: new Validator({
                    required: true,
                }),
                walkThrough: new WalkThrough([
                    'Plaats hier de link naar de website van de ticketverkoper. Een link die direct naar het ticket leidt is gewenst.',
                ])
            },

            description: {
                type: 'textarea',
                translation:  'Korte beschrijving van de uitvoering.',
                validation: new Validator({
                    required: true,
                }),
                walkThrough: new WalkThrough([
                    'Een beschrijving bij de tickets geeft de gebruiker een betere ervaring op je website. ',
                    'Zorg ervoor dat de beschrijving beknopt blijft. Het is van belang dat de informatie ' + 
                    'in deze beschrijving nuttig is voor de lezer. Google zal de website beter indexeren, wanneer de content beknopt en nuttig is. '
                ])
            }

        };

    }


}

export default Ticket;
