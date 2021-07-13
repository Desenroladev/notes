
interface TodoModel {
    id?: string;
    title: string;
    created_at: Date;
    concluded?: boolean;
    concluded_at?: Date;
}

export default TodoModel;