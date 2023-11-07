import { ICourse } from "@/types/ICourse";

export class MyCoursesApi {
    static fetchAll = async (id: number): Promise<ICourse[]> => {
        const response = await fetch(`{domain}/api/course_by/${id}`, { method: "GET"})
        return await response.json();
    } 
}