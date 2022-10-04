const styles = {
    root: "lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8",
    general: {
        // gridContainer: "w-full flex flex-wrap align-center justify-center ",
        gridContainer: "",
    },
    hero: {
        heroBox: "ml-auto mr-20 w-1/2",
        tab: "w-full h-[1158px] bg-[url('/landing/hero-bg.png')]",
        title: "text-[#6e3cbc] text-[74.5px] font-[Arial]",
        subtitle: "text-[#1b1a2d] text-[25.5px] font-[RobotoSlab] pl-1",
        buttonText: "text-[#e2daf2] text-[29.5px] font-[Arial]",
    },
    about: {
        tab: "w-full h-[704px] bg-[url('/landing/about-bg.png')]",
        aboutBox: "mr-auto ml-10 mt-[92px] w-full",
        largeImage: "object-fill h-50 w-50",
        title: "text-[#6e3cbc] text-[74.5px] font-[Arial] font-black",
        subtitle: "mt-auto text-[#1b1a2d] text-[25.5px] font-[RobotoSlab] align-left w-2/3",
    },
    vnm: {
        tab: "w-full h-[1104px] bg-[url('/landing/vnm-bg.png')]",
        vnmBox: "mr-auto ml-10 mb-20 w-full",
        textBox: "mb-20 w-[534px] h-[534px] bg-[url('/landing/vm-img.png')]",
        customGrid: "w-1/2 mr-20 mb-20 pt-40 justify-center display-grid grid-cols-2 grid-rows-2 gap-10",
        largeImage: "object-fill h-[534px] w-[534px]",
        title: "text-[#6e3cbc] text-[74.5px] font-[Arial] font-black",
        subtitle: "mt-auto text-[#1b1a2d] text-[25.5px] font-[RobotoSlab]",
    },
    team: {
        tab: "w-full h-[700px] bg-[url('/landing/twc-bg.png')]",
        avatarBox: "w-[250px] h-[290px] bg-[url('/landing/team-img-box.png')]",
        teamBox: "mr-auto ml-10 mb-20 w-full",
    }
  };

export default styles; 