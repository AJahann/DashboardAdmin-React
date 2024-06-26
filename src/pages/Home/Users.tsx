/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import TitleCard from "../../components/ui/TitleCard";
import { openModal } from "../../features/modal/Modal";
import { adminsApi } from "../../services/axions/api";
import type { AppDispatch } from "../../store/Store";
import { months } from "../../utils/months";

interface TopSideButtons {
  openModalBtn: () => void;
  reFetch: () => void;
}

const TopSideButtons = ({ openModalBtn, reFetch }: TopSideButtons) => {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-ghost btn-sm normal-case" onClick={reFetch}>
        <ArrowPathIcon className="w-4 mr-2" />
        Refresh Data
      </button>
      <button
        onClick={openModalBtn}
        className="btn px-6 btn-sm normal-case btn-primary"
      >
        Add New
      </button>
    </div>
  );
};

const reqGetUsers = async () => {
  try {
    const response = await adminsApi.post("/get-users", {
      page: 1,
      perPage: 20,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error as Error;
  }
};

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error, refetch } = useQuery(
    "users",
    reqGetUsers,
    {},
  );

  const removeUser = async (id: string) => {
    try {
      const res = await adminsApi.post(`/remove-user`, { id });

      if (res.status === 200) {
        await refetch();
      }
    } catch (err) {
      console.error("Error removing admin:", err);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops something went wrong!</p>;
  }

  return (
    <TitleCard
      title="User List"
      topMargin="mt-2"
      TopSideButtons={
        <TopSideButtons
          reFetch={refetch}
          openModalBtn={() => {
            dispatch(openModal("ADD_NEW_USER"));
          }}
        />
      }
    >
      <div className="overflow-x-auto w-full">
        {data?.data.length ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Joined At</th>
                <th>Location</th>
                <th>Deposit</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {data.data.map((user: any) => {
                const { id, phone, created_at } = user;
                const { name, lastName, location, pocket } = user.user_metadata;

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
                    <td>+98-{phone.slice(2)}</td>
                    <td>
                      <span className="mr-1">
                        {months[created_at.split("-")[1] - 1]}
                      </span>
                      <span>{created_at.split("-")[2].split("T")[0]}</span>
                    </td>
                    <td>{location}</td>
                    <td>${pocket?.walletBalance}</td>
                    <td>
                      <button
                        onClick={async () => {
                          await removeUser(id);
                        }}
                        className="btn btn-square btn-ghost"
                      >
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

export default Users;
