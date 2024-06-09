/* eslint-disable jsx-a11y/label-has-associated-control */
import { FunnelIcon } from "@heroicons/react/24/outline";

import SearchBar from "../../components/ui/SearchBar";
import TitleCard from "../../components/ui/TitleCard";

const trans = [
  {
    name: "John",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "jhon@dashwind.com",
    location: "Canada",
    amount: 112,
    date: "35 may",
  },
  {
    name: "Matrix",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    email: "matrix@dashwind.com",
    location: "Peru",
    amount: 111,
    date: "35 may",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    email: "virat@dashwind.com",
    location: "London",
    amount: 190,
    date: "35 may",
  },
  {
    name: "Miya",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    email: "miya@dashwind.com",
    location: "Paris",
    amount: 230,
    date: "35 may",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "virat@dashwind.com",
    location: "Canada",
    amount: 331,
    date: "35 may",
  },
  {
    name: "Matrix",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "matrix@dashwind.com",
    location: "London",
    amount: 581,
    date: "35 may",
  },
  {
    name: "Ereena",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "ereena@dashwind.com",
    location: "Tokyo",
    amount: 151,
    date: "35 may",
  },
  {
    name: "John",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    email: "jhon@dashwind.com",
    location: "Paris",
    amount: 91,
    date: "35 may",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "virat@dashwind.com",
    location: "Canada",
    amount: 161,
    date: "35 may",
  },
  {
    name: "Matrix",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    email: "matrix@dashwind.com",
    location: "US",
    amount: 121,
    date: "35 may",
  },
  {
    name: "Ereena",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    email: "jhon@dashwind.com",
    location: "Tokyo",
    amount: 713,
    date: "35 may",
  },
  {
    name: "John",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    email: "ereena@dashwind.com",
    location: "London",
    amount: 217,
    date: "35 may",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "virat@dashwind.com",
    location: "Paris",
    amount: 117,
    date: "35 may",
  },
  {
    name: "Miya",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    email: "jhon@dashwind.com",
    location: "Canada",
    amount: 612,
    date: "35 may",
  },
  {
    name: "Matrix",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "matrix@dashwind.com",
    location: "London",
    amount: 631,
    date: "35 may",
  },
  {
    name: "Virat",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    email: "ereena@dashwind.com",
    location: "Tokyo",
    amount: 151,
    date: "35 may",
  },
  {
    name: "Ereena",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "virat@dashwind.com",
    location: "Paris",
    amount: 617,
    date: "35 may",
  },
];

const TopSideButtons = () => {
  const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"];

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
          className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52"
        >
          {locationFilters.map((l) => {
            return (
              <li key={l}>
                <a href="/">{l}</a>
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

const Transactions = () => {
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
              <th>Email Id</th>
              <th>Location</th>
              <th>Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((l) => {
              return (
                <tr key={l.name}>
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
                  <td>{l.location}</td>
                  <td>${l.amount}</td>
                  <td>6 may</td>
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
