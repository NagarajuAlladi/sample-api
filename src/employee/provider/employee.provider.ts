import { Connection } from 'mongoose';
import { EmployeeSchema } from '../schema/employee.schema';

export const employeeProvider = [
  {
    provide: 'EMPLOYEE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Employee', EmployeeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
