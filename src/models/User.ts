import bcrypt from 'bcrypt';
import { Document, Schema, model } from 'mongoose';

// Define the user interface
interface UserInterface extends Document {
	firstName: string;
	lastName: string;
	avatar?: string;
	emailAddress: string;
	password: string;
	emailVerificationToken: string;
	emailVerificationTokenExpires: Date;
	resetPasswordToken: string;
	resetPasswordTokenExpires: Date;
	isActive: boolean;
	isVerified: boolean;
	role: 'admin' | 'manager' | 'employee';
	tasks?: Schema.Types.ObjectId; // Reference to the Tasks model
	tasksCompleted: number;
	tasksRemaining: number;
	team?: Schema.Types.ObjectId; // Reference to the Team model
	organization: Schema.Types.ObjectId; // Reference to the Organization model
	notifications?: Schema.Types.Mixed;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * @name UserSchema
 * @description Mongoose schema for the User model.
 */
const userSchema = new Schema<UserInterface>(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		avatar: {
			type: String,
			validate: {
				validator: (v: string) =>
					/^(https?:\/\/.*\.(?:png|jpg|jpeg|))$/.test(v),
				message: 'Profile picture must be a valid image URL (png, jpg, jpeg).',
			},
		},
		emailAddress: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			validate: {
				validator: (v) => /.+@.+\..+/.test(v),
				message: (props) => `${props.value} is not a valid email address.`,
			},
			required: true,
		},
		password: {
			type: String,
			trim: true,
			minlength: 8,
			validate: {
				validator: (v) =>
					/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(
						v
					),
				message: (_props) =>
					'Password must be at least 8 characters long, contain at least one uppercase letter, at least one number, and at least one special character (#?!@$%^&*-_)',
			},
			required: true,
		},
		emailVerificationToken: { type: String, default: null },
		emailVerificationTokenExpires: { type: Date, default: null },
		resetPasswordToken: { type: String, default: null },
		resetPasswordTokenExpires: { type: Date, default: null },
		isActive: { type: Boolean, default: true },
		isVerified: { type: Boolean, default: false },
		role: {
			type: String,
			enum: ['admin', 'manager', 'employee'],
			default: 'employee',
		},
		tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
		tasksCompleted: { type: Number, default: 0 },
		tasksRemaining: { type: Number, default: 0 },
		team: { type: Schema.Types.ObjectId, ref: 'Team' },
		organization: {
			type: Schema.Types.ObjectId,
			ref: 'Organization',
			default: null,
		},
		notifications: [{ type: Schema.Types.Mixed, default: [] }],
	},
	{
		timestamps: true,
	}
);

/**
 * Pre-save hook for user schema to hash passwords.
 */
userSchema.pre('save', async function (_next) {
	if (this.isModified('password')) {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
	}
});

/**
 * User schema method to compare passwords for verification.
 */
userSchema.methods.comparePassword = async function (
	candidatePassword: string
) {
	return bcrypt.compare(candidatePassword, this.password);
};

/**
 * @name toJSON
 * @description Customizes the JSON representation of the User model documents.
 */
userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.password;
		delete returnedObject.isVerified;
		delete returnedObject.isActive;
		delete returnedObject.emailVerificationToken;
		delete returnedObject.emailVerificationTokenExpires;
		delete returnedObject.resetPasswordToken;
		delete returnedObject.resetPasswordTokenExpires;
		// Delete any other properties here
	},
});

// Exporting the User model
export const User = model<UserInterface>('User', userSchema);
