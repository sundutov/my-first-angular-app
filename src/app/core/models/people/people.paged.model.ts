import Person from './person';

export default interface PersonPagedModel {
    offset: number;
    limit: number;
    total: number;
    people: Array<Person>;
}
