import { useEffect, useState } from "react";
import { getAllUser } from "../../apis/auth";
import { User } from "../../types/user";
import TableClientManagement from "../../components/Table/TableClientManagement";

const ClientManagement = () => {

  const [data, setData] = useState<User[] | undefined>();

    useEffect(() => {
        (async() => {
            const res = await getAllUser();
            setData(res?.data)
        })()
    }, [])

  return (
    <div>
      <div  className="title-layout">Quản lý khách hàng</div>
      <TableClientManagement dataSource={data} />
    </div>
  )
}

export default ClientManagement