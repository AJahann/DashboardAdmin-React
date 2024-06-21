import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useQuery } from "react-query";

import TitleCard from "../../components/ui/TitleCard";
// import supabase from "../../utils/supapase";

const admins = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ],
};

const TopSideButtons = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="inline-block float-right">
      <button
        onClick={onClick}
        className="btn px-6 btn-sm normal-case btn-primary"
      >
        Add New
      </button>
    </div>
  );
};

const reqGetUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/get-allUsers", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: 1, perPage: 10 }),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const Admins = () => {
  const getUsers = useQuery(["users"], reqGetUsers, {
    staleTime: Infinity,
  });

  const addNewAdmin = async () => {
    try {
      const response = await fetch("http://localhost:3000/create-user", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "alii@gmail.com",
          password: "aliiiiii",
          name: "babak",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User created successfully:", data);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  if (getUsers.isLoading) {
    return <p>Loading...</p>;
  }

  if (getUsers.isError) {
    return <p>Oops something went wrong!</p>;
  }

  return (
    <TitleCard
      title="Current Admins"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons onClick={addNewAdmin} />}
    >
      {/* Admins List in table format loaded from slice after api call */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Joined At</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {getUsers.data?.data.users.map((user: unknown) => {
              const { email, created_at } = user;
              const { name, last_name, assignedTo, status, url } =
                user.user_metadata;

              return (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={"https://reqres.in/img/faces/7-image.jpg"}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{"last naame"}</div>
                      </div>
                    </div>
                  </td>
                  <td>{email}</td>
                  <td>{created_at.split("T")[0]}</td>
                  <td>{status}</td>
                  <td>{assignedTo}</td>
                  <td>
                    <button className="btn btn-square btn-ghost">
                      <TrashIcon className="w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
};

export default Admins;
