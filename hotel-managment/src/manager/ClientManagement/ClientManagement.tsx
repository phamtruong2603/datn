import { useEffect } from "react";
import { getAllUser } from "../../apis/auth";

const ClientManagement = () => {

    useEffect(() => {
        (async() => {
            const res = await getAllUser();
            console.log(res)
        })()
    }, [])

  return (
    <div>ClientManagement</div>
  )
}

export default ClientManagement