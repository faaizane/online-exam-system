import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SLogin from './pages/SLogin';
import SDashboard from './pages/SDashboard';
import TakeExam from './pages/TakeExam';
import TestPage from './pages/TestPage';
import ViewResult from './pages/ViewResult';
import ViewResultDetails from './pages/ViewResultDetails';
import StudentProfile from './pages/StudentProfile';
import GiveExam from './pages/GiveExam';
import TLogin from './pages/TLogin';
import TDashboard from './pages/TDashboard';
import StudentManagement from './pages/StudentManagement';
import AddStudent from './pages/AddStudent';
import ManageExams from './pages/ManageExams';
import CreateExam from './pages/CreateExam';
import ReviewCheating from './pages/ReviewCheating';
import ViewResults from './pages/ViewResults';
import ExamSchedule from './pages/ExamSchedule';
import TeacherProfile from './pages/TeacherProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/slogin" replace />} />
        <Route path="/slogin" element={<SLogin />} />
        <Route path="/sdashboard" element={<SDashboard />} />
        <Route path="/take-exam" element={<TakeExam />} />
        <Route path="/take-exam/test-page" element={<TestPage />} />
        <Route path="/view-result" element={<ViewResult />} />
        <Route path="/view-result-detail" element={<ViewResultDetails />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/give-exam" element={<GiveExam />} />
        <Route path="/tlogin" element={<TLogin />} />
        <Route path="/tdashboard" element={<TDashboard />} />
        <Route path="/studentmanagement" element={<StudentManagement />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/manageexams" element={<ManageExams />} />
        <Route path="/createexam" element={<CreateExam />} />
        <Route path="/reviewcheating" element={<ReviewCheating />} />
        <Route path="/viewresults" element={<ViewResults />} />
        <Route path="/examschedule" element={<ExamSchedule />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
      </Routes>
    </Router>
  );
}

export default App
