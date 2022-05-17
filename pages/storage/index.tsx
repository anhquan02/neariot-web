import { memo } from "react";
import Card from "../../components/Card";
import CreateCard from "../../components/Card/CreateCard";

const Storage = memo((props: any) => {

  const handleClickDetail = (id:any) =>{
    alert(id)
  }

  const handleCreateStorage = () => {
    alert("Hello World");
  };

  const Storage = () => {

    const sampleData = [
      {
        id:"1",
        name:"neariot-1",
        create_at:"2022",        
      },
      {
        id:"2",
        name:"neariot-2",
        create_at:"2022",        
      },
      {
        id:"3",
        name:"neariot-3",
        create_at:"2022",        
      },
    ]

    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">
        {sampleData.map((item,index)=>{
          return(
            <Card id={item.id} name={item.name} create_at={item.create_at} onClickCard={(id)=>handleClickDetail(id)} />
          )
        })}
      </div>
    );
  };

  return (
    <>
      <div className="lg:py-32 md:py-24 py-16 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-32 md:px-24">
        <CreateCard
          label="Create new key value storage"
          onCreate={() => handleCreateStorage()}
        />
        <div className="w-full flex mx-auto items-center">
            {Storage()}
        </div>
      </div>
    </>
  );
});

export default Storage;
