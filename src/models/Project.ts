import { Document, Schema, model } from 'mongoose';

interface ProjectInterface extends Document {
	name: string;
	description: string;
	team: Schema.Types.ObjectId; // Reference to the Team model
	tasks: Schema.Types.ObjectId[]; // Reference to the Task model
	startDate: Date;
	endDate: Date;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * @name ProjectSchema
 * @description Mongoose schema for the Project model.
 */
const projectSchema = new Schema<ProjectInterface>(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
		tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
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
 * @description Customizes the JSON representation of the Project model documents.
 */
projectSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// Delete any other properties here
	},
});

// Exporting the Project model
export const Project = model<ProjectInterface>('Project', projectSchema);
