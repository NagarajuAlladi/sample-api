import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as moment from 'moment';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interface/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_MODEL') private employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      if (createEmployeeDto.joiningDate) {
        console.log(createEmployeeDto.joiningDate);
        createEmployeeDto.joiningDate = moment
          .utc(createEmployeeDto.joiningDate, 'DD-MM-YYYY')
          .toDate();
        // createEmployeeDto.joiningDate = new Date('DD-MM-YYYY');
      }
      const createdEmployee = new this.employeeModel(createEmployeeDto);
      await createdEmployee.save();
      return createdEmployee;
    } catch (error) {
      throw new ForbiddenException({
        message: error.message,
      });
    }
  }

  async findAll(): Promise<Employee[]> {
    try {
      const totalNumber = await this.employeeModel.find().count();
      console.log(totalNumber);

      return this.employeeModel.find().sort({ joiningDate: -1 });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // async totalCount() {
  //   return this.employeeModel.find().count();
  // }
}
