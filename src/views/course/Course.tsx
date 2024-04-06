import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import InfoCourse from "./components/InfoCourse/InfoCourse";
import InvateStudentToCourse from "./components/InvateStudentToCourse/InvateStudentToCourse";
import StudentsStore from "@/store/StudentsStore/StudentsStore";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
import {observer} from "mobx-react";
import {IParams} from "./types/IParams";
import FooterCourse from "@/views/course/components/FooterCourse/FooterCourse";
import {Box} from "@mantine/core";

const Course = observer(() => {
    const params = useParams<IParams>();

    useEffect(() => {
        StudentsStore.getStudentsByTeacher();
        CoursesStore.getCourseById(params.courseId);
    }, []);

    if (
        StudentsStore.isLoading &&
        CoursesStore.isLoading &&
        CoursesStore.courses[0] !== undefined
    ) {
        return (
            <>
                <InvateStudentToCourse students={StudentsStore.data}/>
                <InfoCourse course={CoursesStore.courses[0]}/>
                <Box mt={10}><FooterCourse course={CoursesStore.courses[0]}/></Box>

            </>
        );
    } else if (CoursesStore.error) {
        return <>При запросе курса произошла ошибка на сервере</>;
    } else return <>Курс не был найден</>;
});

export default Course;
