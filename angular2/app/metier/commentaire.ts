export class Commentaires {
    constructor(
        public id : string,
        public user : string,
        public commentaire : string,
        public fk_article : string
    ){}
}