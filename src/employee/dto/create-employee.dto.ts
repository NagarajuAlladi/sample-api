import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    type: String,
    description: 'Employee Name',
    default: '',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Employee Designation',
    default: '',
  })
  designation: string;

  @ApiProperty({
    type: String,
    description: 'Joining Date',
    default: '',
  })
  joiningDate: Date;
}
