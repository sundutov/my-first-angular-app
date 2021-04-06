import PersonCreateModel from './person.create.model';

export default interface PersonUpdateModel extends PersonCreateModel {
    id: number;
}
