import React from 'react';
import {
    RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Space, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';


const Notification: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement: NotificationPlacement, description: string) => {
        api.info({
            message: `Notification ${placement}`,
            description: description,
        });
    };

    return (
        <>
            {contextHolder}
            <Space>
                <Button
                    type="primary"
                    onClick={() => openNotification('topRight', 'description')}
                    icon={<RadiusUprightOutlined />}
                >
                    topRight
                </Button>
            </Space>
        </>
    );
};

export default Notification;