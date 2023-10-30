import brandRecognitionImage from "../assets/images/icon-brand-recognition.svg";
import detailedRecordImage from "../assets/images/icon-detailed-records.svg";
import fullyCustomImage from "../assets/images/icon-fully-customizable.svg";

const AdvancedStatisticsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32 space-y-5 bg-slate-100">
      <h1 className="text-3xl font-bold text-primary-darkViolet">
        Advanced Statistics
      </h1>
      <div className="w-1/4">
        <p className="text-sm text-center text-neutral-gray">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 py-10">
        <div className="bg-white w-96 h-72 p-5 space-y-3 flex flex-col justify-center relative">
          <div className="bg-primary-darkViolet rounded-full w-20 h-20 flex items-center justify-center absolute -top-10">
            <img src={brandRecognitionImage} alt="brand-recognition" />
          </div>
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Brand Recognition
          </h1>
          <p className="text-sm text-neutral-grayishViolet">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="w-96 h-72 bg-white p-5 space-y-3 flex flex-col justify-center relative top-10">
          <div className="bg-primary-darkViolet rounded-full w-20 h-20 flex items-center justify-center absolute -top-10">
            <img src={detailedRecordImage} alt="brand-recognition" />
          </div>
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Detailed Records
          </h1>
          <p className="text-sm text-neutral-grayishViolet">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto
            asperiores impedit dolores consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-96 h-72 bg-white p-5 space-y-3 flex flex-col justify-center relative top-20">
          <div className="bg-primary-darkViolet rounded-full w-20 h-20 flex items-center justify-center absolute -top-10">
            <img src={fullyCustomImage} alt="brand-recognition" />
          </div>
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Fully Customizable
          </h1>
          <p className="text-sm text-neutral-grayishViolet">
            Fully Customizable Improve brand awareness and content
            discoverability through customizable links, supercharging audience
            engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatisticsPage;
