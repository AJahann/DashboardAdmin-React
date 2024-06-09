import Subtitle from "./SubTitle";

interface TitleCardProps {
  title: string;
  children: React.ReactNode;
  topMargin?: string;
  TopSideButtons?: React.ReactNode;
}

const TitleCard = ({
  title,
  children,
  topMargin,
  TopSideButtons,
}: TitleCardProps) => {
  return (
    <div
      className={`card w-full p-6 bg-base-100 shadow-xl ${topMargin ?? "mt-6"}`}
    >
      <Subtitle styleClass={TopSideButtons ? "inline-block" : " "}>
        {title}

        {TopSideButtons ? (
          <div className="inline-block float-right">{TopSideButtons}</div>
        ) : null}
      </Subtitle>

      <div className="divider mt-2" />

      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
};

export default TitleCard;
