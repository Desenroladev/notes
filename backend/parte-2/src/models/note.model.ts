
interface NoteModel {
    id?: string;
    title?: string;
    description: string;
    image?: string;
    created_at: Date;
    updated_at?: Date;
}

export default NoteModel;