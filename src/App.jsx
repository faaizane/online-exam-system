import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TLogin from './pages/TLogin';
import TDashboard from './pages/TDashboard';
import StudentManagement from './pages/StudentManagement';
import ManageExams from './pages/ManageExams';
import CreateExam from './pages/CreateExam';
// import ReviewCheating from './pages/reviewCheating';
// import ViewResults from './pages/viewResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tlogin" replace />} />
        <Route path="/tlogin" element={<TLogin />} />
        <Route path="/tdashboard" element={<TDashboard />} />
        <Route path="/studentmanagement" element={<StudentManagement />} />
        <Route path="/manageexams" element={<ManageExams />} />
        <Route path="/createexam" element={<CreateExam />} />
        {/* <Route path="/reviewcheating" element={<ReviewCheating />} /> */}
        {/* <Route path="/viewresults" element={<ViewResults />} /> */}

      </Routes>
    </Router>
  );
}

export default App
