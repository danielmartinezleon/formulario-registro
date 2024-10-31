export class UsuarioDTO {
    constructor(
        public name: string,
        public lastName: string,
        public NIF: string,
        public email: string,
        public phone: string,
        public sex: string,
        public knowledge: string,
        private password: string,
        public passwordConfirm: string
    ){}
}