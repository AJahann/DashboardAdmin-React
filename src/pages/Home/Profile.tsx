import InputText from "../../components/InputText";
import TitleCard from "../../components/ui/TitleCard";
import ToogleInput from "../../components/ui/ToogleInput";
import TextAreaInput from "./components/TextAreaInput";

const Profile = () => {
  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputText labelTitle="Name" />
        <InputText labelTitle="Email Id" />
        <InputText labelTitle="Title" />
        <InputText labelTitle="Place" />
        <TextAreaInput labelTitle="About" />
      </div>
      <div className="divider" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputText labelTitle="Language" />
        <InputText labelTitle="Timezone" />
        <ToogleInput labelTitle="Sync Data" />
      </div>

      <div className="mt-16">
        <button className="btn btn-primary float-right">Update</button>
      </div>
    </TitleCard>
  );
};

export default Profile;
