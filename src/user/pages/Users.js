import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sky Chow",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=cKxKBEjZ&id=E012DD9A08B715075F4AC0E8EEE81B68F6B0D155&thid=OIP.cKxKBEjZxQEMAVytF565ZAHaFj&mediaurl=https%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F5c929288cf05a7ae11341b4823a319b17ab27b92.jpg&exph=996&expw=1328&q=%E8%BF%AA%E8%BF%A6%E5%A5%A5%E7%89%B9%E6%9B%BC&simid=607995820449688851&FORM=IRPRST&ck=AA8F7CB8887973EC71F8B77E470146DF&selectedIndex=5&itb=0&cw=862&ch=819&ajaxhist=0&ajaxserp=0",
      places: 3,
    },
  ];

  return <UsersList item={USERS} />;
};

export default Users;
