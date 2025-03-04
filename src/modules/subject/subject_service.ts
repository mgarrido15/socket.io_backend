// src/services/subject_service.ts
import  { SubjectModel , ISubject } from '../subject/subject_models.js';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new SubjectModel(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await SubjectModel.find();
};

export const getSubjectById = async (id: string) => {
    return await SubjectModel.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await SubjectModel.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await SubjectModel.deleteOne({ _id: id });
};

export const getUsersBySubject = async (id: string) => {
    // Aquí deberías implementar la lógica para obtener usuarios por subject, esto puede variar
    // dependiendo de cómo esté estructurada tu base de datos y el modelo de tus documentos
    return await SubjectModel.findById(id).populate('alumnat').exec();
};
