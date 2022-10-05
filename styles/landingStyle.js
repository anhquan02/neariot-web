const styles = {
    root: "lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8",
    general: {
        gridContainer: "",
    },
    hero: {
        heroBox: "ml-auto mr-20 w-1/2",
        title: "text-[#6e3cbc] text-[74.5px] font-[Arial]",
        subtitle: "text-[#1b1a2d] text-[25.5px] font-[RobotoSlab] pl-1",
        buttonText: "text-[#e2daf2] text-[29.5px] font-[Arial]",
    },
    about: {
        aboutBox: "mr-auto ml-10 mt-[92px] w-full",
        largeImage: "object-fill h-50 w-50",
        title: "text-[#6e3cbc] text-[74.5px] font-[Arial] font-black",
        subtitle: "mt-auto align-left w-2/3",
    },
    vnm: {
        vnmBox: "mr-auto ml-10 mb-20 w-full",
        textBox: "mb-20 w-[534px] h-[534px] bg-[url('/landing/vm-img.png')]",
        customGrid: "w-1/2 mr-20 mb-20 pt-40 justify-center display-grid grid-cols-2 grid-rows-2 gap-10",
        largeImage: "object-fill h-[534px] w-[534px]",
        title: {
            color: "#6e3cbc",
            fontSize: "74.5px",
            fontFamily: "Arial",
            fontWeight: "bold",
        },
        subtitle: {
            color: "#372660",
            fontSize: "25.5px",
            fontFamily: "RobotoSlab",
        },
        imageText: {
            fontSize: "29.5px",
            fontFamily: "RobotoSlab",
        }
    },
    team: {
        avatarBox: "w-[250px] h-[290px] bg-[url('/landing/team-img-box.png')]",
        teamBox: "mr-auto ml-10 mb-20 w-full",
        memberName: {
            color: "#1b1a2d",
            fontSize: "17.5px",
            fontFamily: "Arial",
            fontWeight: "bold",
        },
        memberPosition: {
            color: "#1b1a2d",
            fontSize: "12px",
            fontFamily: "RobotoSlab",
        }
    },
    subtitle: {
        color: "#1b1a2d",
        fontSize: "25.5px",
        fontFamily: "RobotoSlab",
    }
  };

export default styles; 