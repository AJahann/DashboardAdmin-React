/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useQuery } from "react-query";

import ErrorAlert from "../../components/ErrorAlert";
import Loading from "../../components/Loading";
import SearchBar from "../../components/ui/SearchBar";
import TitleCard from "../../components/ui/TitleCard";
import UserRepository from "../../repositories/UserRepository";

const TopSideButtons = () => {
  const locationFilters = ["US", "Paris", "London", "Canada", "Tokyo"];

  return (
    <div className="inline-block float-right">
      <SearchBar styleClass="mr-4" />

      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn btn-sm btn-outline">
          <FunnelIcon className="w-5 mr-2" />
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-10 menu p-2 text-sm shadow bg-base-100 rounded-box w-52"
        >
          {locationFilters.map((l) => {
            return (
              <li key={l}>
                <p>{l}</p>
              </li>
            );
          })}
          <div className="divider mt-0 mb-0"> </div>
          <li>
            <a href="/">Remove Filter</a>
          </li>
        </ul>
      </div>
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

const sortActions = (users: any) => {
  const actionsArr: any[] = [];

  users.forEach(
    (user: {
      user_metadata: { pocket: { transactions: any[] }; name: any };
      phone: any;
    }) =>
      user.user_metadata.pocket.transactions.forEach((action) =>
        actionsArr.push({
          id: crypto.randomUUID(),
          name: user.user_metadata.name,
          phone: user.phone,
          ...action,
        }),
      ),
  );

  return actionsArr
    .filter((action) => action.date)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
};

const Transactions = () => {
  const { data, isLoading, error } = useQuery("users", reqGetUsers, {});

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert />;
  }

  if (data?.length === 0) {
    return (
      <div role="alert" className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>No Transaction here...</span>
      </div>
    );
  }

  return (
    <TitleCard
      title="Recent Transactions"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons />}
    >
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {sortActions(data ?? []).map((action) => {
              const { id, name, phone, type, amount, date } = action;

              const actionDate = new Date(date);
              const year = actionDate.getFullYear();
              const month = (actionDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
              const day = actionDate.getDate().toString().padStart(2, "0");

              return (
                <tr key={id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img
                            src="https://avatar.iran.liara.run/public"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>+98-{phone.slice(3)}</td>
                  {type === "sell" ? (
                    <td className="font-bold text-red-400">sell</td>
                  ) : (
                    <td className="font-bold text-green-400">buy</td>
                  )}
                  <td>${parseInt(amount.toString(), 10).toLocaleString()}</td>
                  <td>
                    {year}-{month}-{day}
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

export default Transactions;
