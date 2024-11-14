import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../assets/images/logo.png'; // 로고 이미지 경로

function LoginPage({ setIsAuthenticated }) {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 2초 후에 로그인 폼을 표시하도록 상태를 변경
        const timer = setTimeout(() => {
            setShowLoginForm(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        // 간단한 로그인 로직 (학번과 비밀번호 입력 확인)
        if (studentId && password) {
            setIsAuthenticated(true); // 로그인 상태 설정
            navigate('/'); // 메인 페이지로 이동
        } else {
            alert('학번과 비밀번호를 입력하세요.');
        }
    };

    return (
        <div className="login-page">
            <div className={`logo-container ${showLoginForm ? 'move-up' : ''}`}>
                <img src={logo} alt="KW CLUB Logo" className="logo" />
                <h2>KW CLUB Community</h2>
            </div>
            {showLoginForm && (
                <div className="login-form">
                    <input 
                        type="text" 
                        placeholder="학번" 
                        value={studentId} 
                        onChange={(e) => setStudentId(e.target.value)} 
                        className="input-field"
                    />
                    <input 
                        type="password" 
                        placeholder="PASSWORD" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input-field"
                    />
                    <button onClick={handleLogin} className="login-button">Login</button>
                    <div className="links">
                        <a href="/signup">회원가입</a>
                        <a href="/find-account">아이디/비번 찾기</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;