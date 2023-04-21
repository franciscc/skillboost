export default class Course {
    constructor(
        public id : string,
        public name : string,
        public description : string,
        public durationInHours : number,
        public vacancies : number,
        public price : number
    ) {}
}