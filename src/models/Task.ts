import { Document, Schema, model } from 'mongoose';

interface TaskInterface extends Document {
	title: string;
	description: string;
	status: 'pending' | 'in-progress' | 'completed';
	assignedTo: Schema.Types.ObjectId; // Reference to the User model
	project: Schema.Types.ObjectId; // Reference to the Project model
	dueDate: Date;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * @name TaskSchema
 * @description Mongoose schema for the Task model.
 */
const taskSchema = new Schema<TaskInterface>(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		status: {
			type: String,
			enum: ['pending', 'in-progress', 'completed'],
			default: 'pending',
		},
		assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
		project: { type: Schema.Types.ObjectId, ref: 'Project' },
		dueDate: { type: Date, required: true },
	},
	{
		timestamps: true,
	}
);

/**
 * Add your custom schema methods here (remove if not needed)
 */

/**
 * @name toJSON
 * @description Customizes the JSON representation of the Task model documents.
 */
taskSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// Delete any other properties here
	},
});

// Exporting the Task model
export const Task = model<TaskInterface>('Task', taskSchema);
