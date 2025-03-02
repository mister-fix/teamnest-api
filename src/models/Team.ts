import { Document, Schema, model } from 'mongoose';

// Define the team interface
interface TeamInterface extends Document {
	name: string;
	members: Schema.Types.ObjectId[];
	projects: Schema.Types.ObjectId[];
	createdAt: Date;
	updatedAt: Date;
}

/**
 * @name TeamSchema
 * @description Mongoose schema for the Team model.
 */
const teamSchema = new Schema<TeamInterface>(
	{
		name: { type: String, required: true },
		members: [{ type: [Schema.Types.ObjectId], ref: 'User' }],
		projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
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
 * @description Customizes the JSON representation of the Team model documents.
 */
teamSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// Delete any other properties here
	},
});

// Exporting the Team model
export const User = model<TeamInterface>('Team', teamSchema);
