import { memo } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type Props = {
  id?: string;
  title: string;
  description: string;
  type: string;
  image_base64: string;
  embedded_url?: string;
};

const Section = memo(
  ({ title, description, type, image_base64, embedded_url }: Props) => {
    const renderMedia = () => {
      if (type === "image") {
        return (
          <img
            src={
              "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380"
            }
            className="w-full md:h-96 h-80 object-cover rounded-lg"
          />
        );
      } else if (type === "video") {
        return (
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/wdQoVMlVMGY?list=RDwdQoVMlVMGY"
            title="Ngủ sớm đi em - DucMinh ( Prod. by GC )"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="object-cover rounded-lg"
          ></iframe>
        );
      }

      return (
        <>
          <div className="bg-white w-full h-48 md:h-64 rounded-lg">
            No Media
          </div>
        </>
      );
    };

    const handleEdit = () => {};

    const handelDelete = () => {};

    return (
      <>
        <div className="flex justify-between items-center pb-2">
          <div className="w-full items-center align-middle h-full text-lg text-slate-800">
            Section 1 (Custom Section)
          </div>
          <div className="flex flex-row">
            <div
              className="hover:cursor-pointer ml-2 hover:text-indigo-800"
              onClick={() => handleEdit()}
            >
              <EditOutlinedIcon className="" fontSize="large" />
            </div>
            <div
              className="hover:cursor-pointer ml-2 hover:text-indigo-800"
              onClick={() => handelDelete()}
            >
              <DeleteOutlineIcon className="" fontSize="large" />
            </div>
          </div>
        </div>
        <hr className="w-full md:mx-4 md:max-w-[40%] border-slate-400 mb-8" />
        <div className="flex justify-center pb-4">
          <div className="items-center">{renderMedia()}</div>
        </div>
        <div className="flex  bg-white m-2  shadow-indigo-600 shadow-sm rounded">
          <span className="w-full overflow-x-auto m-4">
            I plan to digitally release Humid Memories as a 6 song EP on
            September 2nd, 2022 on all streaming platforms. If funded, at the
            end of the campaign I will reach out to manufacturers to start
            producing limited-run vinyl with all 12 songs. I will keep you in
            the loop with information as this project progresses.
          </span>
        </div>
      </>
    );
  }
);

Section.displayName = "Section";

export default Section;
