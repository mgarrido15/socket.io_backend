import { ObjectId, Schema, model } from 'mongoose';

// Definición de la interfaz ISubject
export interface ISubject {
  _id: ObjectId;
  name: string;
  teacher: String;
  alumnat: ObjectId[];
}

// Creación del esquema de la asignatura
const subjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  alumnat: [
    { 
        type: Schema.Types.ObjectId, ref: 'User' 
    }
   ]
});

// Exportación del modelo Subject
export const SubjectModel = model<ISubject>('Subject', subjectSchema);
