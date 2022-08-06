import { useState } from "react";
import AdminPanel from "./AdminPanel";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(true);

  return (
    <div>
      {showAdminPanel && <AdminPanel setShowAdminPanel={setShowAdminPanel} />}
      {!showAdminPanel && (
        <button
          className="absolute top-60 left-1/2 -translate-x-1/2 bg-black text-white px-10 py-5 rounded"
          onClick={() => setShowAdminPanel(true)}
        >
          Chcę dodać kolejny projekt
        </button>
      )}
    </div>
  );
};

export default Admin;
