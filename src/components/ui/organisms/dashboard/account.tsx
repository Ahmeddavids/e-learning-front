import React, { useState } from "react";
import Modal from "../modal";
import Tabs from "../tab";
import Profile from "./profile";
import PasswordSecurity from "./security";

interface AccountProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountProfile({
  isOpen,
  onClose,
}: AccountProfileProps) {
  const tabs = [
    { label: "Profile", value: "profile" },
    { label: "Security", value: "security" },
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].value);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    console.log("Selected tab:", value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div>
        <div className=" pb-2 mb-4 text-left space-y-2 ">
          <h2 className="text-xl  font-bold">Account</h2>
          <p className="text-gray-500 text-sm">
            Here You can manage and update your account{" "}
          </p>
          <Tabs tabs={tabs} onTabChange={handleTabChange} />

          <div className="mt-4">
            {selectedTab === "profile" && <Profile />}
            {selectedTab === "security" && <PasswordSecurity />}
          </div>
        </div>
      </div>
    </Modal>
  );
}
