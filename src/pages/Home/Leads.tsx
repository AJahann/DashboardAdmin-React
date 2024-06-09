import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import TitleCard from "../../components/ui/TitleCard";

const leads = {
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

const TopSideButtons = () => {
  return (
    <div className="inline-block float-right">
      <button className="btn px-6 btn-sm normal-case btn-primary">
        Add New
      </button>
    </div>
  );
};

const Leads = () => {
  const getDummyStatus = (index: number) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1)
      return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2)
      return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3)
      return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };

  return (
    <TitleCard
      title="Current Leads"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons />}
    >
      {/* Leads List in table format loaded from slice after api call */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.data.map((l, k) => {
              return (
                <tr key={l.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={l.avatar} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{l.first_name}</div>
                        <div className="text-sm opacity-50">{l.last_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{l.email}</td>
                  <td>30 May 24</td>
                  <td>{getDummyStatus(k)}</td>
                  <td>{l.last_name}</td>
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

export default Leads;
