import { Document, Schema, model } from 'mongoose';

interface NotificationInterface extends Document {
	user: Schema.Types.ObjectId; // Reference to the user receiving the notification
	message: string;
	type: 'task' | 'team' | 'system' | 'other';
	isRead: boolean;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * @name NotificationSchema
 * @description Mongoose schema for the Notification model.
 */
const notificationSchema = new Schema<NotificationInterface>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		message: { type: String, required: true },
		type: {
			type: String,
			enum: ['task', 'team', 'system', 'other'],
			default: 'other',
		},
		isRead: { type: Boolean, default: false },
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
 * @description Customizes the JSON representation of the Notification model documents.
 */
notificationSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// Delete any other properties here
	},
});

// Exporting the Notification model
export const Notification = model<NotificationInterface>(
	'Notification',
	notificationSchema
);
