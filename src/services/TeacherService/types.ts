export interface IInviteResponse {
    data: {
        user_id: number;
        teacher_id: number;
        accept: boolean;
    }
    message: string
}