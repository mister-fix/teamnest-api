import { Document, Schema, model } from 'mongoose';

// Define the organization interface
interface OrganizationInterface extends Document {
	name: string;
	domain?: string; // Optional custom domain (e.g., company.com)
	owner: Schema.Types.ObjectId;
	members: Schema.Types.ObjectId[];
	createdAt: Date;
	updatedAt: Date;
}

// Domain validator regex
const regex =
	// eslint-disable-next-line security/detect-unsafe-regex
	/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,60}[a-zA-Z0-9])?\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

/**
 * @name OrganizationSchema
 * @description Mongoose schema for the Organization model.
 */
const organizationSchema = new Schema<OrganizationInterface>(
	{
		name: { type: String, required: true },
		domain: {
			type: String,
			trim: true,
			lowercase: true,
			validate: {
				validator: (v: string) => regex.test(v),
				message: (props) => `${props.value} is not a valid domain.`,
			},
		},
		owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		members: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
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
 * @description Customizes the JSON representation of the Organization model documents.
 */
organizationSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// Delete any other properties here
	},
});

// Exporting the Organization model
export const Organization = model<OrganizationInterface>(
	'Organization',
	organizationSchema
);
