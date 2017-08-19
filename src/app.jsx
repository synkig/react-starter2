import React from 'react';
import {connect} from 'dva';
import { Link } from 'dva/router';
import {
  DatePicker,
  LocaleProvider,
  Layout,
  Menu,
  Breadcrumb,
  Icon
} from 'antd';
import {addLocaleData, IntlProvider, FormattedMessage} from 'react-intl';
import enUS from 'antd/lib/locale-provider/en_US';
// import en from 'react-intl/locale-data/en'; import zh from
// 'react-intl/locale-data/zh';
import './app.css';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const zhMessages = require('./locales/zh.json');
const enMessages = require('./locales/en.json');
addLocaleData([
  {
    locale: 'zh'
  }, {
    locale: 'en'
  }
]);

const App = ({app, children}) => {
  const antdLocale = app.locale === 'zh'
    ? 'cn'
    : enUS;
  const messages = app.locale === 'zh'
    ? zhMessages
    : enMessages;
  return (
    <LocaleProvider locale={antdLocale}>
      <IntlProvider locale={app.locale} messages={messages}>
        <Layout>
          <Header className="header" style={{
            background: '#fff'
          }}>
            <div className="logo">iManager U2000-M</div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{
              lineHeight: '64px'
            }}>
              <SubMenu key="mml" title="MML">
                <Menu.Item key="">
                  <Link to="/example">MML Command</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            {app.hideAside === false && <Sider width={200} style={{
              background: '#fff'
            }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                height: '100%',
                borderRight: 0
              }}>
                <SubMenu key="sub1" title={<span> <Icon type="user"/>subnav 1 </span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span> <Icon type="laptop"/>subnav 2 </span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={<span> <Icon type="notification"/>subnav 3 </span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>}
            <Layout style={{
              padding: '0 24px 24px'
            }}>
              <Breadcrumb style={{
                margin: '12px 0'
              }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
                <FormattedMessage id="hello"/>
                <DatePicker/>
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </IntlProvider>
    </LocaleProvider>
  );
}

export default connect(({app}) => ({app}))(App);
