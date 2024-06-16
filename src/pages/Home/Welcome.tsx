const Welcome = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-2xl mt-8 font-bold">Admin Dashboard Starter Kit</h1>
      <div>
        <p className="py-2 mt-4">
          ✓ <span className="font-semibold">Light/dark</span> mode toggle
        </p>
        <p className="py-2 ">
          ✓ <span className="font-semibold">Redux toolkit</span> and other
          utility libraries configured
        </p>
        <p className="py-2">
          ✓ <span className="font-semibold">Calendar, Modal, Sidebar </span>{" "}
          components
        </p>
        <p className="py-2  mb-4">
          ✓ <span className="font-semibold">Daisy UI</span> components,{" "}
          <span className="font-semibold">Tailwind CSS</span> support
        </p>
      </div>
    </div>
  );
};

export default Welcome;
