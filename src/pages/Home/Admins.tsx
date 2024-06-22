/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import TitleCard from "../../components/ui/TitleCard";
import { openModal } from "../../features/modal/Modal";
import type { AppDispatch } from "../../store/Store";

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
    const response = await fetch("http://localhost:3000/get-admins", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: 1, perPage: 20 }),
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
  const dispatch = useDispatch<AppDispatch>();
  const getUsers = useQuery(["users"], reqGetUsers, {
    staleTime: Infinity,
  });

  if (getUsers.isLoading) {
    return <p>Loading...</p>;
  }

  if (getUsers.error) {
    return <p>Oops something went wrong!</p>;
  }

  return (
    <TitleCard
      title="Current Admins"
      topMargin="mt-2"
      TopSideButtons={
        <TopSideButtons
          onClick={() => {
            dispatch(openModal());
          }}
        />
      }
    >
      <div className="overflow-x-auto w-full">
        {getUsers.data?.data.length ? (
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
              {getUsers.data.data.map((user: any) => {
                const { email, created_at } = user;
                const { name, lastName, assignedTo, status } =
                  user.user_metadata;

                return (
                  <tr key={user.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://avatar.iran.liara.run/public"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{name}</div>
                          <div className="text-sm opacity-50">{lastName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{email}</td>
                    <td>{created_at.split("T")[0]}</td>
                    <td>
                      <span className="badge badge-ghost p-4 -ml-4">
                        {status}
                      </span>
                    </td>
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
        ) : (
          <h2 className="w-full text-center text-2xl">Oops no admin here...</h2>
        )}
      </div>
    </TitleCard>
  );
};

export default Admins;
