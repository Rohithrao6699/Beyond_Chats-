// import { useEffect } from "react";
// import { Chatbox } from "../UI/chatbox";
// import { Dropdown } from "../UI/dropdown";
// import { useMediaQuery } from "../hooks/useMediaQuery";
// import chats from "../mockData/usersData.json";
// import { useUserStore } from "../store/allUsers";

// export function LSideBar() {
//   const isMobile = useMediaQuery("(min-width: 640px)");

//   const setUsers = useUserStore((state) => state.setUsers);
//   const setFilteredUsers = useUserStore((state) => state.setFilteredUsers);
//   const filteredUsers = useUserStore((state) => state.filteredUsers);

//   useEffect(function () {
//     setUsers(chats);
//     setFilteredUsers(chats);
//   }, []);

//   return (
//     <>
//       {isMobile && (
//         <div className="w-[40%] ml:w-70 border-r border-slate-200 px-3 pt-3 bg-[#fffffe] flex flex-col transition-all duration-400 ease-in-out">
//           <div className="flex justify-between items-center pb-3 px-1">
//             {/* in UI folder */}
//             <Dropdown options={["All Open", "2 Open", "4 Open"]} />
//             <Dropdown options={["Recently added", "Alphabetical"]} />
//           </div>
//           <div className="flex flex-col items-center space-y-1 rounded-lg cursor-pointer max-w-80 ml:max-w-70 transition-all duration-400 ease-in-out">
//             {/* in UI folder */}
//             {filteredUsers.map((user, index) => (
//               <Chatbox user={user} index={index} key={user.id} />
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useEffect } from "react";
import { Chatbox } from "../UI/chatbox";
import { Dropdown } from "../UI/dropdown";
import { useMediaQuery } from "../hooks/useMediaQuery";
import chats from "../mockData/usersData.json";
import { useUserStore } from "../store/allUsers";

export function LSideBar() {
  const isMobile = useMediaQuery("(min-width: 640px)");

  const setUsers = useUserStore((state) => state.setUsers);
  const setFilteredUsers = useUserStore((state) => state.setFilteredUsers);
  const filteredUsers = useUserStore((state) => state.filteredUsers);

  useEffect(function () {
    setUsers(chats);
    setFilteredUsers(chats);
  }, []);

  return (
    <>
      {isMobile && (
        <div className="w-[40%] ml:w-70 border-r border-slate-200 dark:border-slate-700 px-3 pt-3 bg-[#fffffe] dark:bg-slate-900 flex flex-col transition-all duration-400 ease-in-out">
          <div className="flex justify-between items-center pb-3 px-1">
            {/* in UI folder */}
            <Dropdown options={["All Open", "2 Open", "4 Open"]} />
            <Dropdown options={["Recently added", "Alphabetical"]} />
          </div>
          <div className="flex flex-col items-center space-y-1 rounded-lg cursor-pointer max-w-80 ml:max-w-70 transition-all duration-400 ease-in-out">
            {/* in UI folder */}
            {filteredUsers.map((user, index) => (
              <Chatbox user={user} index={index} key={user.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
