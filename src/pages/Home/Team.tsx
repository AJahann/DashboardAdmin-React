import { useState } from "react";

import TitleCard from "../../components/ui/TitleCard";

const TopSideButtons = () => {
  return (
    <div className="inline-block float-right">
      <button className="btn px-6 btn-sm normal-case btn-primary">
        Invite New
      </button>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: "Alex",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "alex@dashwind.com",
    role: "Owner",
    joinedOn: "6 may",
    lastActive: "5 hr ago",
  },
  {
    name: "Ereena",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    email: "ereena@dashwind.com",
    role: "Admin",
    joinedOn: "6 may",
    lastActive: "15 min ago",
  },
  {
    name: "John",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "jhon@dashwind.com",
    role: "Admin",
    joinedOn: "6 may",
    lastActive: "20 hr ago",
  },
  {
    name: "Matrix",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    email: "matrix@dashwind.com",
    role: "Manager",
    joinedOn: "6 may",
    lastActive: "1 hr ago",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    email: "virat@dashwind.com",
    role: "Support",
    joinedOn: "6 may",
    lastActive: "40 min ago",
  },
  {
    name: "Miya",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    email: "miya@dashwind.com",
    role: "Support",
    joinedOn: "6 may",
    lastActive: "5 hr ago",
  },
];

interface Member {
  name: string;
  avatar: string;
  email: string;
  role: string;
  joinedOn: string;
  lastActive: string;
}

const Team = () => {
  const [members] = useState(TEAM_MEMBERS as Member[]);

  const getRoleComponent = (role: string) => {
    if (role === "Admin")
      return <div className="badge badge-secondary">{role}</div>;
    if (role === "Manager") return <div className="badge">{role}</div>;
    if (role === "Owner")
      return <div className="badge badge-primary">{role}</div>;
    if (role === "Support")
      return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <TitleCard
      title="Active Members"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons />}
    >
      {/* Team Member list in table format loaded constant */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Joined On</th>
              <th>Role</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {members.map((l) => {
              return (
                <tr key={l.email}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img src={l.avatar} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{l.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{l.email}</td>
                  <td>{l.joinedOn}</td>
                  <td>{getRoleComponent(l.role)}</td>
                  <td>{l.lastActive}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
};

export default Team;
