import React from 'react';

const Home = React.lazy(() => import('@pages/HomePage/Home'));
const CoursesPage = React.lazy(() => import('@pages/CoursesPage/CoursesPage'));
const AddCourses = React.lazy(() => import('@pages/AddCoursesPage/AddCourses'));

// const PageNotFound = React.lazy(() => import('./PageNotFound'));

import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/addcourses" element={<AddCourses />} />

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
};

export default AppRouter;
