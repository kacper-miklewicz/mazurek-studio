import React, { Dispatch, SetStateAction, useState } from "react";
import AddProjectForm from "./addProjectForm/AddProjectForm";

interface AdminPanelProps {
  setShowAdminPanel: Dispatch<SetStateAction<boolean>>;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ setShowAdminPanel }) => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[1280px] py-10">
      <h2 className="text-2xl font-bold py-10 text-center">
        Dodawanie nowych projektów
      </h2>
      <AddProjectForm setShowAdminPanel={setShowAdminPanel} />
    </div>
  );
};

export default AdminPanel;
