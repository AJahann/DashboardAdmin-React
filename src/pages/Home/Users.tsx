/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";

import ErrorAlert from "../../components/ErrorAlert";
import Loading from "../../components/Loading";
import TitleCard from "../../components/ui/TitleCard";
import { openModal } from "../../features/modal/Modal";
import UserRepository from "../../repositories/UserRepository";
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
    const response = await UserRepository.listUsers(1, 20);

    const users = response.data.users.filter((user) => {
      return !user.user_metadata.is_admin && !user.user_metadata.is_owner;
    });

    return users;
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
  const reqRemoveUser = useMutation(
    "remove user action",
    async (id: string) => {
      try {
        const response = await UserRepository.deleteUser(id);
        void refetch();

        return response;
      } catch (err) {
        return err as Error;
      }
    },
  );

  const handleRemoveUser = (id: string) => {
    void toast.promise(reqRemoveUser.mutateAsync(id), {
      loading: "Removing admin...",
      success: "User removed successfully!",
      error: "Failed to remove admin.",
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert />;
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
        {data?.length ? (
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
              {data.map((user: any) => {
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
                    <td>+98-{phone.slice(3)}</td>
                    <td>
                      <span className="mr-1">
                        {months[created_at.split("-")[1] - 1]}
                      </span>
                      <span>{created_at.split("-")[2].split("T")[0]}</span>
                    </td>
                    <td>{location}</td>
                    <td>
                      ${parseInt(pocket?.walletBalance, 10).toLocaleString()}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveUser(id)}
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
          <h2 className="w-full text-center text-2xl">Oops no User here...</h2>
        )}
      </div>
    </TitleCard>
  );
};

export default Users;
