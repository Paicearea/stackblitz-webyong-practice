import React from 'react';
import './App.css';

// 팀원 정보 배열
const teamMembers = [
  {
    name: '김소은',
    num: '학번: 202204025',
    dept: '전공: ICT융합공학부',
    email: '이메일: soeun2388@naver.com',
    imgSrc:'/Img/Kim.png', 
    link: 'https://github.com/SoEunKim03',
  },
  {
    name: '박예원',
    num: '학번: 202203085',
    dept: '전공: ICT융합공학부',
    email: '이메일: parkyw0424@naver.com',
    imgSrc: '/Img/Park.png', 
    link: 'https://github.com/pyw424',
  },
  {
    name: '배채은',
    num: '학번: 202101123',
    dept: '전공: ICT공학부',
    email: '이메일: 01lily0302@naver.com',
    imgSrc: '/Img/Bae.png', 
    link: 'https://github.com/Paicearea',
  },
];

// 오른쪽 Header
const rightMenuList = ['팀명소개', '블로그', '팀문화'];

// 팀원 정보 표시 컴포넌트
function TeamMember({ member }) {
  return (
    <td>
      <table className="teamBox">
        <tr>
          <td className="name" style={{ height: '100px' }}>
            <span>{member.name}</span>
          </td>
        </tr>
        <tr>
          <td className="num" style={{ height: '30px' }}>
            <span>{member.num}</span>
          </td>
        </tr>
        <tr>
          <td className="dept" style={{ height: '30px' }}>
            <span>{member.dept}</span>
          </td>
        </tr>
        <tr>
          <td className="email" style={{ height: '30px' }}>
            <span>{member.email}</span>
          </td>
        </tr>
        <tr>
          <td style={{ height: '0' }}>
            <a style={{ height: '100%' }} href={member.link}>
              <img alt={member.name} className="Image" src={member.imgSrc} />
            </a>
          </td>
        </tr>
      </table>
    </td>
  );
}

// 컴포넌트 렌더링
function App() {
  return (
    <div className="Main">
      <div className="topMenu">
        <h1 id="teamName">끝까지 간다</h1>
        <div className="rightMenu">{rightMenuList}</div>
      </div>
      <table className="teamInt">
        <tbody>
          <tr>
            <td className="teamIntText" colSpan="3">
              우리 팀을 소개해요
            </td>
          </tr>
          <tr>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
