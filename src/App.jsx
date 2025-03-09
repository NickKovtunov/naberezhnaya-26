import './App.css'
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";
import About from "./pages/About.jsx";
import Location from "./pages/Location.jsx";
import Plan from "./pages/Plan.jsx";
const { Header, Content, Footer } = Layout;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/about':
        return ['0'];
      case '/location':
        return ['1'];
      case '/plan':
        return ['2'];
      default:
        return ['0'];
    }
  };

  
  const items = [
    {
      key: 0,
      label: 'О проекте',
      onClick: () => navigate('/about'),
    },
    {
      key: 1,
      label: 'Локация',
      onClick: () => navigate('/location'),
    },
    {
      key: 2,
      label: 'План-схема',
      onClick: () => navigate('/plan'),
    },
  ];

  return (
    <Layout style={{background: 'white'}}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white'
        }}
      >
        <div className="demo-logo">Набережная 26</div>
        <Menu
          mode="horizontal"
          theme='light'
          items={items}
          selectedKeys={getSelectedKey()}
          style={{
            marginLeft: 'auto',
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        className='main-part'
        style={{
          padding: '0 48px',
        }}
      >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Content>
      <div className='custom-hr'>&nbsp;</div>
      <Footer
        style={{
          textAlign: 'center',
          background: 'white'
        }}
      >
        ©2025 <a href="https://vk.com/history_photo_nur" target='_blank'>«Нур в объективе»</a>
      </Footer>
    </Layout>
  );
};
export default App;