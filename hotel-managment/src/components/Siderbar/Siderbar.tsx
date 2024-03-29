import React, { useContext } from 'react';
import { Layout, Menu, Modal, theme } from 'antd';

import { listSidebarAdmin } from '../../routes/adminRoute';
import { listSidebarStaff } from '../../routes/manageRoute';
import { MenuItem } from '../../types/MenuItem';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, ExclamationCircleFilled } from '@ant-design/icons';

import { AuthContextProvider } from '../../contexts/AuthContext';

const { Content, Sider } = Layout;
const { confirm } = Modal;

const list = true ? listSidebarStaff : listSidebarAdmin

const items: any = list.map((item: MenuItem) => {
  return {
    key: item.key,
    // icon:
    label: item.titleSidebar,
    children: item.children &&
      item.children.map((childrenItem: MenuItem) => {
        return {
          key: childrenItem.key,
          label: childrenItem.titleSidebar,
        }
      })
  }
})

const Siderbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const auth = useContext(AuthContextProvider);

  const findItem = ({ key }: { key: string }) => {
    const itemActive: MenuItem[] = []
    for (const item of list) {
      if (item.key === key) {
        itemActive.push(item)
      }
      if (item.children) {
        const itemChildren = item.children.find(
          (childrenItem: MenuItem) => childrenItem.key === key
        );
        if (itemChildren) {
          itemActive.push(itemChildren);
        }
      }
    }

    const showLogoutModal = () => {
      confirm({
        title: "Bạn có chắc muốn thoát đăng nhập  ",
        icon: <ExclamationCircleFilled />,
        okText: "Đăng xuất =((",
        closeIcon: <CloseOutlined />,
        cancelText: "Ở lại",
        onOk() {
          navigate("/login")
          auth?.logout()
        },
        onCancel() {},
      });
    };

    if (itemActive[0].url === "logout") {
      showLogoutModal()
    } else {
      navigate(`${itemActive[0].url}`);
    }
  }

  return (
    <div className="siderbar">
      <Layout>
        <Content >
          <Layout style={{ padding: '24px 0', background: colorBgContainer, height: '90vh' }}>
            <Sider style={{ background: colorBgContainer }} width={250}>
              <Menu
                // theme="dark"
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['user-management']}
                style={{ height: '100%' }}
                onClick={findItem}
                items={items}
              />
            </Sider>
          </Layout>
        </Content>
      </Layout>
    </div>
  )
}

export default Siderbar