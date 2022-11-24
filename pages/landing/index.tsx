import { Fragment, memo, useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import ForwardIcon from "@mui/icons-material/Forward";
import ProjectCard from "../../components/Card/ProjectCard";
import { useSelector } from "react-redux";
import { getRandomInt } from "../../helpers/Utils";
import { utils } from "near-api-js";
import { useRouter } from "next/router";

interface MemberInfo {
  name: string;
  position: string;
  image: string;
}
interface Intro {
  title: string;
  description: string;
  image: string;
  color?: string;
}

const LandingPage = memo(() => {
  const [listRecommend, setListRecommend] = useState<any[]>([]);
  const wallet = useSelector((state: any) => state.wallet);
  const web3storage = useSelector((statex: any) => statex.w3storage);
  const router = useRouter();
  useEffect(() => {
    onLoadRecommend();
  }, []);

  const getSampleImage = () => {
    let image = 0;
    while (image === 0) {
      image = getRandomInt(10);
    }
    return `/project/neariot_${image}.png`;
  };

  const handleViewAll = () => {
    router.push("/home");
  };

  const generateIntro = (intro: Intro, index: number) => {
    return (
      <Fragment key={index}>
        <div className="relative items-center">
          <img src={intro.image} alt="" className="mx-auto" />
          <div className="">
            <div
              className={
                (intro.color ? intro.color : "text-[#1b1a2d]") + " text-center"
              }
            >
              <h3 className="font-bold text-2xl">{intro.title}</h3>
              <p className="text-start text-lg lg:px-8 md:px-2 py-4">
                {intro.description}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const generateMemberBox = (member: MemberInfo, index: number) => {
    return (
      <Fragment key={index}>
        <div className="relative items-center">
          <img src={member.image} alt="" className="mx-auto" />
          <div className="absolute inset-x-0 bottom-0 mb-[5%]">
            <div className="text-center">
              <h3 className="text-[#1b1a2d] font-bold">{member.name}</h3>
              <p className="text-[#1b1a2d]">{member.position}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const onLoadRecommend = async () => {
    const { contract } = wallet;
    const { web3Connector } = web3storage;
    await contract
      ?.get_rcm_projects()
      .then(async (res: any[]) => {
        res.forEach(async (item: any) => {
          const cid = item.metadata;
          await web3Connector?.getData(cid).then((metadata: any) => {
            let descriptions = null;
            let name = null;
            let img = null;
            let project_target = null;
            if (metadata) {
              descriptions = metadata.metadata.descriptions;
              name = metadata.metadata.name;
              img = metadata.metadata.image;
              project_target = metadata.metadata.fee;
            }
            const output = {
              id: item.id,
              owner: item.owner,
              name: name || "There is no name for this project",
              img: img || getSampleImage(),
              type: "0",
              descriptions:
                descriptions || "There is no description for this project",
              pledgers: parseFloat(
                `${utils.format.formatNearAmount(
                  item.total_pledge.toLocaleString("fullwide", {
                    useGrouping: false,
                  })
                )}`
              ),
              backers: item.pledgers.length,
              avg_rate: item.avg_rate || 0,
              project_target: project_target || "unexpect",
            };
            if (!listRecommend.includes(output)) {
              setListRecommend((listRecommend) => [...listRecommend, output]);
            }
          });
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="relative z-0 h-auto bg-[url('/landing/hero-bg.png')] w-full bg-no-repeat bg-cover bg-center">
        <div className=" flex lg:pb-20 md:pb-14 pb-12">
          <div className="lg:mt-44 md:mt-32 mt-28 md:ml-28 mx-10 flex flex-col w-full">
            <span className="lg:text-4xl md:text-2xl text-xl text-primary font-semibold mb-2">
              Invest in innovative ideas with crypto
            </span>
            <span className="lg:text-2xl md:text-lg text-xs text-black font-semibold mb-2">
              Invest as little as 5 dollars in bussinesses and projects that
              deliver real values
            </span>
            <CustomButton
              className_box="lg:w-64 lg:h-12 md:w-44 md:h-10 w-32 h-8 rounded-full border-2 border-white my-2"
              label="Start a project"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-white md:mx-20 mx-10 md:mb-8 mb-4">
        <div className="flex flex-row justify-between md:mt-8 my-4 items-center">
          <h1 className="text-primary md:text-2xl font-semibold text-lg ">
            Top-tier Projects
          </h1>
          <div
            className="text-primary md:text-lg font-semibold text-xs flex flex-row items-center gap-1 hover:cursor-pointer hover:underline"
            onClick={handleViewAll}
          >
            View all
            <ForwardIcon />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
          {listRecommend?.map((item: any, index: any) => {
            if (index > 3) return;
            return <ProjectCard key={index} {...item} />;
          })}
        </div>
      </div>
      <div className="relative bg-white md:mx-20 mx-10 md:mb-8 mb-4">
        <div className="flex flex-col md:mt-8 my-4 items-center ">
          <h1 className="text-primary md:text-2xl font-semibold text-lg mx-auto text-center">
            Neariot - The world's first crypto crowdfunding platform for real
            products
          </h1>
          <div className="grid md:grid-cols-3 gap-16 md:mx-16 mx-8 my-8">
            {introList.map((item: Intro, index: number) =>
              generateIntro(item, index)
            )}
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="relative bg-white md:mx-20 mx-10 md:mb-8 mb-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mt-auto pb-[2%] w-1/4 lg:text-xl md:text-xs text-sm md:mx-4 mx-2 text-orange-600">
            <span className="font-semibold">VISION</span>
            <span>
              Bring groundbreaking ideas to life in the fastest and smartest way
              through crow funding and smart contracts.
            </span>
          </div>
          <img src="/landing/vision-mission.png" alt="" className=" w-1/2" />
          <div className="flex flex-col mb-auto pt-[5%] w-1/4 lg:text-xl md:text-xs text-sm md:mx-4 mx-2 text-yellow-500">
            <span className="font-semibold">MISSION</span>
            <span>Become the #1 global crypto launch for SMEs.</span>
          </div>
        </div>
      </div>
      <div className="relative bg-white md:mb-8 py-8">
        <img src="/landing/road-map.png" alt="" />
      </div>
      <div className="relative bg-white md:mx-20 mx-10 md:mb-8 mb-4">
        <div className="flex flex-row gap-4 items-center">
          <img
            src="/landing/technology.png"
            alt="technology"
            className="w-1/4"
          />
          <div className="w-full flex flex-col text-primary gap-2">
            <h1 className=" lg:text-5xl md:text-3xl text-xl font-semibold">
              Our Technology
            </h1>
            <span className="lg:text-3xl md:text-xl text-xs">
              Transparent crow funding process using Web3 application
            </span>
            <span className="lg:text-3xl md:text-xl text-xs">
              More speedy data and transaction proccessing with smart-designed
              technology
            </span>
          </div>
        </div>
      </div>
      <div className="relative bg-purple-light md:mb-8 mb-4 pb-16">
        <h1 className="text-4xl  text-primary font-bold text-center md:py-8 py-4">
          Our People
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-16 gap-8 md:mx-16 mx-8">
          {memberList.map((member, index) => generateMemberBox(member, index))}
        </div>
      </div>
    </>
  );
});

const memberList: MemberInfo[] = [
  {
    name: "Thuong Nguyen",
    position: "Chief Executive Officer",
    // image: "/landing/team-img-box.png",
    image: "/landing/team-img-thuong.png",
  },
  {
    name: "Hieu Pham",
    position: "Chief Technology Officer",
    // image: "/landing/team-img-box.png",
    image: "/landing/team-img-hieu.png",
  },
  {
    name: "Quan Le",
    position: "Full-stack Developer",
    // image: "/landing/team-img-box.png",
    image: "/landing/team-img-quan.png",
  },
  {
    name: "Lien Pham",
    position: "Product Marketing",
    // image: "/landing/team-img-box.png",
    image: "/landing/team-img-lien.png",
  },
];

const introList: Intro[] = [
  {
    title: "Transparency",
    description:
      "Investors can learn when and how much businesses recieve the fund raised thanks to block-chain technology",
    image: "/landing/transparency.png",
    color: "text-purple-800",
  },
  {
    title: "Dedicated Businesses",
    description:
      "Businesses need to reach their target to recieve 100% of the fund raised",
    image: "/landing/dedicated-businesses.png",
    color: "text-indigo-500",
  },
  {
    title: "Sweet Rewards",
    description: "Receive products, merchandise or tokens in return",
    image: "/landing/reward.png",
    color: "text-sky-400",
  },
];

LandingPage.displayName = "LandingPage";

export default LandingPage;
