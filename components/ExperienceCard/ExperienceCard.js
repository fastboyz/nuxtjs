import Experience from "models/experience"

export default {
    name: 'card',
    props: {
        experience: {
            type: Experience,
            required: true
        }
    }
}