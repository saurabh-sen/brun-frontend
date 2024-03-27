import SearchBox from "@components/common/SearchBox";
import PredictableSec from "@components/home/predictable-sec";
import PredictableSec1 from "@components/home/predictable-sec1";
import PredictableSec2 from "@components/home/predictable-sec2";
import PredictableSec3 from "@components/home/predictable-sec3";
export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-10 max-w-full">
    <PredictableSec2
        beyondPredictable="Beyond predictable"
        experienceClothingThatTra="Experience clothing that transcends the predictable, offering styles that defy expectations and redefine fashion norms"
      />
      <PredictableSec1
        giftsJustForYou="Gifts Just for You"
        newArrivalsRectangle="/rectangle-102@2x.png"
        rectangle117="/rectangle-117@2x.png"
        topsBottomsAboutRectangle="/rectangle-117-1@2x.png"
      />
      <PredictableSec featured="Featured" />
      <section className=" w-full relative max-w-full mb-[100px]">
        <img
          className="h-[720px] flex-1 relative max-w-full overflow-hidden object-cover "
          loading="eager"
          alt=""
          src="/Component 30.png"
          
        />
      </section>
      <PredictableSec2
        beyondPredictable="Yes! We are all over the place"
        experienceClothingThatTra="Embrace the eclectic allure of our diverse clothing collection, where we're everywhere and anywhere, curating styles that resonate with every fashion journey"
        propWidth="unset"
        propAlignSelf="unset"
        propWidth1="681px"
      />
      <PredictableSec1
        giftsJustForYou="TOP PICKS"
        newArrivalsRectangle="/rectangle-102-1@2x.png"
        rectangle117="/rectangle-117-2@2x.png"
        topsBottomsAboutRectangle="/rectangle-104@2x.png"
      />
      <section className=" w-full flex flex-row items-start justify-start pt-0 pb-[50px] box-border max-w-full text-left text-11xl text-black font-urbanist">
        <h1 className="m-0 relative text-inherit uppercase font-normal font-inherit z-[1] mq825:text-5xl mq450:text-lg">
          Trending
        </h1>
      </section>
      <section className=" w-full flex flex-row items-start justify-start pt-0  pb-[100px] box-border max-w-full lg:pb-[65px] lg:box-border mq825:pb-[42px] mq825:box-border">
        <div className="h-[720px] flex-1 relative bg-[url('/rectangle-74@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <img
            className="absolute h-full w-full max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/Component 30.png"
          />
          <img
            className="absolute h-[5.57%] top-[89.78%] bottom-[4.65%] left-[calc(50%_-_890px)] rounded-sm max-h-full w-[51.2px] object-contain"
            loading="eager"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </section>
      <PredictableSec2
        beyondPredictable="No formulas, just fearless creativity"
        experienceClothingThatTra="Discover a world of fearless creativity in clothing, where there are no formulas, only endless possibilities"
        propWidth="unset"
        propAlignSelf="unset"
        propWidth1="583px"
      />
      
      <PredictableSec3
      newArrivalText="NEW ARRIVALS"
      newArrivalsRectangle="/frame-123@2x.png"
      rectangle117="/frame-126@2x.png"

      />
      <PredictableSec1
        giftsJustForYou="Iconic Essentials"
        newArrivalsRectangle="/rectangle-102-2@2x.png"
        rectangle117="/rectangle-104-1@2x.png"
        topsBottomsAboutRectangle="/rectangle-104-2@2x.png"
       
      />
    </main>
  );
}
