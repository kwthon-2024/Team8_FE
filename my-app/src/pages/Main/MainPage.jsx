import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import './MainPage.scss'; // 스타일 파일 import

function MainPage() {
  const clubCategories = [
    { name: '스포츠 분야', path: '/sports' }, // 올바른 경로
    { name: '음악 분야', path: '/music' },
    { name: '취미 분야', path: '/hobby' },
    { name: '학회 분야', path: '/academic' },
    { name: '봉사 분야', path: '/volunteer' }
  ];

  return (
    <div className="main-container">
      <h2 className="section-title">동아리 목록</h2>
      <div className="club-list">
        {clubCategories.map((category, index) => (
          <Link to={category.path} key={index} className="club-item-link">
            <div className="club-item">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainPage;