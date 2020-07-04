import { apiServices } from '../components/_services/api.services';
import router from "../route";
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            },
            emailRules: [
                v => !!v || "E-mail requis",
                v => /.+@.+\..+/.test(v) || "Ce champ doit être un email"
            ],
            pwdRules: [v => !!v || "Mot de passe requis"],
            valid: true,
            loading: false,
            returnUrl: "",
        };
    },
    methods: {
        connexion() {
            apiServices.post('api/register', {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                    id_role: 3
                })
                .then(response => {
                    if (response.status === 201) {}
                })

            router.push("/");
        }
    }
};