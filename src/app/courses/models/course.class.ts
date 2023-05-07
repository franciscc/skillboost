export default class Course {
    constructor(
        public id : string,
        public name : string,
        public description : string, // 285 chars max
        public durationInHours : number,
        public vacancies : number,
        public price : number,
    ) {}
}