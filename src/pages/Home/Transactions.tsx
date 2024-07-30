// /* eslint-disable jsx-a11y/label-has-associated-control */
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useQuery } from "react-query";

import SearchBar from "../../components/ui/SearchBar";
import TitleCard from "../../components/ui/TitleCard";
import { adminApi } from "../../services/axios/api";

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
    const response = await adminApi.post("/get-users", {
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

const sortActions = (users: { data: any }) => {
  const actionsArr = [];

  users.data.forEach((user) =>
    user.user_metadata.pocket.transactions.forEach((action) =>
      actionsArr.push({
        id: crypto.randomUUID(),
        name: user.user_metadata.name,
        phone: user.phone,
        ...action,
      }),
    ),
  );

  return actionsArr.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const Transactions = () => {
  const { data, isLoading, error } = useQuery("users", reqGetUsers, {});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops something went wrong!</p>;
  }
  sortActions(data);

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
            {sortActions(data).map((action) => {
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
