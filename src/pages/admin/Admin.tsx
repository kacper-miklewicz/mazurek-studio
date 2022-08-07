import { useState } from "react";

import { useAppSelector } from "../../state/hooks";
import { authSelector } from "../../state/selectors/auth";

import AdminPanel from "./AdminPanel";
import Login from "./Login";

const Admin: React.FC = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(true);
  const user = useAppSelector(authSelector);

  return (
    <div>
      {user && showAdminPanel && (
        <AdminPanel setShowAdminPanel={setShowAdminPanel} />
      )}
      {user && !showAdminPanel && (
        <button
          className="absolute top-60 left-1/2 -translate-x-1/2 bg-black text-white px-10 py-5 rounded"
          onClick={() => setShowAdminPanel(true)}
        >
          Chcę dodać kolejny projekt
        </button>
      )}
      {!user && <Login />}
    </div>
  );
};

export default Admin;
