export class Article {
    constructor(
        public id : number,
        public titre : string,
        public score : number,
        public url : string,
        public commentaire : array
    ){}
}