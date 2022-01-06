import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  joiningDate: Date,
});
