import { ICoursesFormDto } from '../interfaces/icourses-form-dto';

export class CourseFormDto implements ICoursesFormDto {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  id: number;
  gender: number;
  isApproveDataProcessing: boolean;

  constructor(data: ICoursesFormDto = null) {
    this.firstName = data ? data.firstName : '';
    this.lastName = data ? data.lastName : '';
    this.city = data ? data.city : '';
    this.email = data ? data.email: '';
    this.id = data ? data.id : null;
    this.gender = data ? data.gender : null;
    this.isApproveDataProcessing = data ? data.isApproveDataProcessing : false;
  }

}
